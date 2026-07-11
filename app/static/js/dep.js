const b_value = [
    "情報系",
    "機械",
    "生命・科学",
    "建築",
]

window.onload = function(){
    let frame = document.getElementById("frame");
    let div0 = document.createElement("div");
    div0.className = 'question';
    let h = document.createElement("h1");
    h.textContent = "Q1. あなたはこの大学でどの様な分野を学びたいですか"
    div0.appendChild(h);
    frame.appendChild(div0);
    //問題の中身
    let div1 = document.createElement("div");
    div1.className = "center";
    div1.id = "question_1";
    for(let i = 0 ; i < 4 ; i++){
        let input = document.createElement("input");
        input.type = "radio";
        input.id = `q1_${i+1}`;
        input.name = `q_1`;
        input.value = i+1;
        div1.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = `q1_${i+1}`;
        label.textContent = b_value[i];
        div1.appendChild(label);
    }
    frame.appendChild(div1);
}

function check(){
}

function calculateScore(){

}

function info(){

}

function mach(){

}

function life(){

}

function arch(){
    
}