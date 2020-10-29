# Google Optimize で jQuery を利用して簡単に AB テストを作成する

Google Optimize は AB テストを単純な設定で実行できるツールであるが、ビジュアルエディタだけを用いて CSS の編集だけを使うと、その利用範囲が限られてくる。
そこで、 JavaScript を利用して簡単な要素の置換や移動を書くことで、非エンジニアでも簡単に AB テストのパターンを実装できる。

## 特定の class 要素を置換したいとき

```html
<p class="target">hogekosan-dayo</p>
```

この `<p>` タグを選択して以下の JavaScript を追加する。

```javascript
$(element).
```

実装する前にはブラウザのコンソールで、実際に意図した挙動が確認できるかを調べることができる。

```javascript
var txt = $(".target").html().replace("dayo", "desu");
$(".target").html(txt);
```

を実行すれば次のようになることを確認できる。

```html
<p class="target">hogekosan-desu</p>
```
