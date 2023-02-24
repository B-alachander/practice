
let btn=document.querySelector('button')
btn.addEventListener("click", ()=>{
    let promise = new Promise((resolve,rejecct)=>{
        let iswaterfetched = false 
        if(iswaterfetched===true)
    {
        resolve (document.body.style.backgroundColor="green")
    }
    else
    {
        resolve (document.body.style.backgroundColor="red")
    }
    })
    promise.then((x)=>console.log(x)).catch((y)=>console.log(y))
})


function balu(){
    console.log("nickel")
}
console.log(balu
);