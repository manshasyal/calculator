let input='';
    let newInput='';
    let operator='';


function clearDisplay(){


    input='';
    newInput='';
    operator='';
    document.getElementById('display').value="";
}
function appenNumber(number){
    newInput += number;
    document.getElementById('display').value=`${input} ${operator} ${newInput}`.trim();

}
function appendOperation(operation){
    if(newInput==='')return;
    if(input!==''){
        calculate();
    }
    operator=operation;
    input = newInput;
    newInput='';
     document.getElementById('display').value = `${input} ${operator}`;
}
function calculate(){
    if(input ==='' || newInput ==='')return;
    let result ;
    let prev=parseFloat(input);
    let cur=parseFloat(newInput);
    switch(operator){
        case'+':
            result = prev + cur;
            break;
        case'-' :
            result = prev - cur;
            break;
        case '/':
            if(cur===0){
                alert("cannot divide by zero");
                return;
            }
            result=prev/cur;
            break;
        case '*':
            result=prev * cur;
            break;
        default:
            return;
    }
    newInput = String(result);
input = '';
operator = '';
    document.getElementById('display').value=newInput;
