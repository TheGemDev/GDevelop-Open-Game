gdjs.evtsExt__RoomManager__registerRoom = {};

gdjs.evtsExt__RoomManager__registerRoom.conditionTrue_0 = {val:false};
gdjs.evtsExt__RoomManager__registerRoom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__RoomManager__registerRoom.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getGame().getVariables().get("_RoomManager__Rooms").getChild("id" + gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0))).getChild("x").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("x")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("_RoomManager__Rooms").getChild("id" + gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0))).getChild("y").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("_RoomManager__RoomsNumber").add(1);
}}

}


}; //End of gdjs.evtsExt__RoomManager__registerRoom.eventsList0x5b7f48


gdjs.evtsExt__RoomManager__registerRoom.func = function(runtimeScene, id, x, y, parentEventsFunctionContext) {
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
if (argName === "x") return x;
if (argName === "y") return y;
    return "";
  }
};


gdjs.evtsExt__RoomManager__registerRoom.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}

