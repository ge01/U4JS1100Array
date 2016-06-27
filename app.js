// You can use a JavaScript array to represent a list.
var movies = [
  'Star Wars',
  'King Kong',
  'Ex Machina'
];

// You can use an array to represent a list of products:
// Each item in the array is a JavaScript object.
var products = [
  {name: 'Tesla', price:40000},
  {name: 'Milk', price:1.99},
  {name: 'Oranges', price:3.44}
];

console.log(movies[1]);

// You can set an element at a particular index like this:
movies[0] = 'Star Wars 7';
console.log(movies[0]);

// You can add new elements to an array after you create
// the array with the push() method.
movies.push('The Matrix');
movies.push('The Godfather');
console.log(movies.length);


/*
You can remove existing elements from an array with the splice() method.
start index - The index where deleting starts.
delete count - The number of elements to delete after the start index.
*/
console.log(movies.length); // prints number of movies in movies array
movies.splice(1,1); // remove element at index 1
console.log(movies.length); // prints updated number of movies in array
console.log(movies); // 
