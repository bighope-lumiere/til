---
title: Android 端末を用いて PC で起動した localhost にアクセスする方法
tags: android, localhost, dev, chrome
---

1. PC 上で localhost を起動する。
2. Android 端末で Google Chrome を起動しておく。
3. USB デバッグを有効化した状態で PC と Android 端末を接続する。
4. PC の Google Chrome で `chrome://inspect/#devices` にアクセスする。
5. `Port forwarding...` からポート番号を登録する。
6. `Enable port forwarding` をクリックして有効化する。完了。
