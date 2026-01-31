function calculateScore() {
  let total = 0;
  // 全ての質問を取得
  const questions = ["q_1","q_2"];
  questions.forEach(q => {
    const selected = document.querySelector(`input[name=${q}]:checked`);
    if (selected) {
      total += parseInt(selected.value);
      console.log(total)
    }
  });
  // 合計点でリンク先を分岐
  //if (total >= 8) {
    //window.location.href = "university_A.html";
  //} else if (total >= 4) {
    //window.location.href = "university_B.html";
  //} else {
    //window.location.href = "university_C.html";
  //}
  console.log(total);
}
