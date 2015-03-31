# fliptext

TravisCI latest build : [![Build Status](https://travis-ci.org/warehouseman/fliptext.svg?branch=master)](https://travis-ci.org/warehouseman/fliptext)

# Synopsis
Demonstrates creating and tiny-testing a bare minimum Meteor package.  Used in conjunction with the demo package, it provides a fully functional app and embedded package tested with TinyTest and with Mocha and Cucumber through Velocity.

# Purpose
The real purpose of this package is to provide the simplest possible self-standing Meteor package that shows correctly :

 - the structure of a working Meteor package
 - inclusion of a working jQuery plugin
 - a valid [Travis CI build project](https://travis-ci.org/warehouseman/fliptext)
 - how to test with Tiny Test

When built into its [accompanying demo app](https://github.com/warehouseman/fliptext-demo), it also shows correctly :

 - testing with Velocity and Cucumber
 - working in a browser
 - working in an Android phone
 - publishing [on Atmospherejs.com](https://atmospherejs.com/warehouseman/fliptext) 

## Usage :
There are two ways to see this in action :

  1. Clone it's accompanying demo Meteor app - "[fliptext-demo](https://github.com/warehouseman/fliptext-demo)" and run the app's intenal test script.
  2. Run its intenal test script.

Using the latter, you should see a result like this :

![Tiny Test report](http://i.imgur.com/NqDfNPd.png)

## Adaptation : 
To modify this package for your own needs, do this :

    export WORK=/home/yourself/someProjectDir  # FIXME
    cd ${WORK}
    git clone git@github.com:warehouseman/fliptext-demo.git
    git clone git@github.com:warehouseman/fliptext.git
    cd fliptext-demo
    mkdir -p packages
    cd packages
    ln -s ${WORK}/fliptext warehouseman:fliptext
    cd ..
    meteor

You will see meteor install itself, downloading packages from AtmosphereJS, including warehouseman:fliptext.  Open your browser to localhost:3000 and you should see Velocity get 4 green passes.

Start up your editor and increment the version number parameter in the file */home/yourself/someProjectDir/fliptext/package.js*

Save the file, while watching the console log of meteor.  You will see that it immediately upgrades the fliptext package to the new local version.

You can then alter the fliptext code and immediately see the effect in Velocity.


## Comment

Possibly you will look at this and think, "Sheesh, nuthin' to it!".

In fact, to get to this point, it took me about a week of sifting through documentation, watching videos and reading blog posts and Q & A forums (too much of which is obsolete).

It is a bare-minimum skeleton that actually works.

The tiny amount of code attests to the power and time-saving possibilities of Meteor -- **once you know what you are doing!**


