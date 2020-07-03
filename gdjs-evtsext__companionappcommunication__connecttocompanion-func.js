gdjs.evtsExt__CompanionAppCommunication__connectToCompanion = {};

gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.conditionTrue_0 = {val:false};
gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.userFunc0x145e030 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let game = runtimeScene.getGame();
window.game = game;
if(Peer) {
    game.p = new Peer();
    game.p.on("open", ()=> {
        game.connection = game.p.connect(eventsFunctionContext.getArgument("id"));
        game.pdata = {};
        game.connection.on("data", (data) => {
            game.pdata[data.type] = data.payload;
        });
    });
}

};
gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.userFunc0x145e030(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.eventsList0x5b7f48


gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.func = function(runtimeScene, id, parentEventsFunctionContext) {
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


gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return;
}

