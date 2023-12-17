// 1

// let N = 4;

// for (let i = 1; i <= N; i++) {
//   let row = "";
//   for (let j = i; j <= N - 1; j++) {
//     row += " ";
//   }
//   for (let z = 1; z <= 2 * i -1; z++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 2

// let N = 4;

// for (let i = N; i >= 1; i--) {
//   let row = "";
//   for (let j = i; j <= N - 1; j++) {
//     row += " ";
//   }
//   for (let z = 1; z <= 2 * i - 1; z++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 3

// let a = 59133927745792;
// let count = 0;

// while (a > 1) {
//     a/=10;
//     count++
// }

// console.log(count + " " + "xonali son");

// 4

// let a = 12345;
// let b = "";

// while (a > 1) {
//   b += parseInt(a % 10);
//   a /= 10;
// }

// console.log(b);

// 5

// let a = 1234321;
// let k = a;
// let b = "";

// while (a > 1) {
//   b += parseInt(a % 10);
//   a /= 10;
// }

// if (k == b) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// 6

// let a = 1234567891011121314151617181920;
// let res = 0;

// for (let i = 1; i <= a; i++) {
//   let b = i;
//   while (b >= 1) {
//     let temp = parseInt(b % 10);
//     if (temp == 1) {
//       res++;
//     }
//     b /= 10;
//   }
// }

// console.log(res);

// 7

// let a = 1234567891011121314151617181920;
// let res = 0;

// for (let i = 1; i <= a; i++) {
//   let b = i;
//   while (b >= 1) {
//     let temp = parseInt(b % 10);
//     res += temp;
//     b /= 10;
//   }
// }
// console.log(res);

// 8

// let a = 1234567891011121314151617181920;
// let res = 0;

// for (let i = 1; i <= a; i++) {
//   let b = i;
//   while (b >= 1) {
//     let temp = parseInt(b % 10);
//     res++;
//     b /= 10;
//   }
// }
// console.log(res);

// 9

// let a = 4;
// let b = 8;

// for (let i = 1; i <= a; i++) {
//   let row = "";
//   if (i == 1 || i == a) {
//     for (let j = 1; j <= b; j++) {
//       row += "*";
//     }
//   } else {
//     for (let j = 1; j <= b; j++) {
//       if (j == 1 || j == b) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }
//   }
//   console.log(row);
// }

// 10

// let a = 10;
// let temp = 0;
// let count = 0;
// let res = "";

// for (let i = 2; i <= a; i++) {
//   for (let j = 2; j <= i / 2 + 1; j++) {
//     if (i % j == 0 && i != j) {
//       temp++;
//     }
//   }
//   if (!temp) {
//     count++;
//     res = res + (i + "; ");
//   }
//   temp = 0;
// }
// console.log(count + " (" + res + ")");

// 11

// let a = 200;
// let ason = a;
// let temp = "";
// let res = "";
// let count = 0;

// for (let i = 11; i <= a; i++) {
//   let ison = i;
//   let birinchiRaqam = ison % 10;
//   while (ison >= 1) {
//     ison /= 10;
//     temp += birinchiRaqam;
//   }
//   if (i == temp) {
//     count++;
//     res = res + i + ", ";
//   }
//   temp = "";
// }
// console.log(count + " (" + res + ")");

// WHILE

// while 1

// let A = 10;
// let B = 5;

// while (A > B) {
//   A -= B;
// }
// console.log(A);

// while 2

// let A = 10;
// let B = 5;
// let count = 0;

// while (A > B) {
//   A -= B;
//   count++;
// }
// console.log(count);

// while 3

// let A = 5;
// let temp = A;

// while (A > 1) {
//   A /= 3;
// }
// if (A == 1) {
//   console.log(temp + " soni 3 ning darajasi");
// } else {
//   console.log(temp + " soni 3 ning darajasi emas");
// }

// while 4

// let n = 46;
// let m = 3;
// let count = 0;

// while (n >= m) {
//   n -= m;
//   count++;
// }
// console.log("Butun qismi " + count + " ga qoldiq qismi " + n + " ga teng");

// while 5

// let n = 10;
// let res = "";

// while (n >= 1) {
//   let temp = parseInt(n % 10);
//   res += temp;
//   n /= 10;
// }
// console.log(res);

// while 6

// let n = 5;
// let count = 0;
// let res = 0;
// let temp;

// while (n >= 1) {
//   temp = parseInt(n % 10);
//   res += temp;
//   count++;
//   n /= 10;
// }
// console.log("Raqamlari yig'indisi: " + res);
// console.log("Raqamlari soni: " + count);

// while 7

// let n = 5;
// let temp;
// let res = false;

// while (n >= 1) {
//   temp = parseInt(n % 10);
//   if (temp == 2) {
//     res = true;
//   }
//   n /= 10;
// }
// if (res) {
//   console.log("Berilgan son raqamlari orasida 2 raqami bor");
// } else {
//   console.log("Berilgan son raqamlari orasida 2 raqami yo'q");
// }

// while 8

// let n = 7;
// let temp;
// let res = false;

// while (n >= 1) {
//   temp = parseInt(n % 10);
//   if (temp % 2 != 0) {
//     res = true;
//     console.log(temp);
//   }
//   n /= 10;
// }
// if (res) {
//   console.log("Berilgan son raqamlari orasida toq raqam bor");
// } else {
//   console.log("Berilgan son raqamlari orasida toq raqam yo'q");
// }

// while 9

// let n = 5;
// let k = "" + n;
// let temp = "";

// while (n > 1) {
//   temp += parseInt(n % 10);
//   n /= 10;
// }
// if (k == temp) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// while 10

// let n = 5;
// let i = 2;
// let temp = "";

// while (n / 2 + 1 > i) {
//   if (n % i == 0) {
//     temp++;
//   };
//   i++;
// }
// if (temp >= 1) {
//   console.log(n + " tub son emas!");
// } else {
//   console.log(n + " tub son!");
// };
