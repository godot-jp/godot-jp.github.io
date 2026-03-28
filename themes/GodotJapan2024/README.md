# GodotJapan2024 Theme

Godot Japanコミュニティサイト用のHugoテーマです。Bootstrap 5.3.3をベースに、SEO最適化とアクセシビリティに対応しています。

## 特徴

- **Bootstrap 5.3.3統合**: モダンなレスポンシブデザイン
- **SEO最適化**: 
  - 動的Open Graphメタデータ
  - Twitter Card対応
  - Schema.org構造化データ（WebSite, NewsArticle, BlogPosting, TechArticle）
  - 正規URL設定
- **アクセシビリティ**: 
  - WCAG 2.1 Level AA準拠
  - 適切なalt属性
  - キーボードナビゲーション対応（:focus, :focus-visible）
- **パフォーマンス**: 
  - 画像遅延読み込み（loading="lazy"）
  - 画像最適化（quality=75）
  - リソースキャッシング（1時間）
- **保守性**: 
  - CSS変数によるデザイントークン
  - レイアウト継承の適切な実装
  - GitInfo統合（防御的実装）

## 必要要件

- Hugo Extended 0.134.0以上
- Git（GitInfo機能を使用する場合）

## インストール

```bash
cd your-hugo-site
git clone https://github.com/godot-jp/godot-jp.github.io.git themes/GodotJapan2024
```

## 設定

### config.toml 必須設定

```toml
theme = 'GodotJapan2024'
enableGitInfo = true

[params]
defaultNoImage = "/images/default.png"  # デフォルト画像パス
imageQuality = 75                        # 画像品質
recaptchaKey = "your-recaptcha-key"    # reCAPTCHAキー

[imaging]
quality = 75
resampleFilter = "Lanczos"
anchor = "Smart"

[markup.goldmark.renderer]
unsafe = false  # セキュリティのため必ずfalse
```

### CSS変数カスタマイズ

`static/css/style.css`で以下の変数をカスタマイズ可能:

```css
:root {
  --header-padding: 100px;
  --primary-text: #933;
  --primary-link: #36e;
  --accent-green: #ca9;
  --accent-blue: #ccf;
  --base-bg: #DDE5D3;
}
```

## コンテンツタイプ

### ニュース記事

```yaml
---
title: "記事タイトル"
date: 2024-01-01
image: "thumbnail.jpg"  # Open Graph画像
tags: ["tag1", "tag2"]
---
```

### リファレンス記事

```yaml
---
title: "リファレンスタイトル"
emoji: "📚"              # カード表示用絵文字
image: "cover.jpg"
---
```

## ショートコード

### blog-card

外部リンクのプレビューカードを生成:

```markdown
{{< blog-card "https://example.com" >}}
```

### wgj

Weekly Godot Japanコンテンツ用:

```markdown
{{< wgj "mastodon-embed-url" >}}
```

## ライセンス

MIT License

## 貢献

IssueやPull Requestを歓迎します: https://github.com/godot-jp/godot-jp.github.io
