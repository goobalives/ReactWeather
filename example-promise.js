
function addPromise (a, b) {

  return new Promise(function (resolve, reject) {

    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Invalid arguements -- cannot add');
    }
  });
};

addPromise(7, 3).then(function (num) {
  console.log(num);
}, function (err) {
  console.log(err);
});

addPromise(7, 'Hi').then(function (num) {
  console.log(num);
}, function(err) {
  console.log(err);
});
