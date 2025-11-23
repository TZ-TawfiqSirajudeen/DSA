let n = 5;
// ⭐ 1. Half Pyramid

// for(let i=0; i<5; i++){
//     let row = " "
//     for(let j=0; j<=i; j++){
//         row+=" *"
//     }
//     // console.log(row)
// }

// ⭐ 2. Inverted Half Pyramid

// for(let i=5; i>0; i--){
//     let row = " ";
//     for(let j=0; j<i; j++){
//         row+=" *"
//     }
//     console.log(row)
// }

// for(let i=0; i<=n;i++){
//     let row = " "
//     for(let j=0; j<n-i; j++){
//         row+=" *"
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++) {
//   let line = "";

//   for (let j = 0; j < n - i; j++) {
//     line += " ";
//   }

//   for (let k = 0; k < i + 1; k++) {
//     line += "*";
//   }

//   console.log(line);
// }

// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 !== 0) {
//       line += "1";
//     } else {
//       line += "0";
//     }
//   }
//   console.log(line);
// }

// for (let i = 0; i < n; i++) {
//   let line = " ";
//   let jaua = 1;
//   for (let j = 0; j <= i; j++) {
//     line += jaua;
//     jaua == 1 ? (jaua = 0) : (jaua = 1);
//   }
//   console.log(line);
// }

// for (let i = 0; i < n; i++) {
//   let line = "";

//   for (let j = 0; j <n-i; j++) {
//     line += " ";
//   }

//   for (let k = 0; k < i + 1; k++) {
//     line += "* ";
//   }
//   for (let f = 0; f <n-i; f++) {
//     line += " ";
//   }

//   for (let z = 0; z < i + 1; z++) {
//     line += "* ";
//   }

//   console.log(line);
// }
for (let i = 0; i < n; i++) {
  let toggle = 0;

  if (toggle > n-i) {
    toggle = 1;
  }

  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle == 1 ? (toggle = 0) : (toggle = 1);
  }
  console.log(row);
}
