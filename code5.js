gdjs.FunctionsIncludesCode = {};
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects2= [];

gdjs.FunctionsIncludesCode.conditionTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition0IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition1IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.condition2IsTrue_0 = {val:false};
gdjs.FunctionsIncludesCode.conditionTrue_1 = {val:false};
gdjs.FunctionsIncludesCode.condition0IsTrue_1 = {val:false};
gdjs.FunctionsIncludesCode.condition1IsTrue_1 = {val:false};
gdjs.FunctionsIncludesCode.condition2IsTrue_1 = {val:false};


gdjs.FunctionsIncludesCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


{
{}}

}


{


{
{}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{



}


{


{
{}}

}


{


{
{}}

}


{



}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
gdjs.FunctionsIncludesCode.condition1IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.FunctionsIncludesCode.condition0IsTrue_0.val ) {
{
{gdjs.FunctionsIncludesCode.conditionTrue_1 = gdjs.FunctionsIncludesCode.condition1IsTrue_0;
gdjs.FunctionsIncludesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22542492);
}
}}
if (gdjs.FunctionsIncludesCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.func(runtimeScene, gdjs.evtsExt__DebugMessages__prompt.func(runtimeScene, "Enter the Companion app connection ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtsExt__CompanionAppCommunication__onEventType.func(runtimeScene, "SayHi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DebugMessages__popup.func(runtimeScene, "Hi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = false;
{
gdjs.FunctionsIncludesCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.FunctionsIncludesCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__BackgroundScene__loadBGScene.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BackgroundScene__switchBack.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__BackgroundScene__switchToBGScene.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__goToRoom.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.func(runtimeScene, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.FunctionsIncludesCode.eventsList0x5b7a48


gdjs.FunctionsIncludesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.FunctionsIncludesCode.GDfade_95tiled_95spriteObjects2.length = 0;

gdjs.FunctionsIncludesCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['FunctionsIncludesCode'] = gdjs.FunctionsIncludesCode;
