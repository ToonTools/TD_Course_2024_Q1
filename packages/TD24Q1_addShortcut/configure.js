function configure()
{
	if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;
	
	addShortcut()
}


function addShortcut(){
	
	message_start 	= " -- started TD24Q1_addShortcut --"
	message_end		= " -- finished TD24Q1_addShortcut --"
	
	MessageLog.trace(message_start)
	
	
	
	MessageLog.trace(message_end)

}

exports.configure = configure;