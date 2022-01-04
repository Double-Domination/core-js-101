// function getIdentityMatrix(n) {
//   const preConstructedArr = new Array(n);
//   preConstructedArr.fill(new Array(n));
//   let resultingArr = preConstructedArr.map((current) => current.fill(0));
//   resultingArr = JSON.parse(JSON.stringify(resultingArr));

//   resultingArr = resultingArr.map((curItem, curIndex) => {
//     curItem[curIndex] = 1;
//     return curItem;
//   });

//   return resultingArr;
// }

// console.log(getIdentityMatrix(5));
