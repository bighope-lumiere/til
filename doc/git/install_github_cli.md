# GitHub CLI を導入してみる

[GitHub CLIで始める快適GitHub生活 - Qiita](https://qiita.com/ryo2132/items/2a29dd7b1627af064d7b) を読んで設定してみた。

とりあえず `brew install gh` を実行する。

細かいコマンドなどは利用しながら調べつつ覚えていくのがよさそう。今回は使えることだけを確認できれば OK 。

とりあえずよく使う PR まわりのコマンド。記事から引用。

```shell
# プルリクエストのブランチへのチェックアウト
$ gh pr checkout {<number> | <url> | <branch>} [flags]

# 現在のブランチからのプルリクエストの作成
$ gh pr create [flags]

# プルリクエストの差分を確認
$ gh pr diff {<number> | <url>} [flags]

# プルリクエストの一覧を取得
$ gh pr list [flags]

# プルリクエストをマージ
$ gh pr merge [<number> | <url> | <branch>] [flags]

# プルリクエストにレビューを追加
$ gh pr review [<number> | <url> | <branch>] [flags]

# プルリクエストの内容を閲覧
$ gh pr view [<number> | <url> | <branch>] [flags]

# 自分に関係のあるプルリクエストのステータスを閲覧
$ gh pr status [flags]
```

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

## 感想

これは便利。とくに til みたいな文章書いて push して pr つくって...みたいな一連の処理を完結させられるのは良い。
