// function pathFind(path, object) {
// if path[path.length] return Yuval
//
// return pathFind
//
//
// }

// The path is an array of strings and the object is
//an object. The array of strings refer to a sequence of
//properties on the object. Here are some examples of how it should work:
//     ```js
//     pathFind(["foo"], { foo: "bar" }) // === "bar"
//     pathFind(["name"], { name: "Dave" }) // === "Dave"
//     pathFind(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
//     pathFind(["book", "author", "name"], {
//       book: {
//         author: {
//           name: "Yuval"
//         }
//       }
//     }) // === "Yuval"
//
//
//
//
//
//

// const pathTest = ["foo", "name", "author"];
//
// const objectTest = {
//   foo: "bar",
//   book: {
//     author: { name: "Dave" },
//     name: "Yuval"
//   }
// };

function pathFind(path, object){

return object[path]
}


function pathFindMore(path, object){
  // if (path === object[path])
  // return "Yuval"//hier moet 'einde van path value komen'
const getPathItems = path
  // .map(pathItem => pathItem)
  .filter(pathItem => pathItem.length > 5)
console.log(getPathItems)

}


// console.log(pathFindMore(['foo'], { foo: "bar" }))
// console.log(pathFindMore(["name"], { name: "Dave" }))
pathFindMore(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
// console.log(pathFindMore(["book", "author", "name"], {
//       book: {
//         author: {
//           name: "Yuval"
//         }
//       }
//     }))

Output :
//     pathFind(["foo"], { foo: "bar" }) // === "bar"
//     pathFind(["name"], { name: "Dave" }) // === "Dave"
//     pathFind(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
//     pathFind(["book", "author", "name"], {
//       book: {
//         author: {
//           name: "Yuval"
//         }
//       }
//     }) // === "Yuval"



module.exports = { pathFind };
