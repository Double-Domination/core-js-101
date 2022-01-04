// const initDTO = [
//   { country: 'Belarus', city: 'Brest' },
//   { country: 'Russia', city: 'Omsk' },
//   { country: 'Russia', city: 'Samara' },
//   { country: 'Belarus', city: 'Grodno' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Lodz' },
// ];

// function group(array, keySelectorCallback, valueSelectorCallback) {
//   let selectorProcessed = [];
//   selectorProcessed = array.map(keySelectorCallback);
//   selectorProcessed = new Set(selectorProcessed);

//   const groups = {};
//   Array.from(selectorProcessed).map((current) => {
//     // eslint-disable-next-line no-return-assign
//     return (groups[current] = [array.filter((inner) => {
//       if(inner.current === current)
//     })]);
//   });

//   let value

//   return groups;
// }

// console.log(
//   group(
//     initDTO,
//     (item) => item.country,
//     (item) => item.city
//   )
// );

// const testObj = {
//   first: 1,
//   second: 2,
// };

// function group(initArr, criteria) {
//   return initArr.reduce(
//     (accum, current) => {
//       const key =
//         typeof criteria === 'function' ? criteria(current) : current[criteria];

//       // eslint-disable-next-line no-prototype-builtins
//       if () {
//         // eslint-disable-next-line no-param-reassign
//         accum[key] = [];
//       }
//     },
//     { key: 'zero' }
//   );
// }

// console.log(group(initDTO));
