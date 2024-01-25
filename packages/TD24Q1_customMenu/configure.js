// TD21Q3 demonstration of custom menu content

function configure(){
    if ( about.isPaintMode()){
        return;
    }
    // create menu items

    // access a script that is lives in this configuration *FILE*
    ScriptManager.addMenuItem( {targetMenuId : "TD24Q1_Custom",
                                id          : "customAction",
                                text        : "my custom action",
                                action      : "myCustomFunction in ./configure.js"
                            })

    // access a script that lives in the *SCRIPT* folder
    ScriptManager.addMenuItem( {targetMenuId : "TD24Q1_Custom",
                                id          : "getSceneInformation",
                                text        : "gets numner of nodes selected",
                                action      : "getSceneInformation in TD24Q1_07-2_getSceneInformation.js"
                            })

    // access a script that is lives in this *PACKAGE* folder
    ScriptManager.addMenuItem( {targetMenuId : "TD24Q1_Custom",
                                id          : "hello",
                                text        : "hello",
                                action      : "hello in helloWorld.js"
                            })
}
function init(){
    // this does not seem to be exectuting message prompts, not a priority to slove now tho
    //MessageLog.trace("initialising TD21Q3_customMenu/configure.js...MessageLog.trace")
    //System.println("initialising TD21Q3_customMenu/configure.js...System.println")
}

function myCustomFunction(){
    MessageBox.information("This is my custom action!")

}

exports.configure   = configure;
exports.init        = init;