# Godot Japan User Community Web Site

本サイトは[Hugo](https://gohugo.io/)で構築されています。  
バージョン: v0.107.0

## Hugoのインストール方法
https://gohugo.io/installation/windows/

## 逆引きリファレンスの更新方法

### 記事の作り方

[content/reference](/tree/main/content/reference)の中から該当するカテゴリーセクション（ディレクトリ）を選び、その中に**新規の記事用のディレクトリを作成してindex.mdとして記事を作成します。**  
ディレクトリ名はURLスラッグになり、`_index.html`のFront Matterヘッダのタイトルがページタイトルになります。

```
hugo new reference/[カテゴリセクション名]/[記事のタイトル]/index.md
```

アクセスする際は`referemce/[カテゴリセクション名]/[記事タイトル]`になります。

画像ファイルなどのメディアファイルも、作成した記事用のディレクトリに入れてください。  
作成した記事用のディレクトリ以下はどのような構成でも構いません。

上記の運用ルールは、記事が不要になった際にディレクトリを削除すれば他の記事に影響のない状態で管理するためです。  
つまり、別の記事の画像を参照する作りにはしないでください。

Github PagesでHTML5でのサンプルゲームを動かしたり、記事中に貼り付けることは可能ですが、容量の問題で運用方法は未定です。  
現段階では<u>だめではない</u>くらいの温度感で運用しています。

#### 記事のFront Matterの設定

```
---
title: "記事タイトル"
emoji: "🎈"
date: [自動入力]
draft: true
---
```

基本的には絵文字を設定していただきたいです。  
文字列なので、必ずダブルクォーテーションで括ってください。

`draft`をtrueにすると公開されます。  
本プロジェクトではマージされるまで記事は公開されませんので、基本的にtrueで問題ありません。


#### Table of contentsの設定

H2～H3タグが目次として使用されます。  
記事中に、マークダウンとしてH1タグやH4タグを使用することは可能ですが、目次としてリストされませんのでご注意ください。

### カテゴリーセクションの作成
カテゴリーセクションは、`/reference/[カテゴリセクション名]`でディレクトリを作成します。  
ディレクトリ名はURLスラッグになり、`_index.html`のFront Matterヘッダのタイトルがカテゴリータイトルになります。

## ローカルプレビューの方法

コマンドプロンプトで、クローンしたgodot-jpのディレクトリに移動し以下のコマンドを実行するとローカルサーバーが起動します。

```
hugo server
```

コマンドプロンプトで、Ctrl + Cを押すことでサーバーを停止します。