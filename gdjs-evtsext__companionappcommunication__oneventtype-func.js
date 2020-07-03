gdjs.evtsExt__CompanionAppCommunication__onEventType = {};

gdjs.evtsExt__CompanionAppCommunication__onEventType.conditionTrue_0 = {val:false};
gdjs.evtsExt__CompanionAppCommunication__onEventType.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CompanionAppCommunication__onEventType.userFunc0x145f830 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let game = runtimeScene.getGame();
eventsFunctionContext.returnValue = false;
let event = eventsFunctionContext.getArgument("eventName");

if(typeof game.connection === "undefined" || typeof game.pdata === "undefined") return; 
if(event in game.pdata) {
    eventsFunctionContext.returnValue = true;
    game.eventData = game.pdata[event];
    delete game.pdata[event];
}

};
gdjs.evtsExt__CompanionAppCommunication__onEventType.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CompanionAppCommunication__onEventType.userFunc0x145f830(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__CompanionAppCommunication__onEventType.eventsList0x5b7f48


gdjs.evtsExt__CompanionAppCommunication__onEventType.func = function(runtimeScene, eventName, parentEventsFunctionContext) {
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
if (argName === "eventName") return eventName;
    return "";
  }
};


gdjs.evtsExt__CompanionAppCommunication__onEventType.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

