const input = document.getElementById('ip');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const promise1=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(input.value)
}, 2000);

  }).then((data)=>{
  output.innerHTML=`Result:${data}`;
       return data;
  })
  .then((data)=>{
    let promise2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })
    return promise2;
  })
  .then((data)=>{
    output.innerHTML=`Result:${data}`;
    return data;
  })
  .then((data)=>{
        const promise3=new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(data*2)
            }, 1000);
        })
        return promise3;
  })
  .then((data)=>{
    output.innerHTML=`Result:${data}`;
    return data;
  })
  .then((data)=>{
        const promise4=new Promise((resolve,reject)=>{
                setTimeout(() => {
                    resolve(data-3)
               }, 1000);
          })
        return promise4;
  })
  .then((data)=>{
    output.innerHTML=`Result:${data}`;
    return data;
  })
  .then((data)=>{
    const promise5=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve(data/2)
     },1000)
    })
    return promise5;
  })
  .then((data)=>{
    output.innerHTML=`Result:${data}`;
    return data;
  })
  .then((data)=>{
    const promise6=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve(data+10)
     },1000)
    })
    return promise6;
  })
  .then((data)=>{
    output.innerHTML=`Result:${data}`;
    return data;
  })
  .then((data)=>{
    output.innerHTML=`Final Result:${data}`;
    return data;
  })













});