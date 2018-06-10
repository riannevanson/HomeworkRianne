// function giveItBackLater(value, callback) {
//   function loadComplete() {
//     callback(values[value]);
//     setTimeout(loadComplete, 1000);
//   }
// }
//
//
const promiseToGiveItBackLater = value => {
  return new Promise((resolve, reject) => {
    function loadComplete() {
  //    if (something) {
        reject();
      }
      resolve(values[value] + values[values]);
    }

    setTimeout(loadComplete, 1000);
  });
};

const addSomePromises = pSomePromise => {
  return new Promise((resolve, reject) => {
    if(pSomePromise === "foo"){
      reject(pSomePromise + pSomePromise)
    }
    if(pSomePromise === "bar"){
      resolve(pSomePromise + pSomePromise + pSomePromise)
    }
  })
}


const outputPromise = addSomePromises(somePromise)
.then(pSomePromise => "foo")
.then(author => console.log(author.name))
.catch(error => console.log(error))











const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

function getDocument(documentId, callback) {
    function loadComplete() {
        callback(documents[documentId])
    }
    setTimeout(loadComplete, 100)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    setTimeout(loadComplete, 100)
}

const myExampleCallback = (document) => {
  getAuthor(document.authorId, console.log)
}

getDocument(1, myExampleCallback)



// promiseToGiveItBackLater("bar");
//
// .then(value => console.log('foo'))
// .catch(error => console.log(error))

//module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }
