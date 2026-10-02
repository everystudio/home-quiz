// クイズの設定データ。ここを書き換えれば内容を差し替えられます。
// 画像は images/ フォルダに置き、パスを "images/ファイル名" で指定してください。

// トップページ
const TOP = {
  title: "ホームクイズ",
  image: "images/top.svg",
  message: "3択クイズに挑戦しよう！",
};

// 設問
// answer は choices の何番目が正解か（0 始まり: 0=1番目, 1=2番目, 2=3番目）
// image は正解したときに表示する画像（不要なら行ごと削除してOK）
const QUESTIONS = [
  {
    question: "日本で一番高い山は？",
    choices: ["北岳", "富士山", "奥穂高岳"],
    answer: 1,
    image: "images/correct.svg",
  },
  {
    question: "1年は何日？（うるう年ではない場合）",
    choices: ["365日", "360日", "366日"],
    answer: 0,
    image: "images/correct.svg",
  },
  {
    question: "虹の色は一般的に何色と言われる？",
    choices: ["5色", "6色", "7色"],
    answer: 2,
    image: "images/correct.svg",
  },
];

// 最後の問題に正解した後の Congratulations 画面
const REWARD = {
  image: "images/reward.svg",
  message: "おめでとう！全問正解です！",
};
