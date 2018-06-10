

function pathFind(path, object) {
  if (path.length === 1) {
    return object[path[0]];
  } else {
    let firstPath = path[0];
    const newPath = path.filter(function(pathItem) {
      return pathItem !== firstPath;
    });
    return pathFind(newPath, object[firstPath]);
  }
}

// console.log(pathFind(["foo"], { foo: "barii" }));
// console.log(pathFind(["author", "name"], { author: { name: "Stephen" } }));
// console.log(
//   pathFind(["book", "author", "name"], {
//     book: {
//       author: {
//         name: "Yuval"
//       }
//     }
//   })
// );



module.exports = { pathFind };
