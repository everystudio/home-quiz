// クイズの設定データ。ここを書き換えれば内容を差し替えられます。
// 画像は images/ フォルダに置き、パスを "images/ファイル名" で指定してください。

// トップページ
const TOP = {
  title: "将志・未来の食事会クイズ",
  image: "images/top.JPG",
  message: "3択クイズに挑戦しよう！",
};

// 設問
// answer は choices の何番目が正解か（0 始まり: 0=1番目, 1=2番目, 2=3番目）
// image は正解したときに表示する画像（不要なら行ごと削除してOK）
// explanation は正解したときに表示する説明文（不要なら行ごと削除してOK。\n で改行）
const QUESTIONS = [
  {
    question: "未来ちゃんの出身地はどこでしょうか？",
    choices: ["大阪", "秋田", "香川"],
    answer: 1,
    image: "images/q2.JPG",
    explanation: "正解は秋田！\n以前は由利本荘（ゆりほんじょう）市に住んでいたぞ！",
  },
  {
    question: "今日の食事会の最寄り駅はどこでしょうか？",
    choices: ["武蔵小杉", "竜宮城前", "ホグワーツ魔法魔術学校前"],
    answer: 0,
    image: "images/q1.JPG",
    explanation: "正解は武蔵小杉！\n東急東横線・東急目黒線、JR南武線・横須賀線・湘南新宿ラインが通る、とっても便利な駅です。",
  },
  {
    question: "食事会の時間は何時からでしょうか？",
    choices: ["深夜2:00から", "早朝5:00から", "13:30から"],
    answer: 2,
    image: "images/q3.JPG",
    explanation: "正解は13:30から！\nおいしいお料理とみんなの笑顔が待っています。\n少しだけ余裕をもって、遅れないようにお越しくださいね。",
  },
];

// 最後の問題に正解した後の Congratulations 画面
const REWARD = {
  image: "images/reward.JPG",
  message: "おめでとう！全問正解です！",
};
