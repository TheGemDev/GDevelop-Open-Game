gdjs.SettingsCode = {};
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects2= [];
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects3= [];
gdjs.SettingsCode.GDsettingshadowsObjects1= [];
gdjs.SettingsCode.GDsettingshadowsObjects2= [];
gdjs.SettingsCode.GDsettingshadowsObjects3= [];
gdjs.SettingsCode.GDshadowsObjects1= [];
gdjs.SettingsCode.GDshadowsObjects2= [];
gdjs.SettingsCode.GDshadowsObjects3= [];
gdjs.SettingsCode.GDVolumeObjects1= [];
gdjs.SettingsCode.GDVolumeObjects2= [];
gdjs.SettingsCode.GDVolumeObjects3= [];
gdjs.SettingsCode.GDSettingsObjects1= [];
gdjs.SettingsCode.GDSettingsObjects2= [];
gdjs.SettingsCode.GDSettingsObjects3= [];
gdjs.SettingsCode.GDsettingsoundObjects1= [];
gdjs.SettingsCode.GDsettingsoundObjects2= [];
gdjs.SettingsCode.GDsettingsoundObjects3= [];
gdjs.SettingsCode.GDsoundObjects1= [];
gdjs.SettingsCode.GDsoundObjects2= [];
gdjs.SettingsCode.GDsoundObjects3= [];
gdjs.SettingsCode.GDcrossairObjects1= [];
gdjs.SettingsCode.GDcrossairObjects2= [];
gdjs.SettingsCode.GDcrossairObjects3= [];
gdjs.SettingsCode.GDsettingfullscreenObjects1= [];
gdjs.SettingsCode.GDsettingfullscreenObjects2= [];
gdjs.SettingsCode.GDsettingfullscreenObjects3= [];
gdjs.SettingsCode.GDFullscreenObjects1= [];
gdjs.SettingsCode.GDFullscreenObjects2= [];
gdjs.SettingsCode.GDFullscreenObjects3= [];
gdjs.SettingsCode.GDvolplusObjects1= [];
gdjs.SettingsCode.GDvolplusObjects2= [];
gdjs.SettingsCode.GDvolplusObjects3= [];
gdjs.SettingsCode.GDvolminusObjects1= [];
gdjs.SettingsCode.GDvolminusObjects2= [];
gdjs.SettingsCode.GDvolminusObjects3= [];
gdjs.SettingsCode.GDbackObjects1= [];
gdjs.SettingsCode.GDbackObjects2= [];
gdjs.SettingsCode.GDbackObjects3= [];
gdjs.SettingsCode.GDvolumevolumeObjects1= [];
gdjs.SettingsCode.GDvolumevolumeObjects2= [];
gdjs.SettingsCode.GDvolumevolumeObjects3= [];
gdjs.SettingsCode.GDminusObjects1= [];
gdjs.SettingsCode.GDminusObjects2= [];
gdjs.SettingsCode.GDminusObjects3= [];
gdjs.SettingsCode.GDplusObjects1= [];
gdjs.SettingsCode.GDplusObjects2= [];
gdjs.SettingsCode.GDplusObjects3= [];
gdjs.SettingsCode.GDgobackObjects1= [];
gdjs.SettingsCode.GDgobackObjects2= [];
gdjs.SettingsCode.GDgobackObjects3= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};


gdjs.SettingsCode.eventsList0x153f78c = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Volume")));
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")) == 100;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString("100");
}
}{runtimeScene.getGame().getVariables().get("Volume").setNumber(100);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")) > 100;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects2.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString("100");
}
}{runtimeScene.getGame().getVariables().get("Volume").setNumber(100);
}}

}


{

gdjs.SettingsCode.GDbackObjects1.createFrom(runtimeScene.getObjects("back"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbackObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDbackObjects1[k] = gdjs.SettingsCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbackObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x153f78c
gdjs.SettingsCode.eventsList0x1545744 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("shadowsetting")) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDshadowsObjects2.createFrom(runtimeScene.getObjects("shadows"));
{for(var i = 0, len = gdjs.SettingsCode.GDshadowsObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDshadowsObjects2[i].setString("Shadows: On");
}
}{runtimeScene.getGame().getVariables().get("shadowsetting").setString("toggled");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("shadowsetting")) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDshadowsObjects1.createFrom(runtimeScene.getObjects("shadows"));
{for(var i = 0, len = gdjs.SettingsCode.GDshadowsObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDshadowsObjects1[i].setString("Shadows: Off");
}
}{runtimeScene.getGame().getVariables().get("shadowsetting").setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x1545744
gdjs.SettingsCode.eventsList0x15451cc = function(runtimeScene) {

{

gdjs.SettingsCode.GDsettingshadowsObjects1.createFrom(runtimeScene.getObjects("settingshadows"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDsettingshadowsObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsettingshadowsObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDsettingshadowsObjects1[k] = gdjs.SettingsCode.GDsettingshadowsObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsettingshadowsObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList0x1545744(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SettingsCode.eventsList0x15451cc
gdjs.SettingsCode.eventsList0x153c094 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("soundsetting")) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDsoundObjects2.createFrom(runtimeScene.getObjects("sound"));
{for(var i = 0, len = gdjs.SettingsCode.GDsoundObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsoundObjects2[i].setString("Sound: On");
}
}{runtimeScene.getGame().getVariables().get("soundsetting").setString("toggled");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("soundsetting")) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDsoundObjects1.createFrom(runtimeScene.getObjects("sound"));
{for(var i = 0, len = gdjs.SettingsCode.GDsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDsoundObjects1[i].setString("Sound: Off");
}
}{runtimeScene.getGame().getVariables().get("soundsetting").setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x153c094
gdjs.SettingsCode.eventsList0x153bffc = function(runtimeScene) {

{

gdjs.SettingsCode.GDsettingsoundObjects1.createFrom(runtimeScene.getObjects("settingsound"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDsettingsoundObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsettingsoundObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDsettingsoundObjects1[k] = gdjs.SettingsCode.GDsettingsoundObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsettingsoundObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList0x153c094(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SettingsCode.eventsList0x153bffc
gdjs.SettingsCode.eventsList0x15455ac = function(runtimeScene) {

{

gdjs.SettingsCode.GDvolplusObjects1.createFrom(runtimeScene.getObjects("volplus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDvolplusObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDvolplusObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDvolplusObjects1[k] = gdjs.SettingsCode.GDvolplusObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDvolplusObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects1.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")));
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Volume")));
}
}{runtimeScene.getGame().getVariables().get("Volume").add(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x15455ac
gdjs.SettingsCode.eventsList0x1547f14 = function(runtimeScene) {

{

gdjs.SettingsCode.GDvolminusObjects1.createFrom(runtimeScene.getObjects("volminus"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDvolminusObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDvolminusObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDvolminusObjects1[k] = gdjs.SettingsCode.GDvolminusObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDvolminusObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.SettingsCode.GDvolumevolumeObjects1.createFrom(runtimeScene.getObjects("volumevolume"));
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Volume")));
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Volume")));
}
}{runtimeScene.getGame().getVariables().get("Volume").sub(1);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x1547f14
gdjs.SettingsCode.eventsList0x1543534 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("fullscreen")) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDFullscreenObjects2.createFrom(runtimeScene.getObjects("Fullscreen"));
{for(var i = 0, len = gdjs.SettingsCode.GDFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDFullscreenObjects2[i].setString("Fullscreen: On");
}
}{runtimeScene.getGame().getVariables().get("fullscreen").setString("toggled");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("fullscreen")) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.SettingsCode.GDFullscreenObjects1.createFrom(runtimeScene.getObjects("Fullscreen"));
{for(var i = 0, len = gdjs.SettingsCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDFullscreenObjects1[i].setString("Fullscreen: Off");
}
}{runtimeScene.getGame().getVariables().get("fullscreen").setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


}; //End of gdjs.SettingsCode.eventsList0x1543534
gdjs.SettingsCode.eventsList0x153109c = function(runtimeScene) {

{

gdjs.SettingsCode.GDsettingfullscreenObjects1.createFrom(runtimeScene.getObjects("settingfullscreen"));

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDsettingfullscreenObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsettingfullscreenObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDsettingfullscreenObjects1[k] = gdjs.SettingsCode.GDsettingfullscreenObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsettingfullscreenObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList0x1543534(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SettingsCode.eventsList0x153109c
gdjs.SettingsCode.eventsList0x154854c = function(runtimeScene) {

{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


{
gdjs.SettingsCode.GDcrossairObjects2.createFrom(runtimeScene.getObjects("crossair"));
{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].setZOrder(109087867987);
}
}}

}


{


{
gdjs.SettingsCode.GDcrossairObjects2.createFrom(runtimeScene.getObjects("crossair"));
{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageUp");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "PageDown");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
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


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22249732);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.func(runtimeScene, gdjs.evtsExt__DebugMessages__prompt.func(runtimeScene, "Enter the Companion app connection ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtsExt__CompanionAppCommunication__onEventType.func(runtimeScene, "SayHi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DebugMessages__popup.func(runtimeScene, "Hi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.SettingsCode.eventsList0x154854c
gdjs.SettingsCode.eventsList0x5b7a48 = function(runtimeScene) {

{


gdjs.SettingsCode.eventsList0x153f78c(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0x15451cc(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0x153bffc(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0x15455ac(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0x1547f14(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0x153109c(runtimeScene);
}


{


gdjs.SettingsCode.eventsList0x154854c(runtimeScene);
}


}; //End of gdjs.SettingsCode.eventsList0x5b7a48


gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects2.length = 0;
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects3.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects1.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects2.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects3.length = 0;
gdjs.SettingsCode.GDshadowsObjects1.length = 0;
gdjs.SettingsCode.GDshadowsObjects2.length = 0;
gdjs.SettingsCode.GDshadowsObjects3.length = 0;
gdjs.SettingsCode.GDVolumeObjects1.length = 0;
gdjs.SettingsCode.GDVolumeObjects2.length = 0;
gdjs.SettingsCode.GDVolumeObjects3.length = 0;
gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects3.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects1.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects2.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects3.length = 0;
gdjs.SettingsCode.GDsoundObjects1.length = 0;
gdjs.SettingsCode.GDsoundObjects2.length = 0;
gdjs.SettingsCode.GDsoundObjects3.length = 0;
gdjs.SettingsCode.GDcrossairObjects1.length = 0;
gdjs.SettingsCode.GDcrossairObjects2.length = 0;
gdjs.SettingsCode.GDcrossairObjects3.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects1.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects2.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects3.length = 0;
gdjs.SettingsCode.GDFullscreenObjects1.length = 0;
gdjs.SettingsCode.GDFullscreenObjects2.length = 0;
gdjs.SettingsCode.GDFullscreenObjects3.length = 0;
gdjs.SettingsCode.GDvolplusObjects1.length = 0;
gdjs.SettingsCode.GDvolplusObjects2.length = 0;
gdjs.SettingsCode.GDvolplusObjects3.length = 0;
gdjs.SettingsCode.GDvolminusObjects1.length = 0;
gdjs.SettingsCode.GDvolminusObjects2.length = 0;
gdjs.SettingsCode.GDvolminusObjects3.length = 0;
gdjs.SettingsCode.GDbackObjects1.length = 0;
gdjs.SettingsCode.GDbackObjects2.length = 0;
gdjs.SettingsCode.GDbackObjects3.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects1.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects2.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects3.length = 0;
gdjs.SettingsCode.GDminusObjects1.length = 0;
gdjs.SettingsCode.GDminusObjects2.length = 0;
gdjs.SettingsCode.GDminusObjects3.length = 0;
gdjs.SettingsCode.GDplusObjects1.length = 0;
gdjs.SettingsCode.GDplusObjects2.length = 0;
gdjs.SettingsCode.GDplusObjects3.length = 0;
gdjs.SettingsCode.GDgobackObjects1.length = 0;
gdjs.SettingsCode.GDgobackObjects2.length = 0;
gdjs.SettingsCode.GDgobackObjects3.length = 0;

gdjs.SettingsCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
