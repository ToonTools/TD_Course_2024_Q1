/*
Input:  press the buttons, no harmony scene requirements
Output: a text file on the users desktop

How to use: launch each of the functions to write and then read information from a .txt file on your user/deskop location

*/

var myUserName 		= about.userName
var myPath 			= "C:\\Users\\" + myUserName + "\\Desktop\\test\\"
var fileName 		= "MyTextFile.txt"
var myFileNameFull 	= myPath + fileName 
	
function writeTextFile(){

	var myFile 			= new File(myFileNameFull)		

	myFile.open(FileAccess.ReadWrite)
	
	/// check if the file exists
	/// do you want to add content to it?
	/// user interaction yes / no
	/// add message to file
	/// append line to file

	
	var myMessage 		= "this is my message"
	
	
	
	myFile.writeLine(myMessage)
	
	MessageLog.trace("my file should have a line written now")

	myFile.close()
}


function readTextFile(){

	myTextFile 	= new File(myFileNameFull)
	myTextFile.open(FileAccess.ReadOnly)
	var content = myTextFile.read()
	MessageLog.trace("Concent of : " + myFileNameFull + " =\n"+content+"\n")
	
}