// Q] For the given JSON iterate over all for loops (for, for in, for of, for Each)


var json = [
{
    "id" : "kedar", 
    "msg": "Hi",
    "mail": "kedar@gmail.com"
},
{
    "id" : "tony", 
    "msg": "Hello",
    "mail": "tony@gmail.com"
}];

// //for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.mail);
}

//for Each loop
json.forEach(function(obj) {console.log(obj.msg);});

//for In loop 
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].msg);             // console.log(json[key].id);
 
}
}

//for Of loop
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 
console.log(text);




