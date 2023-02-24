// var b = 10;
// function one(){
//     var c =13;
//     function two(){
//     console.log(c);
// }
// return two
// }
// one()()
// console.log(b);
// setTimeout(()=>{
// console.log("hi")
// },2000)

// setTimeout(()=>{
//     console.log("bye")
//     },4000)

// setInterval(()=>{
//     console.log("repeat")
// })    
// let x= new Date()
// let day=x.getDay()-
// let a=["sun","mon","tue"]
// console.log(a[day]);

// console.log(Math.sqrt(4));
// console.log(Math.cbrt(27));
// console.log(Math.ceil(43.56));
// console.log(Math.floor(435.65));

// console.log(Math.ceil(Math.random));




// let x= new Date()
// let day = x.getMonth()
// switch(day){
//   case 0: {
//     console.log('jan');
//     break;
//   }
// case 1: {
//   console.log('feb');
//   break;
// }
// case 2: {
//   console.log('mar');
//   break;
// }
// case 3: {
//   console.log('apr');
//   break;
// }
// case 04: {
//   console.log('may');
//   break;
// }
// default:{
//   console.log('invalid');
// }
// }

// if(day==0){
//   console.log('JAN');
// }
// else if(day==1){
//   console.log('feb');
// }
// else if(day==2){
//   console.log('mar');
// }
// else if(day==3){
//   console.log('apr');
// }
// else if(day==4){
//   console.log('may');
// }

// else{
//   console.log("invalid");
// }
// console.log(`value is  ${day}`);


// let table=document.createElement('table')
// let tr1 =document.createElement('tr')
// let td11=document.createElement('td')
// let td12=document.createElement('td')
// let td13=document.createElement('td')

// let tr2 =document.createElement('tr')
// let td21=document.createElement('td')
// let td22=document.createElement('td')
// let td23=document.createElement('td')

// let tr3 =document.createElement('tr')
// let td31=document.createElement('td')
// let td32=document.createElement('td')
// let td33=document.createElement('td')

// td11.innerText='1'
// td12.innerText='2'
// td13.innerText='3'
// td21.innerText='4'
// td22.innerText='5'
// td23.innerText='6'
// td31.innerText='7'
// td32.innerText='8'
// td33.innerText='9'

// let body=document.body

// body.appendChild(table)
// table.appendChild(tr1)
// table.appendChild(tr2)
// table.appendChild(tr3)

// tr1.appendChild(td11)
// tr1.appendChild(td12)
// tr1.appendChild(td13)

// tr2.appendChild(td21)
// tr2.appendChild(td22)
// tr2.appendChild(td23)

// tr3.appendChild(td31)
// tr3.appendChild(td32)
// tr3.appendChild(td33)

// var x= "sa"
//   var n= 1238543135
// console.log(
//   `hello ${x}    hello
//   heklo     hello     
//   ghk   hgj  is  ${n}  bhjgjh`)

// var str = "niffty50"
// console.log(str.length);
// var st = console.log(str.split("").reverse().join(""));
// if (str==st){
//   alert("palindrome")
// }
// else {
//   alert("not")
// }

// for(var i=0;i<str.length;i++)
// {
//   console.log(str.charAt(i));
  
// }

// let h1=document.getElementsByClassName('idd')
// let h2=document.getElementById('h1')
// let h3=document.getElementById('h2')
// let h4=document.getElementsByTagName('h3')

// console.log(h1);
// console.log(h2);
// console.log(h3);
// console.log(h4);

// let div1=document.getElementById('idd')
// let div2 =document.getElementById('id2')
// let div3 =document.getElementById('id2')
// let div4 =document.getElementById('id2')

// div1.style.margin="20px"
// div1.style.display="flex"
// div1.style.border ="2px solid black"
// div1.style.alignitems="center"
// div1.style.justifycontent="space-evenly"

// div2.style.height="80px"
// div2.style.width="32px"
// div2.style.border ="2px solid black"
// div2.style.display="flex"
// div2.style.padding="20px"
// function col(){
//     document.body.style.backgroundColor="red"

// }

// function coll(){
//     document.body.style.backgroundColor="green"

// }

// let bnn=document.querySelector('#haa')
// bnn.onclick=()=>{
//     console.log("hi");
// }

let bn=document.querySelector('button')

bn.addEventListener("click",(e)=>{
    e.preventDefault()
    let user=document.getElementById("un").value
    let pass=document.getElementById("ps").value
    console.log(user,pass);
})

