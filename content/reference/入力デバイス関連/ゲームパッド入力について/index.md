---
title: "ゲームパッド入力について"
emoji: "🎮"
toc: true
weight: 0
date: 2022-12-20T14:12:47+09:00
draft: false
---

# ゲームパッドとアクションの登録

[入力機能について](/reference/入力デバイス関連/入力機能について)で解説している通り、Godot Engineではアクションに対して複数の入力を登録することができます。
これにより、コードからはキーボードとゲームパッドの操作を、どちらも同じアクションで参照することができます。

このページでは、ゲームパッドに関連する操作やコードを解説していきます。

# ゲームパッドの状態取得

## ゲームパッドが認識されているか取得

ゲームパッドがシステムに認識されているかどうかを判別します。

```gdscript
if is_joy_known(0):
    print("デバイス0のゲームパッドが正常に認識されています。")
```

システムが認識している状態であれば、[グローバルスコープのJoystickList](https://docs.godotengine.org/ja/stable/classes/class_%40globalscope.html#enum-globalscope-joysticklist)に定義されたゲームパッドの入力の値を正常に取得できます。

## 切断・接続の状態を取得する

ゲームパッドの接続状態が変わったことを通知するシグナルがあります。

```gdscript
func _ready():
    Input.joy_connection_changed.connect(_on_joy_connection_changed)

func _on_joy_connection_changed(device:int, connected:bool):
    if not connected:
        print("デバイス%sのゲームパッドが切断されました" % str(device))
    elif connected:
        print("デバイス%sのゲームパッドが接続されました" % str(device))
```

# ゲームパッドの入力取得

## スティックの傾きを取得

各アクションにゲームパッドの左スティックの上下左右方向を`move_right`, `move_left`, `move_up`, `move_down`として定義し、以下のように**アクションから方向を取得**します。

```gdscript
var value :Vector2 = Input.get_vector("move_right", "move_left", "move_up", "move_down")

print(str(value)) # [-1.0, -1.0] ~ [0, 0] ~ [1.0, 1.0]
```

## ボタン入力を取得

通常は`is_action_pressed()`などを使用して**アクションでの入力判定**を行うことがほとんどですが、ゲームパッドのボタン入力を個別に取得したい場合は以下のように取得できます。

```gdscript
if Input.is_joy_button_pressed(0, JOY_DS_A):
    print("Nintendo規格のAボタンに値するボタンが押されている")
```

[グローバルスコープのJoystickList](https://docs.godotengine.org/ja/stable/classes/class_%40globalscope.html#enum-globalscope-joysticklist)に定義されたゲームパッドの入力の値を第2引数に指定します。

## ジャイロスコープセンサーの取得

{{<comment>}}
現在標準のエンジンの機能として、iOS・Android以外のジャイロスコープセンサーの取得はできないようです。
GDExtensionなどの拡張で取得することは可能です。
{{</comment>}}

{{<youtube 3oHbdXnPGd0>}}

# ゲームパッドへの命令

## バイブレーションの設定

`start_joy_vibration(デバイス, 弱振動値, 強振動値, 振動時間)`で設定します。
ゲームパッドのバイブレーションは2個のモーターがあり、それぞれのモーターの強さを`0-1`の値で設定することができます。
これらの振動値を動的に変更する場合は`start_joy_vibration()`メソッドを変化の回数分実行することで実装可能です。

`振動時間`は`0`を設定することで、無限に振動しようとします。
すべてのデバイスが長時間振動できるわけではありませんので、長時間振動させたい場合は、繰り返し実行します。

```gdscript
# バイブレーションフラグ
var is_vibrate:bool = true

func _process(_delta):
    if get_joy_vibration_duration(0) =< 0 and is_vibrate:
        start_joy_vibration(0, 0.4, 0.2) # バイブレーション開始
    elif get_joy_vibration_duration(0) > 1000.0:
        is_vibrate = false
        stop_joy_vibration(0) # バイブレーションを止める
```
