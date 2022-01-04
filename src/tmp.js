// const init = [
//   { country: 'Russia', city: 1 },
//   { country: 'Belarus', city: 2 },
//   { country: 'Poland', city: 3 },
//   { country: 'Russia', city: 4 },
//   { country: 'Belarus', city: 5 },
//   { country: 'Poland', city: 6 },
//   { country: 'A', city: 7 },
//   { country: 'Z', city: 8 },
// ];

// const weaponsStore = [
//   { weaponName: 'rpg', ammoCount: 2 },
//   { weaponName: 'rpg', ammoCount: 3 },
//   { weaponName: 'plasmagun', ammoCount: 12 },
//   { weaponName: 'pistol', ammoCount: 5 },
//   { weaponName: 'plasmagun', ammoCount: 7 },
//   { weaponName: 'pistol', ammoCount: 8 },
//   { weaponName: 'plasmagun', ammoCount: 2 },
//   { weaponName: 'bfg', ammoCount: 1 },
// ];

// weaponsStoreSorted = [
//   { weaponName: 'bfg', ammoCount: 1 },
//   { weaponName: 'pistol', ammoCount: 5 },
//   { weaponName: 'pistol', ammoCount: 8 },
//   { weaponName: 'plasmagun', ammoCount: 2 },
//   { weaponName: 'plasmagun', ammoCount: 7 },
//   { weaponName: 'plasmagun', ammoCount: 12 },
//   { weaponName: 'rpg', ammoCount: 2 },
//   { weaponName: 'rpg', ammoCount: 3 },
// ];

// //  [
// //   { country: 'Belarus', city: 'Brest' },
// //    { country: 'Belarus', city: 'Minsk' },
// //    { country: 'Poland',  city: 'Krakow' },
// //    { country: 'Poland',  city: 'Warsaw' },
// //    { country: 'Russia',  city: 'Moscow' },
// //    { country: 'Russia',  city: 'Saint Petersburg' }
// //  ]

// function sortArray(arr) {
//   const sortByCountry = arr.sort((a, b) => {
//     const nameA = a.weaponName.toLowerCase();
//     const nameB = b.weaponName.toLowerCase();
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });

//   return sortByCountry;
//   // if a === perform inner sorting
// }

// console.log(sortArray(weaponsStore));
// // // console.log('g')
