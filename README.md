# home-quiz

身内向けの3択クイズ Web アプリです。HTML/CSS/JS だけで動き、ビルドは不要です。

- 不正解だと同じ問題からやり直し
- 正解すると「正解！」と正解画像・説明文を表示し、「次へ」で次の問題へ
- 最終問題に正解すると Congratulations 画面とクリア画像を表示

## 内容の差し替え

`questions.js` だけを編集します。画像は `images/` に置き、パスを `"images/ファイル名"` で指定します（jpg / png / svg など）。

| 設定 | 内容 |
|---|---|
| `TOP.title` / `TOP.image` / `TOP.message` | トップページのタイトル・画像・説明文 |
| `QUESTIONS[].question` / `choices` | 問題文と3つの選択肢 |
| `QUESTIONS[].answer` | 正解の番号（0 始まり: 0=1番目, 1=2番目, 2=3番目） |
| `QUESTIONS[].image` | その問題に正解したときに出す画像（省略可） |
| `QUESTIONS[].explanation` | その問題に正解したときに出す説明文（省略可、`\n` で改行） |
| `REWARD.image` / `REWARD.message` | 最後の Congratulations 画面の画像とメッセージ |

```js
const QUESTIONS = [
  { question: "問題文", choices: ["A", "B", "C"], answer: 1, image: "images/q1.jpg" },
];
```

## ローカルで確認

`index.html` をブラウザで開くだけで動きます。または:

```sh
python3 -m http.server 8000
# http://localhost:8000/ を開く
```

## 公開（GitHub Pages）

1. このリポジトリを GitHub に push（Pages 無料版は public リポジトリが必要）
2. GitHub の Settings → Pages → Source: **Deploy from a branch**、Branch: `main` / `/(root)` を選んで Save
3. 1〜2分後に `https://everystudio.github.io/home-quiz/` で公開されます

公開URLのQRコード: [`qr.png`](qr.png)

※ public リポジトリなので、設問・正解・画像はソースから誰でも見られます。

## 公開の終了

- Settings → Pages で **Unpublish site**、または
- Settings → General → Danger Zone でリポジトリごと削除
