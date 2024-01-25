

ShadowSize
```
max 	      = 1
min 	      = 0.1
reductionFactor   = 3
shadowSize 	      = 1/(value("Square_PosY")/reductionFactor)

if (shadowSize >max){
shadowSize = max
}

if(shadowSize < min){
shadowSize = min
}



``````
