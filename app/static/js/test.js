const q_list =[
    "自ら人に対して話しかけることができない",
    "数字に対して得意意識がある",
    "物事に対して冷笑する",
    "BeRealよりTwitter(X)の方をよく見る",
    "人の言うことをきけない",
    "エナジードリンクを週に３回程度飲む",
    "インターネット上から仲良くなった人がいる",
    "小学生のニコニコ動画を見ていた",
    "サー席という概念を知らない",
    "瞑想を長時間することができない",
]

const value = [
    "そう思う",
    "部分的に思う",
    "わからない",
    "部分的に思わない",
    "そう思わない",
]


window.onload = function (){
    let d = document.getElementById("frame");
    for(let i = 0 ; i < 10 ; i++){
        //親
        let div0 = document.createElement("div");
        div0.className = "question";
        //子要素

        let h = document.createElement("h1");
        h.textContent = `Q${i + 1}. ${q_list[i]}`;
        div0.appendChild(h);
        d.appendChild(div0);
        //問題の中身
        let div1 = document.createElement("div");
        div1.className = "center";
        div1.id = `question_${i+1}`;
        for(let j = 0 ; j < 5 ; j++){
            let input = document.createElement("input");
            input.type = "radio";
            input.id = `q${i+1}_${j+1}`;
            input.name = `q_${i+1}`
            input.value = 4 - j;
            div1.appendChild(input);
            let label = document.createElement("label");
            label.htmlFor = `q${i+1}_${j+1}`;
            label.textContent = value[j];
            div1.appendChild(label);

        }
        d.appendChild(div1);
        /*
        let br = document.createElement("br");
        d.appendChild(br)
        */
    }
}

function calculateScore(){
    let a_count = 0
    let total = 0;
    let parent = document.querySelectorAll("div.center");
    for(let i = 0 ; i < parent.length ; i++){
        let selected = parent[i].querySelector(`input:checked`);
        if(selected){
            total += Number(selected.value);
        }else{
            a_count += 1
        }
    }
    if(a_count == 0){
        if(total >= (40/3)*2){
            window.location.href = config.dendai;
        }else if(total >= (40/3)){
            window.location.href = config.dentu;
        }else{
            window.location.href = config.aogaku;
        }
    }else{
        alert("すべてを選択してください");
    }
    
}
