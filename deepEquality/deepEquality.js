/**
  * Write a function that, given two objects, returns whether or not the two
<<<<<<< HEAD
  * are deeply equivalent--
  * 
  * meaning the structure of the two objects is the
=======
  * are deeply equivalent--meaning the structure of the two objects is the
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
<<<<<<< HEAD
  * deepEquals( {a:1,
  * `````````    b:{c:3}} ,
  *            { a:1, 
  *              b:{c:3}} ); // true
  * deepEquals({ a:1, b: {c:5}} , {a:1, b: {c:6}}); // false
=======
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
<<<<<<< HEAD
try{
  
  if(typeof apple === "object" || typeof orange === "object"){
   keys1 = Object.keys(apple);
   keys2 = Object.keys(orange);

   if(keys1.length != keys2.length)
   return false;

   for (let index = 0; index < keys1.length; index++) {
     if(keys1[i] !== keys2[i])
     return false;
   }
  }
  
  for (const property in apple) {
  if(typeof apple[property] === "object" || typeof orange[property] === "object")
    return deepEquals(apple[property],orange[property]);

    if(apple[property] !== orange[property])
    return false;
}
return true;
}catch(TypeError){
  return false;
}
}
=======
};
>>>>>>> d094e0708bb603f175564af45188fa3252d79f0f
