import {TNSParseConfig} from "./common";
import {Object} from './Object';
import {Utils} from '@nativescript/core';
import {Query} from './Query';
import {File} from './File';
import {User} from './User';

export default {
  init(config: TNSParseConfig) {
    const conf = new com.parse.Parse.Configuration.Builder(Utils.android.getApplicationContext());
    conf.applicationId(config.applicationId);
    conf.clientKey(config.clientKey);
    conf.maxRetries(config.maxRetries);
    if (config.enableLocalDataStore) {
      conf.enableLocalDataStore();
    }
    conf.server(config.server)
    com.parse.Parse.initialize(conf.build());
  },
  Object: Object,
  File: File,
  Query: Query,
  User: User
}
