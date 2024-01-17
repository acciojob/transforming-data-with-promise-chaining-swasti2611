const output = document.getElementById("output");
const ip = document.getElementById("ip");
const btn = document.getElementById("btn");
 
btn.addEventListener("click", startFn);
 
function startFn() {
  const promise1 = new Promise((resolve, reject) => {
    const start = ip.value;
    setTimeout(() => {
      output.textContent = `Result: ${start}`;
      resolve(start);
    }, 2000);
  });
  promise1
    .then((value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          output.textContent = `Result: ${value * 2}`;
          resolve(value * 2);
        }, 1000);
      });
    })
    .then((value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          output.textContent = `Result: ${value - 3}`;
          resolve(value - 3);
        }, 1000);
      });
    })
    .then((value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          output.textContent = `Result: ${value / 2}`;
          resolve(value / 2);
        }, 1000);
      });
    })
    .then((value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          output.textContent = `Result: ${value + 10}`;
          resolve(value + 10);
        }, 1000);
      });
    })
    .then((value) => {
      output.textContent = `Final Result: ${value}`;
    })
    .catch((error) => {
      console.error(error);
    });
}