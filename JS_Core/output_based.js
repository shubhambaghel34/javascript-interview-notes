// let x = 5;
// {
//   let x = 10;
//   console.log(x); //10
// }
// console.log(x); //5





/***
 * let x = 1;

if (function f() {}) {
  x += typeof f;
}
console.log(x);
 */


const user = {
    name: "Dona",
    greet: () => {
      console.log(this.name);//undefined
    }
  };
  
  const bound = user.greet.bind(user);
  bound();  // 
  

  // const obj = {
//   name: "Charlie",
//   greet() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 100);
//   }
// };

// obj.greet(); 