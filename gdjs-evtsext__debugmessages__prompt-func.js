gdjs.evtsExt__DebugMessages__prompt = {};

gdjs.evtsExt__DebugMessages__prompt.conditionTrue_0 = {val:false};
gdjs.evtsExt__DebugMessages__prompt.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DebugMessages__prompt.userFunc0x145e050 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = prompt(eventsFunctionContext.getArgument("q"));

};
gdjs.evtsExt__DebugMessages__prompt.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DebugMessages__prompt.userFunc0x145e050(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__DebugMessages__prompt.eventsList0x5b7f48


gdjs.evtsExt__DebugMessages__prompt.func = function(runtimeScene, q, parentEventsFunctionContext) {
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
if (argName === "q") return q;
    return "";
  }
};


gdjs.evtsExt__DebugMessages__prompt.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

