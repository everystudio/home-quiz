# home-quiz

身内向けの3択クイズ Web アプリです。HTML/CSS/JS だけで動き、ビルドは不要です。

- 不正解だと同じ問題からやり直し
- 最終問題に正解すると Congratulations 画面とご褒美画像を表示

## 設問・ご褒美画像の差し替え

`questions.js` だけを編集します。

```js
const QUESTIONS = [
  { question: "問題文", choices: ["選択肢1", "選択肢2", "選択肢3"], answer: 1 }, // answer は 0 始まり
];
const REWARD = { image: "images/reward.jpg", message: "おめでとう！" };
```

画像は `images/` に置き、`REWARD.image` のパスを合わせてください。

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

※ public リポジトリなので、設問・正解・画像はソースから誰でも見られます。

## 公開の終了

- Settings → Pages で **Unpublish site**、または
- Settings → General → Danger Zone でリポジトリごと削除
