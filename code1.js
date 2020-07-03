gdjs.MenuCode = {};
gdjs.MenuCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.MenuCode.GDfade_95tiled_95spriteObjects2= [];
gdjs.MenuCode.GDButtonBeginGameObjects1= [];
gdjs.MenuCode.GDButtonBeginGameObjects2= [];
gdjs.MenuCode.GDcrossairObjects1= [];
gdjs.MenuCode.GDcrossairObjects2= [];
gdjs.MenuCode.GDTextBeginGameObjects1= [];
gdjs.MenuCode.GDTextBeginGameObjects2= [];
gdjs.MenuCode.GDButtonSettingsObjects1= [];
gdjs.MenuCode.GDButtonSettingsObjects2= [];
gdjs.MenuCode.GDButtonQuitGameObjects1= [];
gdjs.MenuCode.GDButtonQuitGameObjects2= [];
gdjs.MenuCode.GDTextSettingsObjects1= [];
gdjs.MenuCode.GDTextSettingsObjects2= [];
gdjs.MenuCode.GDTextQuitGameObjects1= [];
gdjs.MenuCode.GDTextQuitGameObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


{
gdjs.MenuCode.GDcrossairObjects1.createFrom(runtimeScene.getObjects("crossair"));
{for(var i = 0, len = gdjs.MenuCode.GDcrossairObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcrossairObjects1[i].setZOrder(109087867987);
}
}}

}


{


{
gdjs.MenuCode.GDcrossairObjects1.createFrom(runtimeScene.getObjects("crossair"));
{for(var i = 0, len = gdjs.MenuCode.GDcrossairObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcrossairObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
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


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22249244);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.func(runtimeScene, gdjs.evtsExt__DebugMessages__prompt.func(runtimeScene, "Enter the Companion app connection ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtsExt__CompanionAppCommunication__onEventType.func(runtimeScene, "SayHi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DebugMessages__popup.func(runtimeScene, "Hi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.MenuCode.GDButtonBeginGameObjects1.createFrom(runtimeScene.getObjects("ButtonBeginGame"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonBeginGameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtonBeginGameObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonBeginGameObjects1[k] = gdjs.MenuCode.GDButtonBeginGameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonBeginGameObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", true);
}}

}


{

gdjs.MenuCode.GDButtonSettingsObjects1.createFrom(runtimeScene.getObjects("ButtonSettings"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtonSettingsObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonSettingsObjects1[k] = gdjs.MenuCode.GDButtonSettingsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonSettingsObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", true);
}}

}


{

gdjs.MenuCode.GDButtonQuitGameObjects1.createFrom(runtimeScene.getObjects("ButtonQuitGame"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDButtonQuitGameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDButtonQuitGameObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDButtonQuitGameObjects1[k] = gdjs.MenuCode.GDButtonQuitGameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDButtonQuitGameObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b7a48


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.MenuCode.GDfade_95tiled_95spriteObjects2.length = 0;
gdjs.MenuCode.GDButtonBeginGameObjects1.length = 0;
gdjs.MenuCode.GDButtonBeginGameObjects2.length = 0;
gdjs.MenuCode.GDcrossairObjects1.length = 0;
gdjs.MenuCode.GDcrossairObjects2.length = 0;
gdjs.MenuCode.GDTextBeginGameObjects1.length = 0;
gdjs.MenuCode.GDTextBeginGameObjects2.length = 0;
gdjs.MenuCode.GDButtonSettingsObjects1.length = 0;
gdjs.MenuCode.GDButtonSettingsObjects2.length = 0;
gdjs.MenuCode.GDButtonQuitGameObjects1.length = 0;
gdjs.MenuCode.GDButtonQuitGameObjects2.length = 0;
gdjs.MenuCode.GDTextSettingsObjects1.length = 0;
gdjs.MenuCode.GDTextSettingsObjects2.length = 0;
gdjs.MenuCode.GDTextQuitGameObjects1.length = 0;
gdjs.MenuCode.GDTextQuitGameObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
