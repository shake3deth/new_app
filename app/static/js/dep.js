const b_value = [
    "情報系",
    "機械",
    "生命・科学",
    "建築",
    "まだ決まっていない",
]

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
    let div0 = document.createElement("div");
    let h = document.createElement("h1");
    h.textContent = "情報系";
    div0.appendChild(h);
    div.appendChild(div0);
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