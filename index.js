

// 자바스크립트 공부용
// console.log(variable());
// console.log(Maths());

let idNum = 1;
let idList = [];
let nameList = [];
let phoneNumList = [];
let listAllsLog = [];
let listAlls = new Object();

function arrs(){
    let arr = ["가","나",3,4,"바"];

    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]+0);    
    }
}

function memberFindAll(){
    for (var i = 0; i < idList.length; i++){
        let listAll = new Object();
        listAll ['아이디'] = idList[i];
        listAll ['이름'] = nameList[i];
        listAll ['전화번호'] = phoneNumList[i];    
    
        listAlls [i] = listAll;
    }
    return listAlls
}





function memberAllcount(){
    let Allcount = idList.length;
    // let Allcount = listAlls.length;
    return Allcount;
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


function phoneNumFind(tel){
    var check  = phoneNumList.indexOf(tel);
    return check;
}

/*
function tableCreate(){

    var table_value = new Array();
    var html = '';
    table_value.push({value : '25.5', time : '2020-08-26'}); 
    table_value.push({value : '22.4', time : '2020-08-26'}); 
    table_value.push({value : '10.58', time : '2020-08-26'}); 
    table_value.push({value : '3.44', time : '2020-08-26'}); 
    table_value.push({value : '8.5', time : '2020-08-26'}); 
    
    for(i in table_value){
    html += '<tr>';
    html += '<td>'+table_value[i].value+'</td>';
    html += '<td>'+table_value[i].time+'</td>';
    html += '</tr>';
    }
    
    document.getElementsById("kgTable").empty();
    document.getElementsById("kgTable").append(html);
    
    }
  */  


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

