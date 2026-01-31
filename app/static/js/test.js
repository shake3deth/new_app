function calculateScore(){
    let total = 0;
    let select = document.querySelectorAll("div.center");
    for(let i = 0 ; i < select.length ; i++ ){
        let obj = document.getElementById(select[i].id).id;
        console.log(obj);
    }
}