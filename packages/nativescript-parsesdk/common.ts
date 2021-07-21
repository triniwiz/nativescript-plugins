export interface TNSParseConfig {
  applicationId: string;
  clientKey: string;
  maxRetries?: number;
  enableLocalDataStore?: boolean;
  server: string;
}
