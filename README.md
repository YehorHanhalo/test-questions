# test-questions

# Javascript:

*What is your favourite new javascript feature and why?*
1. Optional chaining ?. - makes code clear and shorter
2. Arrow functions ()=>{} - makes code clear and shorter
3. Destructuring const {any: anyOfObject, variable} = object - makes code clear and shorter
4. async functions - allow avoid promise hell and write smooth async code 
5. Guard Clause Pattern if(expression) {action(); return} - allow avoid redundant "if else if" syntax.


*Explain an interesting way in which you have used this javascript feature?*

1. 
```
const { current: memoizedObject } = useRef(anyObject)
``` 
- prevents every time writing memoizedObject.current

2. 
```
async () => {
  try {
    const user = await getUser()
    const userInfo = await getUserInfo(user)
  }
  catch(err) {
    errorHandle(err)
  }
}
```
async await prevent of writing Promise inside then chain Promise.


*Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)?*
1. Regular functions have there own context "this", which is created when function is called. Arrow functions doesn't have there context "this". Arrow functions get context of parent function, inside which they where created.
2. Regular functions have inside methods [[Call]] and [[Construct]]. Arrow functions have only [[Call]]. That is why regular functions are also used as Class constructors in JS.


*What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’?*
1. myFunctionCall(++foo) - first increments foo variable (foo = foo + 1) and then function myFunctionCall will be called with incremented foo
2. myFunctionCall(foo++) - function myFunctionCall will be called with not incremented foo


*In your own words, explain what a javascript ‘class’ is and how it differs from a function?*
Class - it's  syntax sugar, that allows write more ordered code than writen on prototypes.
Class allows in one block {} write all class logic: properties and methods. It makes more comfortable code reading. 
```
class Car {
constructor(name, maxSpeed, color){
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.color = color;
  }
  
  getMaxSpeed(){
    return this.maxSpeed;
  }
}
```
While in ES5 we separately created class properties, then added methods for class prototype. And if we were needed to extend class we manually 
```
function Car(name, maxSpeed, color) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.color = color;
}

Car.prototype.getMaxSpeed = function() {
  return this.maxSpeed;
}
```

If talking about extending, in ES5 we have to manually rewrite prototype of extended class, while in ES6 it is made more declarative.
Class - it's a same regular function with more comfortable syntax.

# Css:

*In your own words, explain css specificity?*
CSS Specificity defines which exectly styles will be applied for current element. It depends on how the styles are set: inline, using id, classes of elements names.
Inline has higher priority then id, id > classes, classes > elements names.


*In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?*
!important - interrupts all css specificity. property with !important will be define at first. I don't use !important. It is bad pattern that don't allow change styles in reusable components in the future.


*What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?*
I prefer flex. It is the most simple, understandable and contains no exceptions to the rules.
Also had experience with Grid. But it is harder for understanding and not compatible with all browsers.


*Are negative margins legal and what do they do (margin: -20px)?*
Negative margins moves inner content behind parent border. 
I know only one case, when negative margins are legal. It is creating elements grid inside container with properties:
```
.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-top: -20px;
}
```

than for elements we give properties:
```
.item {
  margin-left: 20px;
  margin-top: 20px;
  flex-basis: calc(100% / amountItemsInRow - 20px);
}
```

This variant is more reusable if we will change items amount in the future.


*If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?*
Margin from the <p/> will break through parent <div/> element and pushes div away from the neighbor. If <p/> it is just content inside of <div/>, better use for <div/> property: padding-top.

# Unit tests: 
I haven't used tests for react components.


