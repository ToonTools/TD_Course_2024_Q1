
Some example Expressions
### ShadowSize
```javascript
max 	          = 1
min 	          = 0.1
reductionFactor   = 3
shadowSize 	      = 1/(value("Square_PosY")/reductionFactor)

if (shadowSize >max){
shadowSize = max
}

if(shadowSize < min){
shadowSize = min
}
```
### Angle -> Linear
```javascript
angle = value("Circle2_angleZ")
radius = 4.5
value = radius * sin(angle)
```
### Linear -> Angle
```javascript
distance = value("Circle_posX")
radius = 4.5
angle =-( distance*radius)
```