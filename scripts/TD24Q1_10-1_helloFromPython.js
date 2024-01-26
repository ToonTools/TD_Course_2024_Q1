var myPythonScript = "C:/Github/ToonTools/TD_Course_2024_Q1/scripts/TD24Q1_10-2_helloFromPython.py"

// https://docs.toonboom.com/help/harmony-22/scripting/extended/module-PythonManager.html
function helloFromPython_pythonManager(){
	MessageLog.trace("testing: PythonManager")

	var myPythonObject = PythonManager.createPyObject(myPythonScript)
	var myScriptReturn = myPythonObject.py.helloWorld()
	
	MessageLog.trace("returning: " + myScriptReturn)

}

// https://doc.qt.io/archives/qt-4.8/qprocess.html
function helloFromPython_QProcess(){

  MessageLog.trace("testing: QProcess")
  var command     = "Python.exe"
  var arguments   = [myPythonScript]
  
  var QPro  = new QProcess();
  QPro.start(command, arguments)
  QPro.waitForFinished(-1);

  MessageLog.trace("Output\t: "+ new QTextStream(QPro.readAllStandardOutput()).readAll());
  MessageLog.trace("Errors\t: "+ new QTextStream(QPro.readAllStandardError()).readAll());

}




//https://docs.toonboom.com/help/harmony-20/scripting/script/classProcess2.html
function helloFromPython_Process2(){

  MessageLog.trace("testing: Process2")
  var command     = "Python.exe " + myPythonScript
  
  var Pro2 = new Process2(command)
  Pro2.launchAndDetach()
  MessageLog.trace("Command\t: " + Pro2.commandLine());
  if(Pro2.errorCode()!=0){ // if an error code other than 0 is found, it means there was an error
    MessageLog.trace("Error Code\t: " + Pro2.errorCode());
    MessageLog.trace("Error Message\t: " + Pro2.errorMessage());
  }
  else{
    MessageLog.trace("No errors")
  }
} 






