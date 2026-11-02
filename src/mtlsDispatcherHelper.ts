// Veritasor Backend: Outbound mTLS Webhook Dispatcher (Issue #1207)
import https from 'node:https';

export interface MtlsCertificateOptions {
  cert: string;
  key: string;
  ca?: string;
}

export function createMtlsAgent(options: MtlsCertificateOptions): https.Agent {
  return new https.Agent({
    cert: options.cert,
    key: options.key,
    ca: options.ca,
    rejectUnauthorized: true,
    keepAlive: true
  });
}
