// In this repo your job is to write functions to make each function call work properly.
// Below is a sample problem 

  //code here for sayHi

 sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
 });
   

//and what you should write is the sayHi function that makes the code above work, 
    
    
 var sayHi = function(str, cb){
  cb(str);
 }

 sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay); //should alert ('Hi Katie')'
 });
    
    




  //Code Here for first

var first = function(arr1, callback) {
  callback(arr1[0]);
};
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
  //Code Here for last

var last = function(arr1, callback) {
  callback(arr1[arr1.length - 1])
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
  //Code Here for multiply

var multiply = function(num1, num2, callback) {
  callback(num1 * num2);
};

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
  //Code Here for contains

var contains = function(allName, person1, callback) {
  callback(allName.indexOf(person1) !== -1);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
    //Code Here for uniq

var uniq = function (arr, callback) {
  var newArr = []; //create new array
  for (var i = 0; i < arr.length; i++) {  //for loop
    if (newArr.indexOf(arr[i]) === -1) {  //check to see if the indice item of arr is in the new array and return false if present
      newArr.push(arr[i]); // push the item not present in newArr into the new array
    }
  }
  callback(newArr);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
    //Code Here for each

var each = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var indice = i;
    var item = arr[i];
    callback(item, indice);
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
 //code here for getUserById

var getUserById = function(obj, item, callback) {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].id === item) {
      callback(obj[i]);
    }
  }
};


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
