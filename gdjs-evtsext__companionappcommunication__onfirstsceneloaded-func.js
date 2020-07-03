gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded = {};

gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.userFunc0x145eb18 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let s = document.createElement("script");
s.src = "https://unpkg.com/peerjs@1.2.0/dist/peerjs.min.js";
document.body.appendChild(s);

};
gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.userFunc0x145eb18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.eventsList0x5b7f48


gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerFirstRuntimeSceneLoadedCallback(function(runtimeScene) {
    gdjs.evtsExt__CompanionAppCommunication__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
});
