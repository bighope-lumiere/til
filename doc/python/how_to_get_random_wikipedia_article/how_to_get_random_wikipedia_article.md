# Wikipedia でランダムな記事を取得する方法

python のスクリプトを書いた。短いのでソースコードを下に載せておく。

```python
import wikipedia

wikipedia.set_lang("ja")

page = wikipedia.random()
summary = wikipedia.summary(page)
link = "https://ja.wikipedia.org/wiki/" + page

print(f"今日の Wikipedia\n {page}\n {summary}\n {link}")
```

出力結果の例。

```shell
今日の Wikipedia
 石飛町
 石飛町（いしとびちょう）は、愛知県豊田市の町名。
 https://ja.wikipedia.org/wiki/石飛町
```

ちなみに、[http://ja.wikipedia.org/wiki/Special:Randompage](http://ja.wikipedia.org/wiki/Special:Randompage) にアクセスしてもランダム記事を取得できる。
