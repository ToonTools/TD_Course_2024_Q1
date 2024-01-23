/*
Input:  press the buttons, no harmony scene requirements
Output: a text file on the users desktop

How to use: launch each of the functions to write and then read information from a .txt file on your user/deskop location

*/

var myUserName 		= about.userName
var myPath 			= "C:\\Users\\" + myUserName + "\\Desktop\\test\\"
var fileName 		= "MyTextFile.txt"
var myFileNameFull 	= myPath + fileName 
	
function textFile_write(){

	var myTextFile 	= new File(myFileNameFull)		

	if(!myTextFile.exists){
		MessageLog.trace(myFileNameFull + "does not exist, so I will make it now")
		myTextFile.open(FileAccess.ReadWrite)
		myTextFile.close()
	}

	var myMessage 			= "this is my message"
	
	var fileWrite_dialog 	= new Dialog()
	fileWrite_dialog.title 	= "Please write your text input here:"
	
	var userInput 			= new LineEdit()
	fileWrite_dialog.add(userInput)
	
	if ( fileWrite_dialog.exec() )
	{
		myMessage = userInput.text
	}
	
	myTextFile.open(FileAccess.Append)
	myTextFile.writeLine(myMessage)
	myTextFile.close()
}


function textFile_read(){

	myTextFile 	= new File(myFileNameFull)
	myTextFile.open(FileAccess.ReadOnly)
	var content = myTextFile.read()
	MessageLog.trace("Concent of : " + myFileNameFull + " =\n"+content+"\n")
	
}