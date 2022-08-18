
var op= 00;
document.getElementById('displayId').innerHTML=op;
console.log(document.getElementById('displayId').innerHTML);
let num1="",num2="",number="";
function addNum(num){
    document.getElementById('displayId').innerText=number+num;
    number=document.getElementById('displayId').innerText
}

let finalOperation='';

function operatorSelect(operation){
    if(number==""){
        return;
    }
    num1=number;
    document.getElementById('displayId').innerText+=operation;
    number="";

    switch(operation){
        case '+': finalOperation='+';
                    break;

        case '-': finalOperation='-';
                    break;

        case '*': finalOperation='*';
                    break;

        case '/': finalOperation='/';
                    break;
    }
}

function onEqual(){
    num2=number;
    switch(finalOperation){
        case '+': number=parseInt(num1)+parseInt(num2);
                document.getElementById('displayId').innerText=number;
                    break;

        case '-': number=parseInt(num1)-parseInt(num2);
                    document.getElementById('displayId').innerText=number;
                    break;

        case '*': number=parseInt(num1)*parseInt(num2);
                    document.getElementById('displayId').innerText=number;
                    break;

        case '/': number=parseInt(num1)/parseInt(num2);
                    document.getElementById('displayId').innerText=number;
                    break;
    }
    number=number.toString()
}

function onClear(){
    number="";
    num1="";
    num2="";
    finalOperation="";
    document.getElementById('displayId').innerText="";
}

function onBack(){
    number=number.slice(0,-1);
    document.getElementById('displayId').innerText=number;
}