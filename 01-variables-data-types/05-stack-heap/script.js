// Data Types

// Primitive Types: Stored directly oin the "Stack", where it is accessed from.
// String | Number | Boolean | Null | Undefined | Symbol | BigInt

// Reference Types: Stored in the "Heap", and accessed by reference
// Arrays | Functions | Objects


// In Stack
let name = 'Mike';
let age = 43;

// In Heap
let person = {
    name: 'Mike',
    age: 43,
};

// In Stack
let newName = name;
newName = 'Andre';

// References the data stored in the heap.
let newPerson = person;

// References the data stored in the heap
newPerson.name = 'Mike'; 

console.log(name, newName);
console.log(person, newPerson);