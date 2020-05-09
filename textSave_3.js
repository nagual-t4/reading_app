function TextSave() {
  //文字を取得
  var text2 = document.getElementById('mainText').value
  //ファイル名を取得、デフォルトは「mytext」
  var name = document.getElementById('name').value || 'mytext'
  //テキストファイルを作成
  var blob = new Blob([text2], {
    type: 'text/plain'
  })
  //リンクを取得
  var link = document.getElementById('DL_link')
  //リンクにダウンロードするファイルをセット
  link.href = window.URL.createObjectURL(blob)
  //もしダウンロード属性に対応していたら
  if ('download' in link) {
    //リンクにダウンロードする名前をセット
    link.download = name + '.txt'
    //リンクをクリックしてダウンロードさせる
    link.click()
    //もし対応してなかったら
  } else {
    //メッセージを表示する
    link.textContent = '右クリックから名前を付けて保存してください'

  }

}
