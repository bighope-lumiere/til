---
title: VSCode で言語ごとにインデントの設定をする
tags: tool, dev
---

`settings.json` に以下を追記。

```json
{
    "[javascript]": {
        "editor.tabSize": 2
    },
    "[python]": {
        "editor.tabSize": 4
    }
    "[cpp]": {
        "editor.tabSize": 2
    }
}
```

参考: [vscode - Visual Studio Codeで言語ごとにインデントの設定をしたい - スタック・オーバーフロー](https://ja.stackoverflow.com/questions/34014/visual-studio-code%E3%81%A7%E8%A8%80%E8%AA%9E%E3%81%94%E3%81%A8%E3%81%AB%E3%82%A4%E3%83%B3%E3%83%87%E3%83%B3%E3%83%88%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E3%81%97%E3%81%9F%E3%81%84)
