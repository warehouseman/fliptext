#!/bin/bash
#
## Develop and test settings
export MONGO_URL=mongodb://localhost:27017/fliptext

## Build and deploy settings
export TARGET_SERVER=www.fleetingclouds.com
export ZIPALIGN_PATH=~/.meteor/android_bundle/android-sdk/build-tools/21.0.0
export ALIGNMENT=4

export BUILD_DIRECTORY=../tmp

# export VELOCITY_DEBUG=1
