# GitHub CLI を導入してみる

[GitHub CLIで始める快適GitHub生活 - Qiita](https://qiita.com/ryo2132/items/2a29dd7b1627af064d7b) を読んで設定してみた。

とりあえず `brew install gh` を実行する。

細かいコマンドなどは利用しながら調べつつ覚えていくのがよさそう。今回は使えることだけを確認できれば OK 。

`test` という PR を作成していたので、これに対して操作してみる。

```zsh
➜  til (fix/setting_textlint) ✗ gh pr list

Showing 1 of 1 open pull request in bighope-lumiere/til

#1  test  fix/setting_textlint
➜  til (fix/setting_textlint) ✗ gh pr view #1
test
Open • bighope-lumiere wants to merge 3 commits into main from fix/setting_textlint

Reviewers: github-actions (Commented)

View this pull request on GitHub: https://github.com/bighope-lumiere/til/pull/1
➜  til (fix/setting_textlint) ✗ gh pr merge #1
? What merge method would you like to use? Create a merge commit
? Delete the branch locally and on GitHub? Yes
? Submit? Yes
✔ Merged pull request #1 (test)
✔ Deleted branch fix/setting_textlint and switched to branch main
```
