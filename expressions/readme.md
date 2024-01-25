

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
```

Angle -> Linear
```
angle = value("Circle2_angleZ")
radius = 4.5
value = radius * sin(angle)
```

Linear -> Angle
```
distance = value("Circle_posX")
radius = 4.5
angle =-( distance*radius)
```