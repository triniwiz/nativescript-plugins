package com.github.triniwiz.couchbase;

import com.couchbase.lite.*;

public class TNSReplicatorConfiguration {
    public static void setReplicatorType(String type, ReplicatorConfiguration config) {
        ReplicatorConfiguration.ReplicatorType replicatorType;
        switch (type) {
            case "pull":
                replicatorType = ReplicatorConfiguration.ReplicatorType.PULL;
                break;
            case "push":
                replicatorType = ReplicatorConfiguration.ReplicatorType.PUSH;
                break;
            default:
                replicatorType = ReplicatorConfiguration.ReplicatorType.PUSH_AND_PULL;
                break;
        }
        config.setReplicatorType(replicatorType);
    }
}
