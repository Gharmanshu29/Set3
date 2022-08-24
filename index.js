const btn=document.getElementById('btn');
const addelem=document.getElementById('add');
const getusers=()=>{
    const url="https://jsonplaceholder.typicode.com/todos"
    const fetchres=fetch(url);
    fetchres.then((res)=>{
        return res.json();
    }).then((res)=>{
    //    return res;
        const data=res;
         const resultdata=data.filter((val)=>{
            return (val.completed===true);
        })
        // console.log(resultdata);
        resultdata.map((val)=>{
            const userid=val.userId;
            const id=val.id;
            const title=val.title;
            const completed=val.completed;
            console.log(userid);
            addelem.innerHTML+=`<tr><td>${userid}</td><td>${id}</td><td>${title}</td><td>${completed}</td</tr>`
        });
    })
}
// console.log(resultdata);
// const addelements=()=>{
//     getusers();
//     resultdata.map((val)=>{
//         const userid=val.userId;
//         const id=val.id;
//         const title=val.title;
//         addelem.innerHTML=`<tr><td>${userid}</td><td>${id}</td><td>${title}</td></tr>`
//     });
// }

btn.addEventListener('click',getusers);

// resultdata.map((val)=>{
//     const userid=val.userId;
//     const id=val.id;
//     const title=val.title;
//     addelem.innerHTML=`<tr><td>${userid}</td><td>${id}</td><td>${title}</td></tr>`
// })


// getusers();


// console.log(datas);
// const resultdata=datas.filter((val)=>{
//     return (val.userId!=3 && val.userId!=5);
// });

// const resultdata=datas.filter((val)=>{
//     console.log(val);
//     return val.userId!=3;
// });


// console.log(resultdata());
