gdjs.evtsExt__RoomManager__goToRoom = {};

gdjs.evtsExt__RoomManager__goToRoom.conditionTrue_0 = {val:false};
gdjs.evtsExt__RoomManager__goToRoom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RoomManager__goToRoom.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtsExt__BackgroundScene__switchToBGScene.func(runtimeScene, "Rooms", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().get("currentRoomID").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0));
}}

}


}; //End of gdjs.evtsExt__RoomManager__goToRoom.eventsList0x5b7f48


gdjs.evtsExt__RoomManager__goToRoom.func = function(runtimeScene, id, parentEventsFunctionContext) {
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
if (argName === "id") return id;
    return "";
  }
};


gdjs.evtsExt__RoomManager__goToRoom.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}

