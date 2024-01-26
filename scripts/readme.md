## Getting Python working

run it inside Command Prompt (Outside of Harmony)

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
