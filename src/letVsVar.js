let x = function () {
  if (true) {
    // console.log(v);
    // console.log(l);
    var v = 2;
    let l = 1;
  }
  //var scopped outside function let is not
  console.log(v);
  console.log(l);
};

x();
