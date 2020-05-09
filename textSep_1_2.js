btn1.addEventListener('click', function() {
  if (area.value == "") {
    alert("テキストボックスに入力してください。");
  };

  //ボタン1を押す：チャンクごとに文字列が分けられ、変数text1に配列として格納
  text1 = area.value.split('*');
  for (i = 0; i < text1.length; i++) {
    const element = document.getElementById('list');
    //英文チャンクがHTML要素として表示
    let liFirst = document.createElement('p');
    liFirst.textContent = text1[i];
    element.appendChild(liFirst)
    //各英文の下に、和文訳を入れるためのテキストエリアを作成
    let liFirst2 = document.createElement('textarea');
    liFirst2.setAttribute("class", "inputText form-control form-control-sm");
    liFirst2.setAttribute("rows", "1");
    liFirst2.setAttribute("cols", "100");
    element.appendChild(liFirst2)
  };
});

btn2.addEventListener('click', function() {
  //ボタン2を押す：和文の各テキストエリアの値を配列に格納
  let inputTexts = document.getElementsByClassName('inputText');
  let oneLine = [];
  for (let i = 0; i < inputTexts.length; i++) {

    oneLine.push(text1[i]); //配列に上から英文を格納
    oneLine.push(inputTexts[i].value); //各和文を英文チャンクのすぐ後に格納

  };
  console.log(oneLine);
  //配列に格納した文字列をテキストエリアに表示
  area.value = oneLine.join('');

});
