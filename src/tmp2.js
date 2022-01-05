// const initDTO = [
//   { country: 'Belarus', city: 'Brest' },
//   { country: 'Russia', city: 'Omsk' },
//   { country: 'Russia', city: 'Samara' },
//   { country: 'Belarus', city: 'Grodno' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Lodz' },
// ];

// function group(initArr, criteria) {
//   return initArr.reduce((accum, current) => {
//     const key =
//       typeof criteria === 'function' ? criteria(current) : current[criteria];

//     // eslint-disable-next-line no-prototype-builtins
//     if (Object.prototype.hasOwnProperty.call(accum, key) === false) {
//       // eslint-disable-next-line no-param-reassign
//       accum[key] = []; // value by link
//     }

//     accum[key].push(current);

//     return accum;
//   }, {});
// }

// // console.log(group(initDTO, (item) => item.country));

// function group(initArr, keySelectorCallback, valueSelectorCallback) {
//   const result = new Map();

//   initArr.map((curItem, curIndex) => {
//     const identifer = keySelectorCallback(initArr[curIndex]);
//     if (result.has(identifer)) {
//       result.get(identifer).push(valueSelectorCallback(initArr[curIndex]));
//     } else {
//       result.set(identifer, [valueSelectorCallback(initArr[curIndex])]);
//     }
//   });
// }
