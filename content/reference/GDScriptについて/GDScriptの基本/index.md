---
title: "GDScriptの基本"
emoji: "🔰"
toc: true
weight: 5000
draft: false
---

Godot Engineの組み込みスクリプト言語である`GDScript`の基本的な使い方について記載します。

# 基本的な記述方法

```gdscript
extends Node

var int_sanple = 0
var text_sample = "文字列"
var int_sample2 :int = 1

func _ready():
    pass
```

GDSCriptは、**大まかに３種類の要素で読み書き**することができます。
上記のサンプルを１行ずつ解説します。

## クラスの拡張

```gdscript
extends Node
```

`extends Node`は`Node`という**クラスの拡張**という意味です。
`Node`クラスが持つ機能をそのままに、新しいクラスを作ることになります。

## 変数

```gdscript
var int_sample = 0
var text_sample = "文字列"
```

GDScriptは静的型付けの機能を持っています。
多くの言語は型を明示的に指定する必要がありますが、GDScriptは自動的に型を割り付けます。

これによりユーザーは型をあまり意識せずにプログラムを書くことができます。

### 明示的な型付け

```gdscript
var int_sample2 :int = 1
```

型を意識したい場合もありますので、上記のように明示的に型を指定することもできます。

## 関数

```gdscript
func _ready():
    pass
```

GDScriptの関数は`func`にスペースを空けて関数名を記述します。
多くの言語のように`{ }`でブロックを作るのではなく、`:`のあとの**インデント**でブロックを作る構文になります。

関数にはクラスがもともと持っている**組み込み関数**と、ユーザーが作る**独自関数**の２種類があります。