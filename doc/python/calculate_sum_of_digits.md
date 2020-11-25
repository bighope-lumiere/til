---
title: Python である数の各位の和 (桁和) を求めたい
tags: Python
---

入力した数の各桁の和を求めて返す処理を考える。

```python
n = int(input())
res = sum(list(map(int, str(n))))
```

入力 (n) を一度 str に変換して、1 文字ずつ map で読み込んで int に変換した後、合計すればよい。
