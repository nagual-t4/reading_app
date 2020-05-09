function Speech() {
  // >定数
  const loadvoice = "Google US English"

  // >読み上げ設定諸々
  var speechinfo;
  var voicedata;
  var voicedatalist;
  //音声ロードが行われると、ここにで設定された関数が呼び出される
  window.speechSynthesis.onvoiceschanged = VoiseLoad;

  // >読み上げモード制御
  var speakmode = 0; //0…停止中 1…読み上げ中
  var buttontxt = ["Textを読む", "辞める"];

  // >HTML上コンポーネントの設定
  var btn = document.getElementById("btn6");
  var txt = document.getElementById("mainText");
  btn.onclick = onclick;

  // >ボタンをクリックしたときに格納される、読み上げる文章
  var speechtext = "";


  // >押された時の状態によって読み上げ/読み上げ停止を行う
  function onclick() {
    speakmode ^= 1;

    if (speakmode == 1) {
      speechtext = txt.value;
      VoiceReset();
      window.speechSynthesis.speak(speechinfo);
    } else {
      window.speechSynthesis.cancel(speechinfo);
    }

    btn.value = buttontxt[speakmode];

  }

  // >読み上げが終わった後、再度speakを呼び出しリピートする
  function repeat() {

    // cancelされた後に呼び出されていたら処理しない
    if (speakmode == 1) {
      VoiceReset(); //firefoxだと一度リセットしないと読み上げてくれない
      window.speechSynthesis.speak(speechinfo);
    }

  }

  // >読み上げ情報のリセット
  function VoiceReset() {
    speechinfo = new SpeechSynthesisUtterance();

    if (voice) speechinfo.voice = voice;
    speechinfo.volume = 1.0;
    speechinfo.rate = 1.0;
    speechinfo.lang = "en-US";
    speechinfo.pitch = 0.75;
    speechinfo.text = speechtext;

    speechinfo.onend = repeat;
  }

  // >音声データのロードを行う
  function VoiseLoad() {
    voices = speechSynthesis.getVoices();
    voice = voices.find(function(voice) {
      return voice.name == "Google US English"
    });
  }

  VoiseLoad();

}
