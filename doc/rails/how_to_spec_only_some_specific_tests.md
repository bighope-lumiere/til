---
title: Rails の Rspec でファイル内の特定のテストだけを実施する方法
tags: tips, rails, dev, rspec, ruby
---

下のファイルで `#testA` のみを実行したいときは、次のように `type: :tmp` などと書いてあげて

```ruby
require 'rails_helper'

describe 'Hoge', type: :model do
  describe 'testA', type: :tmp do
    context 'pattern-a' do
       ...
    end
  end

  describe 'testB' do
    context 'pattern-a' do
      ...
    end
  end
end
```

↓ のコマンドを実行すればよい。

```shell
$ bundle exec rspec [filepath] --tag type:tmp
```

次のように行数指定でもイケる。

```shell
$ bundle exec rspec [filepath]:[行数]
```
