// クイズの設問データ。ここを書き換えれば問題を差し替えられます。
// answer は choices の何番目が正解か（0 始まり: 0=1番目, 1=2番目, 2=3番目）
const QUESTIONS = [
  {
    question: "日本で一番高い山は？",
    choices: ["北岳", "富士山", "奥穂高岳"],
    answer: 1,
  },
  {
    question: "1年は何日？（うるう年ではない場合）",
    choices: ["365日", "360日", "366日"],
    answer: 0,
  },
  {
    question: "虹の色は一般的に何色と言われる？",
    choices: ["5色", "6色", "7色"],
    answer: 2,
  },
];

// 全問正解したときに表示するご褒美
const REWARD = {
  image: "images/reward.svg",
  message: "おめでとう！全問正解です！",
};
