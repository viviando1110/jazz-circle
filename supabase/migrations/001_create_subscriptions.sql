-- Create subscriptions table for iOS in-app purchase tracking

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL, -- iOS device identifier or user email
  product_id TEXT NOT NULL, -- com.jazzcircle.app.monthly or .annual
  status TEXT NOT NULL CHECK (status IN ('trial', 'active', 'expired', 'cancelled')),
  trial_started_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ NOT NULL,
  receipt_data TEXT, -- Base64 encoded Apple receipt (encrypted, for verification)
  last_verified_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookups by user_id
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);

-- Index for finding active subscriptions
CREATE INDEX idx_subscriptions_status_expires ON subscriptions(status, expires_at);

-- Enable Row Level Security (RLS)
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own subscriptions
CREATE POLICY "Users can view own subscriptions"
  ON subscriptions
  FOR SELECT
  USING (user_id = current_setting('request.jwt.claims', true)::json->>'sub');

-- Policy: Service role can do everything (for receipt validation)
CREATE POLICY "Service role has full access"
  ON subscriptions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Comments for documentation
COMMENT ON TABLE subscriptions IS 'Tracks iOS in-app purchase subscriptions';
COMMENT ON COLUMN subscriptions.user_id IS 'iOS device identifier (IDFV) or user email';
COMMENT ON COLUMN subscriptions.product_id IS 'Apple product ID (monthly or annual)';
COMMENT ON COLUMN subscriptions.receipt_data IS 'Encrypted Apple receipt for re-verification';
