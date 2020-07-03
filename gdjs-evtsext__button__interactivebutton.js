
gdjs.evtsExt__Button__InteractiveButton = gdjs.evtsExt__Button__InteractiveButton || {};

/**
 * Behavior generated from Interactive button
 * @class InteractiveButton
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.ANIMATION_UP = behaviorData.ANIMATION_UP !== undefined ? behaviorData.ANIMATION_UP : "up";
    this._behaviorData.ANIMATION_OVER = behaviorData.ANIMATION_OVER !== undefined ? behaviorData.ANIMATION_OVER : "over";
    this._behaviorData.ANIMATION_DOWN = behaviorData.ANIMATION_DOWN !== undefined ? behaviorData.ANIMATION_DOWN : "down";
    this._behaviorData.ANIMATION_DISABLED = behaviorData.ANIMATION_DISABLED !== undefined ? behaviorData.ANIMATION_DISABLED : "disabled";
    this._behaviorData.ENABLED = behaviorData.ENABLED !== undefined ? behaviorData.ENABLED : true;
};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Button::InteractiveButton", gdjs.evtsExt__Button__InteractiveButton.InteractiveButton);

// Properties:
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")).setNumber(-(1));
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreated = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1459724 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DISABLED()) != "");
}
}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DISABLED()));
}
}{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("ClickCaptured")).setNumber(-(1));
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1459724
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1457b8c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_UP()) != "");
}
}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_UP()));
}
}}

}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).isHover((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_OVER()) != "");
}
}}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_OVER()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).isDown((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.conditionTrue_1.val = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DOWN()) != "");
}
}}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DOWN()));
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1457b8c
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1459654 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED()) ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1459724(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1457b8c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1459654
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2});gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1});gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x145abb4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, runtimeScene, true, false);
}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("ClickCaptured")).setNumber(1);
}
}}

}


{

/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46doStepPreEventsContext_46GDObjectObjects1Objects, runtimeScene, true, true);
}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")).setNumber(0);
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x145abb4
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x1459654(runtimeScene, eventsFunctionContext);
}


{



}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) == -(1) ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x145abb4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition4IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46isClickedContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1});gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46isClickedContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) == 1 ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition3IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length = k;}}
}
}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.condition3IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClicked = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition4IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46isHoverContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1});gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46isHoverContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) != 0 ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition2IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition3IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length = k;}}
}
}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.condition3IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHover = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition4IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46isDownContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1});gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition2IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition3IsTrue_0.val = false;
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.mapOfGDgdjs_46evtsExt_95_95Button_95_95InteractiveButton_46InteractiveButton_46prototype_46isDownContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) == 1 ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition3IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length = k;}}
}
}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.condition3IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDown = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED()) ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabled = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setENABLED(true);
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnable = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setENABLED(false);
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisable = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition3IsTrue_0 = {val:false};


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.eventsList0x5b7ca8 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) > -(1) ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")).setNumber(-(1));
}
}}

}


}; //End of gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.eventsList0x5b7ca8


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.eventsList0x5b7ca8(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._getANIMATION_UP = function() {
    return this._behaviorData.ANIMATION_UP !== undefined ? this._behaviorData.ANIMATION_UP : "up";
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._setANIMATION_UP = function(newValue) {
    this._behaviorData.ANIMATION_UP = newValue;
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._getANIMATION_OVER = function() {
    return this._behaviorData.ANIMATION_OVER !== undefined ? this._behaviorData.ANIMATION_OVER : "over";
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._setANIMATION_OVER = function(newValue) {
    this._behaviorData.ANIMATION_OVER = newValue;
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._getANIMATION_DOWN = function() {
    return this._behaviorData.ANIMATION_DOWN !== undefined ? this._behaviorData.ANIMATION_DOWN : "down";
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._setANIMATION_DOWN = function(newValue) {
    this._behaviorData.ANIMATION_DOWN = newValue;
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._getANIMATION_DISABLED = function() {
    return this._behaviorData.ANIMATION_DISABLED !== undefined ? this._behaviorData.ANIMATION_DISABLED : "disabled";
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._setANIMATION_DISABLED = function(newValue) {
    this._behaviorData.ANIMATION_DISABLED = newValue;
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._getENABLED = function() {
    return this._behaviorData.ENABLED !== undefined ? this._behaviorData.ENABLED : true;
};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype._setENABLED = function(newValue) {
    this._behaviorData.ENABLED = newValue;
};
