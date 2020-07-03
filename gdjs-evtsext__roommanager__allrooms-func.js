gdjs.evtsExt__RoomManager__allRooms = {};

gdjs.evtsExt__RoomManager__allRooms.conditionTrue_0 = {val:false};
gdjs.evtsExt__RoomManager__allRooms.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RoomManager__allRooms.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("_RoomManager__RoomsNumber")); }}}

}


}; //End of gdjs.evtsExt__RoomManager__allRooms.eventsList0x5b7f48


gdjs.evtsExt__RoomManager__allRooms.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__RoomManager__allRooms.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

