"use strict";
function calculate(){
let a=document.forms[0].price;
    let b=document.forms[0].count;
    let a1=document.forms[0].price1;
    let b1=document.forms[0].count1;
    let a2=document.forms[0].price2;
    let b2=document.forms[0].count2;
    let a3=document.forms[0].price3;
    let b3=document.forms[0].count3;
    let a4=document.forms[0].price4;
    let b4=document.forms[0].count4;
    let a5=document.forms[0].price5;
    let b5=document.forms[0].count5;
    let a6=document.forms[0].price6;
    let b6=document.forms[0].count6;
    let a7=document.forms[0].price7;
    let b7=document.forms[0].count7;
    let a8=document.forms[0].price8;
    let b8=document.forms[0].count8;
    let a9=document.forms[0].price9;
    let b9=document.forms[0].count9;
    let result=a.value*b.value+a1.value*b1.value+a2.value*b2.value+a3.value*b3.value+a4.value*b4.value+a5.value*b5.value+a6.value*b6.value+a7.value*b7.value+a8.value*b8.value+a9.value*b9.value;
    let res=document.getElementById("result");
    if(result<0)
    {res.innerHTML="Введены неправильные данные";}
    else{res.innerHTML="Стоимость заказа: "+result+" рублей";}
}