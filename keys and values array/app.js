//========== Object ============

let myObject = {
    "id": 19051,
    "name": "Anas Raza",
    "age": 21,
    "gender": "Male",
    "phone": "03331710444",
    "hobby": "Painting"
}

//========= Initializing Variables ==========

let keysOfObject = [];
let valuesOfObject = [];

//======== Storing Object keys in Array ==========

keysOfObject = Object.keys(myObject);

//========== Storing Object values in Array ===========

valuesOfObject = Object.values(myObject);

//========== Checking Output on Console ============

console.log("The array containing keys of object ->",keysOfObject);
console.log("The array containing values of object ->",valuesOfObject);

