const b_value = [
    "情報系",
    "機械",
    "生命・科学",
    "建築・デザイン",
    "まだ決まっていない",
]

let score = []

//[question,AJ,FI,EC]
const info_value =[
    ["CGやゲーム、音響、映像などを学びたい",1,5,4],
    ["AIなどのデータサイエンスに興味がある",10,2,1],
    ["コンピュータの技術やネットワークについて幅広く学びたい",3,1,3],
    ["システムを一から作りたい",3,2,2],
    ["サイバーセキュリティについて学びたい",3,2,2],
    ["プログラミングなどの情報技術だけでなくハードウェア(物理的)についても学びたい",2,1,10],
    ["通信システムについて実物を使って学びたい",3,1,3],
    ["webデザインなどに興味がある",1,10,1],
    ["もとからあるソフトなどを活用して制作を行いたい",1,3,1]
];

function total(value){
    for(let i = 0 ; i < 3 ; i++){
        let count = 0
        for(let j = 0 ; j < value.length ; j++){
            count += value[j][i+1];
        }
        score.push(count)
    }
    console.log(score);
}


const machine_value = [

];

const life_value = [

];

const arch_value = [];

const none_value = [];

window.onload = function(){
    let divv = document.getElementById("first");
    let div0 = document.createElement("div");
    div0.className = 'question';
    let h = document.createElement("h1");
    h.textContent = "Q1. あなたはこの大学でどの様な分野を学びたいですか"
    div0.appendChild(h);
    divv.appendChild(div0);
    //問題の中身
    let div1 = document.createElement("div");
    div1.className = "center";
    div1.id = "question_1";
    for(let i = 0 ; i < b_value.length ; i++){
        let input = document.createElement("input");
        input.type = "radio";
        input.id = `q1_${i+1}`;
        input.name = `q_1`;
        input.value = i+1;
        input.onclick = check;
        div1.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = `q1_${i+1}`;
        label.textContent = b_value[i];
        div1.appendChild(label);
    }
    divv.appendChild(div1);
}

function check(event){
    if(event.target.id == "q1_1"){
        info();
    }else if(event.target.id == "q1_2"){
        machine();
    }else if(event.target.id == "q1_3"){
        life();
    }else if(event.target.id == "q1_4"){
        arch();
    }else if(event.target.id == "q1_5"){
        none();
    }
}

function calculateScore(){

}

function info(){
    let div = document.getElementById("second");
    div.textContent = "";
    for(let i = 0 ; i < info_value.length ; i++){
        //問題文
        let div0 = document.createElement("div");
        div0.className = "question";
        let h = document.createElement("h1");
        h.textContent = `Q${i+2}. ${info_value[i][0]}`;
        div0.appendChild(h);
        div.appendChild(div0);
        //問題の答え
        let div1 = document.createElement("div");
        div1.className = "center";
        div1.id = `Q${i+2}`;
        for(let j = 0 ; j < 2 ; j++){
            let input = document.createElement("input");
            input.type = "radio";
            input.id = `Q${i+2}_${j+1}`;
            input.name = `Q${i+2}`;

            div1.appendChild(input);
            let label = document.createElement("label");
            label.htmlFor = `Q${i+2}_${j+1}`;
            label.textContent = j==0 ? "はい" : "いいえ";
            div1.appendChild(label);
        }
        div.appendChild(div1)
    }
    
}

function machine(){
    let div = document.getElementById("second");
    div.textContent = "";
    let div0 = document.createElement("div");
    let h = document.createElement("h1");
    h.textContent = "機械";
    div0.appendChild(h);
    div.appendChild(div0);
}

function life(){
    let div = document.getElementById("second");
    div.textContent = "";
    let div0 = document.createElement("div");
    let h = document.createElement("h1");
    h.textContent = "生命・科学";
    div0.appendChild(h);
    div.appendChild(div0);
}

function arch(){
    let div = document.getElementById("second");
    div.textContent = "";
    let div0 = document.createElement("div");
    let h = document.createElement("h1");
    h.textContent = "建築";
    div0.appendChild(h);
    div.appendChild(div0);
}

function none(){
    let div = document.getElementById("second");
    div.textContent = "";
    let div0 = document.createElement("div");
    let h = document.createElement("h1");
    h.textContent = "決まっていない";
    div0.appendChild(h);
    div.appendChild(div0);
}