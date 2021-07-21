import {TNSParseConfig} from "./common";
import {Object} from './Object';
import {File} from './File';
import {Query} from './Query';
import {User} from './User';

export default {
  init(config: TNSParseConfig) {
    const conf = ParseClientConfiguration.configurationWithBlock((conf) => {
      conf.applicationId = config.applicationId;
      conf.clientKey = config.clientKey;
      conf.networkRetryAttempts = config.maxRetries;
      conf.localDatastoreEnabled = !!config.enableLocalDataStore
      conf.server = config.server;
    });
    Parse.initializeWithConfiguration(conf);
  },
  Object: Object,
  File: File,
  Query: Query,
  User: User
}
