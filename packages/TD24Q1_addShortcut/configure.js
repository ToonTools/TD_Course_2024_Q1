function configure()
{
	if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;
	
	addShortcut()
}


function addShortcut(){
	
	// this is a easier way than modifying "C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 22 Premium\resources\shortcuts.xml" 
	
	
	message_start 	= " -- started TD24Q1_addShortcut --"
	message_end		= " -- finished TD24Q1_addShortcut --"
	
	MessageLog.trace(message_start)
	
	//MessageLog.trace( JSON.stringify(ScriptManager,null,2) )
    
    ScriptManager.addShortcut( { 	text : "use HelloWorld",
                    id       		: "useHelloWorld",
                    longDesc 		: "runs the function TD24Q1_07-1_helloWorld.js",
                    action   		: "HelloWorld in TD24Q1_07-1_helloWorld.js",
                    order    		: "256",
                    categoryId   	: "TD24Q1_Custom", 
                    categoryText 	: "TD24Q1_Custom",
                    value 			: "#" 
                  })
	
	
	MessageLog.trace(message_end)

}

exports.configure = configure;