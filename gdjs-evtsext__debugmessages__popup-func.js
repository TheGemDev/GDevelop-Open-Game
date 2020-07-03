gdjs.evtsExt__DebugMessages__popup = {};

gdjs.evtsExt__DebugMessages__popup.conditionTrue_0 = {val:false};
gdjs.evtsExt__DebugMessages__popup.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DebugMessages__popup.userFunc0x1457c50 = function(runtimeScene, eventsFunctionContext) {
"use strict";
alert(eventsFunctionContext.getArgument("message"));
};
gdjs.evtsExt__DebugMessages__popup.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DebugMessages__popup.userFunc0x1457c50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__DebugMessages__popup.eventsList0x5b7f48


gdjs.evtsExt__DebugMessages__popup.func = function(runtimeScene, message, parentEventsFunctionContext) {
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
if (argName === "message") return message;
    return "";
  }
};


gdjs.evtsExt__DebugMessages__popup.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}

