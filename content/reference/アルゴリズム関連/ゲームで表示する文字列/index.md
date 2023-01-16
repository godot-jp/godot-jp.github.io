---
title: "ゲームで表示する文字列"
emoji: "🪪"
toc: true
weight: 5000
date: 2023-01-16T21:52:10+09:00
draft: false
---

# 特定の文字を置き換える

ゲームの中で特定の文字を置き換えたいときがあります。
例えば、入力されたプレイヤーの名前を置き換える場合などが当てはまります。


## replace関数

```gdscript
var message:String = "むかしむかし、@playerは鬼退治に行きました"
var player_name:String = "桃太郎"

func _ready():
    var result:String = message.replace("@player", player_name)
    print(result) #むかしむかし、桃太郎は鬼退治に行きました
```

## format関数

```gdscript
var message:String = "むかしむかし、{player}は鬼退治に行きました"
var player_name:String = "桃太郎"

func _ready():
    var result:String = message.format({"player": player_name})
    print(result) #むかしむかし、桃太郎は鬼退治に行きました
```

### replaceとformatの違い

`replace`は指定した文字列と一致するすべての文字を置換します。
仮に**文中に偶然同じ文字列が出てきたとしても、機械的に置換します。**

`format`よりも`replace`の指定方法の方が単純なので手軽に使用することができますが、今回のケースのようにプレイヤー名を置換するだけの場合は`format`の方が確実に置換することができます。

使用するケースによって使い分けるのが良いかと思います。

また、[フォーマットを設定する（簡易版）](/reference/gdscriptについて/文字列について/#フォーマットを設定する簡易版)で置換することも可能ですが、`%s`の数と配列の順番を揃える必要があり、実装で混乱しやすいため、上記いずれかの方法を取ることをお勧めします。

# 1文字ずつ表示する

画面に表示する場合は`Label`クラスを使用します。

メッセージウィンドウなどで1文字ずつ順番に表示したい場合があります。
`Label`クラスの`visible_ratio`変数の値を変更することで簡単に実装することができます。

## Labelクラスのvisible_ratioの値を変更

```gdscript
onready var label = $Label

func _ready:
    label.text = "むかしむかし、浦島はたすけた亀に連れられて"
    label.visible_ratio = 0.5 #むかしむかし、浦島は
```

`Label`および`RichTextLabel`クラスには、割合でテキストを表示する機能が備わっています。

### awaitを使用する場合

```gdscript
onready var label = $Label
var duration:float = 0.05

func _ready():
	label.text = "むかしむかし、浦島はたすけた亀に連れられて"
	label.visible_ratio = 0
	message_play()
	
func message_play():
	label.visible_ratio += 1.0 / label.text.length() 
	await get_tree().create_timer(duration).timeout
	if label.visible_ratio < 1: 
        _message_play()
```

### _process()を使用する場合

```gdscript
onready var label = $Label
var duration:float = 0.05

func _ready():
	label.text = "むかしむかし、浦島はたすけた亀に連れられて"
	label.visible_ratio = 0
	
func _process(_delta):
	if label.visible_ratio < 1:
		label.visible_ratio += 1.0 / label.text.length() * (1.0 - duration)
```

`BBCode`を使用した`RichTextLabel`では、自動でBBタグを無視してくれるので、単純に`visible_ratio`の値を指定すれば実装できます。

# 文字にエフェクトをかける

`RichTextLabel`でのみ動作します。
まずは、`bbcode_enable`を`true`にする必要があります。（インスペクタでも設定可能）

## 主な組み込みエフェクト

```gdscript
func  _ready():
	rich_label.bbcode_enabled = true
	rich_label.text += "[center]"
	rich_label.text += "[color=#ff6666]文字色が赤[/color]な部分と[color=#6666ff]文字色が青[/color]な部分\n"
	rich_label.text += "[wave]ウェーブする文字列[/wave]\n"
	rich_label.text += "[tornado]トルネードする文字列[/tornado]\n"
	rich_label.text += "[shake]シェイクする文字列[/shake]\n"
	rich_label.text += "[fade start=0 length=9]フェードする文字列[/fade]\n"
	rich_label.text += "[rainbow]ゲーミング文字列[/rainbow]\n"
	rich_label.text += "[/center]"
```

# 文字をフェードして表示させる

[文字にエフェクトをかける](#文字にエフェクトをかける)処理で[1文字ずつ表示する](#1文字ずつ表示する)に似た挙動を作ることも可能です。

```gdscript
var msg_count:float = 0
var msg_text:String = "[fade start=%s length=5]いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせすん[/fade]"

func  _ready():
	rich_label.bbcode_enabled = true
	
func _process(delta):
	var _msg_len:int = msg_text.length()
	if msg_count < _msg_len:
		msg_count += 0.3
		rich_label.text = msg_text % int(msg_count)
```
