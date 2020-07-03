gdjs.evtsExt__BackgroundScene__switchBack = {};

gdjs.evtsExt__BackgroundScene__switchBack.conditionTrue_0 = {val:false};
gdjs.evtsExt__BackgroundScene__switchBack.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__BackgroundScene__switchBack.userFunc0x145f688 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const runtimeGame = runtimeScene.getGame();
runtimeGame.scenes = runtimeGame.scenes || {};

if (runtimeGame._sceneStack._stack.length <= 1) return null;

runtimeGame._sceneStack._stack.pop();

// Tell the new current scene it's being resumed
const currentScene = runtimeGame._sceneStack._stack[runtimeGame._sceneStack._stack.length - 1];
if (currentScene) {
    currentScene.onResume();
}

};
gdjs.evtsExt__BackgroundScene__switchBack.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__BackgroundScene__switchBack.userFunc0x145f688(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__BackgroundScene__switchBack.eventsList0x5b7f48


gdjs.evtsExt__BackgroundScene__switchBack.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};


gdjs.evtsExt__BackgroundScene__switchBack.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}

