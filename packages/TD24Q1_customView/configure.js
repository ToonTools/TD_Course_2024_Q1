function configure()
{
  if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;

  ScriptManager.addView( { id : "TD24Q1_customView",
                           text : translator.tr("TD24Q1_customView"),
                           action : "createView in ./configure.js"} );
}
function createView()
{
	var view = require("./view.js");
	view.initView();
}

exports.configure = configure;