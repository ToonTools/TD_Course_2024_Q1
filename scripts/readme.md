## Getting Python working on your machine
 
1. [Install Python 3.9 ](https://www.python.org/downloads/release/python-390/)
2. Set environment variables [for Windows](https://www.howtogeek.com/787217/how-to-edit-environment-variables-on-windows-10-or-11/), [for Mac](https://techpp.com/2021/09/08/set-path-variable-in-macos-guide/)
3. Install additional libraries 
   -  Run `pip install pillow` in command prompt
---
## Getting Harmony to detect Python
Harmony's Python folders are here: `C:/Program Files (x86)/Toon Boom Animation/Toon
Boom Harmony 22 Premium/win64/bin/python-packages`

If you run Harmony through comamd prompt:

  ```C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 22 Premium\win64\bin>harmonyPremium``` 
  
  the message on load that indicates success of Python is:
```cmd
Python detected
        Python executable: C:/Program Files (x86)/Python/Python39/python.exe
        Python home: C:\Program Files (x86)\Python\Python39
Python script plugin initialized
```
failure is indicated by the message:
```cmd
Python not detected, python script will be disabled
```

---
## Use Python from Harmony

run this inside of `python script window` in Harmony

``` python
import os

#Extend the DLL dependency load-path, so that dependant DLLs can load. QtCore.pyd requires the DLL in the win64/bin path (QtCore.dll).

os.add_dll_directory( "C:/Program Files (x86)/Toon Boom Animation/Toon Boom Harmony 22 Premium/win64/bin" )
os.add_dll_directory( "C:/Program Files (x86)/Toon Boom Animation/Toon Boom Harmony 22 Premium/win64/bin/python-packages/PySide6" )

#Now that Python modules are in the sys.path, and the DLL dependency load path are extended:

import PySide6
from PySide6 import QtCore
import ToonBoom
from ToonBoom import harmony
harmonyPath = "C:/Users/chris/Documents/1_ToonBoom_Projects/TD Course 05 2024 Q1/Day10_pythonScripting/Day10_pythonScripting.xstage"
pathToHarmonyProject = "C:/EXAMPLE_FOLDER/HARMONY_SCENE.xstage"
harmony.open_project(harmonyPath)
```
---
## Python in Harmony options

### [PythonManager](https://docs.toonboom.com/help/harmony-22/scripting/extended/module-PythonManager.html)
Well documented for Python 3.9 but not fully implemented in Harmony 22.

### [Process2](https://docs.toonboom.com/help/harmony-20/scripting/script/classProcess2.html)
Not very well documented and unclear when a process has been successful.

### [QProcess](https://doc.qt.io/archives/qt-4.8/qprocess.html)
Well documented and easily google-able as it is the Qt library.