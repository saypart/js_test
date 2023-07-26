


// console.log(variable());
// console.log(Maths());

let idNum = 1;
let idList = [];
let nameList = [];
let phoneNumList = [];


function arrs(){
    let arr = ["가","나",3,4,"바"];

    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]+0);    
    }
}

function memberAdd(name,tel){
    idList.push(idNum);
    nameList.push(name);
    phoneNumList.push(tel);
    idNum = idNum+1;
}

function memberFind(){
    let num = prompt("번호를 입력해주세요");
    findName  = nameList[num-1];
    return findName;
}


function variable(){
    var a = 1;
    var a = 2;
    console.log(a);

    let b = 1;
    // let b = 2;
    b = 2;
    
    console.log(b);
    
    const c = 1;
    // const c = 2;
    // c = 2;
    
    console.log(c);
}



function Maths() {
    console.log(Math.pow(3,2));       // 9,   3의 2승 
    console.log(Math.round(10.6));    // 11,  10.6을 반올림
    console.log(Math.ceil(10.2));     // 11,  10.2를 올림
    console.log(Math.floor(10.6));    // 10,  10.6을 내림
    console.log(Math.sqrt(9));        // 3,   3의 제곱근
    console.log(Math.random());       // 0부터 1.0 사이의 랜덤한 숫자
}

