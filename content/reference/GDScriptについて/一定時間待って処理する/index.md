---
title: "一定時間待って処理する"
emoji: "⏳"
toc: true
weight: 0
date: 2023-02-08T21:57:32+09:00
draft: false
---

**一定時間待って処理したい**場合の実装方法はいくつかあります。

# カウンターを使って処理する

`_process()`または`_physics_process`でカウンター変数に数値を足していき、特定の値になったら処理を実行する方法です。

```gdscript
var counter:int = 0

func _process(_delta):
    counter += 1
    if _counter == 10:
        print("do something")
```

加算でも減算でも構いませんが、一度しか使用しない場合は変数をむやみに増やしてしまう事がデメリットです。

# タイマーノードを使って処理する

`Timer`ノードは、指定した時間でシグナルを発行するノードになります。
シグナルを受け取ることで特定の処理を行う事ができます。

```gdscript
@onready var timer = $Timer

func _ready():
	timer.timeout.connect(func(): print("test"))
	timer.one_shot = true
	timer.start(0.5)
```

`one_shot`を`true`にしないと、指定した時間で設定したメソッドが繰り返し実行されます。
時間で指定するため、フレーム単位での指定はできません。

`Engine.get_frames_per_second()`で`fps`を取得して`1/fps`とすることで1フレームを実現することはできますが、フレームレートが可変の場合は不安定になるため、時間で指定することをおすすめします。


# コルーチンを使って処理する

シーンツリーに直接`one_shot`で消える`Timer`ノードを設定することも可能です。

```gdscript
func _ready():
	await get_tree().create_timer(0.5).timeout
	print("test")
```

`await`を使用することで、シンプルに書く事ができますが、非同期処理ですので、処理の順番に注意する必要があります。


```gdscript
var str_test:String = ""

func _ready():
	await get_tree().create_timer(0.5).timeout
	str_test = "test"

func _process(_delta):
    print(str_test)
    # 0.5秒以降でないとstr_testは空になっている。
```

更に詳しいawaitの使用方法は以下をご覧ください。

{{< blog-card "https://zenn.dev/submax/articles/30433a77da3cca" >}}