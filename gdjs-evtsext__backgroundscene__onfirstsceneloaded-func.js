gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded = {};

gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("_RoomManager__RoomsRegistered")) == 0;
}if (gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("_RoomManager__RoomsRegistered").setNumber(1);
}{gdjs.evtsExt__BackgroundScene__loadBGScene.func(runtimeScene, "Rooms", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.eventsList0x5b7f48


gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerFirstRuntimeSceneLoadedCallback(function(runtimeScene) {
    gdjs.evtsExt__BackgroundScene__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
});
