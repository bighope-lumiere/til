# ChromeDriver のバージョンが合わないというエラーが出たときの対応

`Message: session not created: This version of ChromeDriver only supports Chrome version 83` というエラーがでた。

## 解決策

シンプルに chromedriver のバージョンを上げれば解決。 `brew reinstall chromedriver` を実行。

これは chrome を最新版にするなら定期的にやる必要がありそう
