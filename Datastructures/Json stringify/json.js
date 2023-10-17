// json = javascript object notation 
// it is a format for representing the value and object 
// JSON.stringify to convert objects into JSON. 

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);

  console.log(typeof json);
  console.log(json);
  