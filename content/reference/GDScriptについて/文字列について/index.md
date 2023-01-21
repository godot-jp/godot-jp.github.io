---
title: "文字列について"
emoji: "✒"
toc: true
weight: 0
draft: false
---

# 文字列の基本

文字列は非常に単純なデータ型であり、コピーオンライトという方式が取られています。
参照渡しができない型の場合、他の変数に渡すとすぐに複製されますが、Godot Engineの場合、渡された時点では参照渡しであり、変更があった場合に複製されます。
つまり、変更がない場合は複製されないのでメモリの節約になります。

また、Godot Engineでは文字列を加工するメソッドが多数用意されています。

## 文字コードについて

Godot EngineはUnicodeをサポートしています。

# 文字列の作成方法

文字列を作成するには、文字列リテラルを使用し、ダブルクォーテーション`""`でくくります。

```gdscript
var value :String = "あいうえお" # あいうえお
```

## 文字列の中でダブルクォーテーションを使う

文字列リテラルでダブルクォーテーションを使用しているため、文字列内にダブルクォーテーションを使用することができません。
その場合、エスケープ文字を使い、`\"`と記述します。

```gdscript
var value :String = "\"かきくけこ\"" # "かきくけこ"
```

## 他の型を文字列に変換する

ほとんどの型を`String`に変換することができますが、`String`クラスで変換するわけではありません。
`String(100)`などとするとエラーが出ます。

```
str(100)
var_to_str(100)
```

# 文字列の処理

## 文字列を連結する

連結演算子`+`または`+=`を使用して、複数の文字列を連結します。

```gdscript
var value :String = "あいう" + "え" # あいうえ
value += "お" # あいうえお
```

### 他の型と文字列を連結する

他の型と連結する場合は、どちらも文字列に揃える必要があります。

```gdscript
var value :String = "あいうえお"
value += str(100)

print(value) # あいうえお100
```

## 文字列同士を比較する

文字列が同じかどうかを比較する場合、`==`等価演算子を使用することができます。

```gdscript
var value = "あいう" == "あいう" # true
```

また、文字コードの大小を、`<`または`>`の比較演算子を使用することで判別できます。

```gdscript
var value1 = "あ" < "い" # true
var value2 = "う" < "い" # false
```


## 文字列を数える

文字列を数えるメソッドをご紹介します。

### 文字列の長さを数える

```gdscript
var value = "あいうえお"
print(value.length()) # 5
```

### 文字列の出現回数を数える

```gdscript
var value = "ねこねここねこ"
print(value.count("こ")) # 4
```

文字列の途中から、または途中までなどの範囲で探すことも可能です。

```gdscript
var value = "ねこねここねこ"
print(value.count("こ", 2, 5)) # 2
```

上記の例だと、最初の「ね」は0文字目と扱い、2文字目から5文字目までなので、
「ねこ<span style="color:red">ねここ</span>ねこ」の範囲になります。

## 文字列を調べる

### 文字列が空か調べる

```gdscript
var value1 = "あいうえお"
print(value1.empty()) # false

var value2 = ""
print(value2.empty()) # true
```

### 文字列が特定の文字で始まるか調べる

```gdscript
var value = "あいうえお"
print(value.begin_with("あ")) # true
print(value.begin_with("お")) # false
```


### 文字列が特定の文字で終わるか調べる

```gdscript
var value = "あいうえお"
print(value.ends_with("あ")) # false
print(value.ends_with("お")) # true
```

## 文字列を加工する

### フォーマットを設定する（簡易版）

```gdscript
var value1:String = "あいう%s"
print(value1 % "えお") # あいうえお

var value2:String = "%sいうえ%s"
print(value2 % ["あ", "お"]) # あいうえお
```

### フォーマットを設定する（formatメソッド使用）

```gdscript
var value:String = "かきく{str}"
print(value.format({"str": "けこ"})) # かきくけこ
```

`format()`を使用すると、辞書に定義されたキーとペアになった文字列に置換されます。
例えば、リッチテキストを使用することを前提として、メッセージ内に画像を表示させるタグに置き換えることも可能です。

```gdscript
var dict :Dictionary = {"Aボタン画像":"[img]res://icon.png[/img]"}
var value :String = "{Aボタン画像}ボタン"
$RichTextLabel.bbcode_enabled = true
$RichTextLabel.text = value.format(dict) # 🅰️ボタン
```

### 指定の桁以下ならゼロで埋める

最終的に文字列に変換されますが、変換元は数値を扱います。

```gdscript
print("%010d" % 555) # 0000000555
print("%05d" % 555) # 00555
```