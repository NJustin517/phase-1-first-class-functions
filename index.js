function receivesAFunction (cb) {
  cb();
}

function returnsANamedFunction() {
  return function newFunc() {
    console.log("hi");
  }
}

const returnsAnAnonymousFunction = () => function() {
  console.log("bye");
}