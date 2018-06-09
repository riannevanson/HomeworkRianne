// function pathFind1(path, object) {
//   let firstPath = path[0];
//   let secondPath = path[1];
//   let thirdPath = path[2];
//
//   return object[firstPath];
// }
//
// function pathFind2(path, object) {
//   let firstPath = path[0];
//   let secondPath = path[1];
//   let thirdPath = path[2];
//
//   return object[firstPath][secondPath];
// }
//
// function pathFind3(path, object) {
//   let firstPath = path[0];
//   let secondPath = path[1];
//   let thirdPath = path[2];
//
//   return object[firstPath][secondPath][thirdPath];
// }
//
//
// console.log(pathFind1(["foo", "yiooo"], { foo: "barii" }));
// console.log(pathFind2(["author", "name"], { author: { name: "Stephen" } }));
//
// console.log(
//   pathFind3(["book", "author", "name"], {
//     book: {
//       author: {
//         name: "Yuval"
//       }
//     }
//   })
// );
//
// function pathFind(path, object) {
//   let firstPath = path[0];
//   let secondPath = path[1];
//   let thirdPath = path[2];
//
//   if (path.indexOf(firstPath) === 0) {
//     return object[firstPath] + 'hiaaa';
//   } else if (path.indexOf(secondPath) === 1) {
//     console.log(object[firstPath][secondPath] + 'hi')
//     return object[firstPath][secondPath] + 'hi';
//
//   } else if (path.indexOf(thirdPath) === 2) {
//     return object[firstPath][secondPath][thirdPath];
//   }
// }

function pathFind (path, object){

  if (path.length === 1) {
    return object[path[0]];
  }
  else {
    let key = path[0];
    path.shift();
    return pathFind(path, object[key]);

  }
}

console.log(pathFind(["foo"], { foo: "barii" }));
console.log(pathFind(["author", "name"], { author: { name: "Stephen" } }));

console.log(
  pathFind(["book", "author", "name"], {
    book: {
      author: {
        name: "Yuval"
      }
    }
  })
);

// //map index of:
// function myIndexofPath(path) {
// var mapIndexPath = path.map(pathItem =>
// path.indexOf(pathItem))
// return mapIndexPath
// }



//
// console.log(myIndexofPath(["author", "name", "jajjaa"])+ ' hello')

// pathItem.indexOf(pathItem))

//
//
// function pathFindMore(path, object){
//   // if (path === object[path])
//   // return "Yuval"//hier moet 'einde van path value komen'
// const getPathItems = path
//   // .map(pathItem => pathItem)
//   .filter(pathItem => pathItem === path[1])
// console.log(getPathItems)
// console.log(path[0])
// }
//
//
// // console.log(pathFindMore(['foo'], { foo: "bar" }))
// // console.log(pathFindMore(["name"], { name: "Dave" }))
// pathFindMore(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
// // console.log(pathFindMore(["book", "author", "name"], {
// //       book: {
// //         author: {
// //           name: "Yuval"
//         }
//       }
//     }))

// Output :
// pathFind(["foo"], { foo: "bar" }) // === "bar"
//     pathFind(["name"], { name: "Dave" }) // === "Dave"
//     pathFind(["author", "name"], { author: { name: "Stephen" } }) // === "Stephen"
//     pathFind(["book", "author", "name"], {
//       book: {
//         author: {
//           name: "Yuval"
//         }
//       }
//     }) // === "Yuval"

// module.exports = { pathFind};
