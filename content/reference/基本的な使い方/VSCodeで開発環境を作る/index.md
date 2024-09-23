---
title: "VSCodeで開発環境を作る"
emoji: "🆚"
toc: true
weight: 0
date: 2024-09-23T18:35:04+09:00
draft: false
---

Godotでのゲーム開発において、Godotのエディタを開かなくても開発することは可能です。
アーティストとプログラマでの分業に役立つと思いますので、環境セットアップの一例として参考にどうぞ。

---

# VSCodeのインストール

{{< blog-card "https://code.visualstudio.com/download" >}}

ダウンロード・インストールは省きます。

# VSCodeプラグインのインストール

## Godot Toolsのインストール

#### Github
{{< blog-card "https://github.com/godotengine/godot-vscode-plugin" >}}

#### VSCode Market
{{< blog-card "https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools" >}}

### Godot Toolsの設定

#### エディターパスの設定

![エディターパス](image-1.png)

Godotエディタのexeファイルのパスを設定します。
`Godot 3.x`、`Godot 4.x`それぞれを設定することもできますが、そのプロジェクトでメインで使っているものだけでも問題ありません。

#### ヘッドレス設定

![ヘッドレス](image.png)

`Godot Tools > Lsp: Headless`にチェックを入れるとGodot Engineをヘッドレスモードで起動することができます。
ヘッドレスモードの場合は、Godot Engineのエディタを起動しなくても、Godot Engineでの開発を行うことができます。

チェックが入っていない場合、そのプロジェクトが開かれた起動中のGodotエディタと通信しようとします。
もしGodotが起動していない場合は、そのプロジェクトを開きGodotエディタを起動します。

### Godot Engineの設定

Godot Engineのエディタ設定を開きます。
ツールメニューの`エディター > エディター設定`です。
![エディタ設定](image-2.png)

エディタ設定の中から`テキストエディター > 外部`の項目を選択します。
![外部エディタ](image-3.png)

| プロパティ | 値 |
| -- | -- |
| 外部エディターを使用 | `true` |
| 実行パス | `VSCode実行ファイルのパス` |
| 実行フラグ | `{project} --goto {file}:{line}:{col}` |

---

以上でGodot EngineとVSCodeの設定が完了しました。

## 便利なGodot開発向けVSCodeプラグイン

#### GDScript Theme

いろんなものがVSCode自体もシンタックスハイライトもGodotカラーになるのでわかりやすい。

{{< blog-card "https://marketplace.visualstudio.com/items?itemName=JamesSauer.gdscript-theme">}}

#### gdshader lsp

GDShader用のプラグイン
シンタックスハイライト、コード補完など

{{< blog-card "https://marketplace.visualstudio.com/items?itemName=godofavacyn.gdshader-lsp">}}

#### C# Tools for Godot

Godot C#用のプラグイン

{{< blog-card "https://marketplace.visualstudio.com/items?itemName=neikeq.godot-csharp-vscode">}}

#### godot gdextention C++ snippets

GDExtension用のプラグイン

{{< blog-card "https://marketplace.visualstudio.com/items?itemName=ClickyClicker.godot-gdextention-c---snippets">}}