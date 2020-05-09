btn5.addEventListener('click', function() {
  if (area.value == "") {
    alert("テキストボックスに入力してください。")
    extit;
  }
  //ボタン1を押す：チャンクごとに文字列が分けられ、変数text1に配列として格納
  text3 = area.value.split('*');
  text3 = text2.join('');

  for (i = 0; i < text2.length; i++) {
    text2 = text2[i].replace(/[^\x00-\x7Eｧ-ﾝﾞﾟ]+/, '');
  }
  console.log(text2);
});

// btn1.addEventListener('click', function() {ß
//   if (area.value == "") {
//     alert("テキストボックスに入力してください。")
//     exit;
//   }
//
//   //ボタン1を押す：チャンクごとに文字列が分けられ、変数text1に配列として格納
//   text1 = area.value.split('*');
//   for (i = 0; i < text1.length; i++) {
//     const element = document.getElementById('list');
//     //英文チャンクがHTML要素として表示
//     let liFirst = document.createElement('p');
//     liFirst.textContent = text1[i];
//     element.appendChild(liFirst)ß
//     //各英文の下に、和文訳を入れるためのテキストエリアを作成
//     let liFirst2 = document.createElement('textarea');
//     liFirst2.setAttribute("class", "inputText form-control form-control-sm");
//     liFirst2.setAttribute("rows", "1");
//     liFirst2.setAttribute("cols", "100");
//     element.appendChild(liFirst2)
//   };
// });
