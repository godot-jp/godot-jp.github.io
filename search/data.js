
var data = [
        {
          title: "プロジェクトの作成方法",
          url: "https://godot-jp.github.io/reference/%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9/%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95/", 
          body: "プロジェクトの作成方法 インストール方法 公式サイトからダウンロード Godot Engineの公式サイトのダウンロードページから安定版をダウンロードします。 Zipファイルなので任意のパスに解凍し、godot_[バージョン]_stable_win.exeを起動します。 ! 当サイトではGodot Engine 4.xを基準にリファレンスを掲載しています。 3.xをインストールした場合、若干内容に差異があるかもしれません。 Issuesでご連絡いただけましたら、対応を検討いたしますので、お気軽にご連絡ください。 その他のプラットフォームからダウンロード Steam Godot Engineをインストールする方法はいくつかありますが、手軽なのはSteamからのダウンロード・インストールです。 常に安定版を配信しており、自動的にアップデートを行うことができます。 Steamの製品ページにアクセスし、無料でダウンロードしてください。 以降は自分のライブラリから起動できます。 itch.io itch.ioからも無料ダウンロードが可能です。 itch.ioのデスクトップアプリを入れると、最新版の自動ダウンロードやアプリの管理も可能です。 プロジェクトの作成 プロジェクトマネージャー 起動直後はプロジェクトマネージャーが開きます。 新規プロジェクトの作成 プロジェクトマネージャーの右側にある、新規プロジェクトのボタンを押すとプロジェクト作成画面がポップアップします。 設定 説明 プロジェクト名 プロジェクトの名前を入力します。隣の「フォルダーを作成」をクリックすると、プロジェクト名と同じフォルダが、プロジェクトパスに作成されます。 プロジェクトパス プロジェクトを作るファイルパスです。何らかのファイルが含まれていると警告が出ます。 レンダラー プロジェクトのレンダリング方式を選択します。PCなどはForward+、モバイルはMobileを選択します。 Version Control Metadata バージョン管理方法を選択します。バージョン管理しない場合はGitのままで問題ありません。 メインシーンの作成 メインシーンとは、作成したプロジェクトで最初に実行される画面のことです。 3Dの空間や2Dの画面・GUIなども含めるため、Godot Engineではこれらをまとめてシーンと呼びます。 シーンパネルから作成 画面左上にあるシーンと書かれたパネルから、ルートノードを生成します。 ルートノードは、そのシーンの一番上の根幹となるノードです。 作成したシーンは自動的にエディタで開かれますが、まだ保存されていません。 シーンを作成した時点で保存しておくことをおすすめします。 開いたシーンを保存する 「未保存」のシーンを開いている状態でCtrl+Sで保存パネルを開き、任意のフォルダに保存します。 ファイルシステムパネルから作成 画面右下にあるファイルシステムと書かれたパネルは、プロジェクトのファイルやフォルダを表示しています。 任意のフォルダ（ルートフォルダはres://）を右クリックすることで、シーンを作成することができます。 ファイルシステムから作成した場合は、ファイルが保存されるだけで、自動的にシーンを開いてはくれません。 作成したシーンファイル（.tscnファイル）をダブルクリックして開いてください。 メインシーンの設定 作成したシーンをメインシーンとして設定します。 保存したシーンファイル（.tscnファイル）を。ファイルシステムパネルから右クリックします。 右クリックメニューの中から「メインシーンとして設定」をクリックすると、選んだシーンが最初に実行されるようになります。"
        },
        {
          title: "GDScriptの基本",
          url: "https://godot-jp.github.io/reference/gdscript%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/gdscript%E3%81%AE%E5%9F%BA%E6%9C%AC/", 
          body: "GDScriptの基本 Godot Engineの組み込みスクリプト言語であるGDScriptの基本的な使い方について記載します。 基本的な記述方法 extends Node var int_sanple = 0 var text_sample = \u0026#34;文字列\u0026#34; var int_sample2 :int = 1 func _ready(): pass GDSCriptは、大まかに３種類の要素で読み書きすることができます。 上記のサンプルを１行ずつ解説します。 クラスの拡張 extends Node extends NodeはNodeというクラスの拡張という意味です。 Nodeクラスが持つ機能をそのままに、新しいクラスを作ることになります。 変数 var int_sample = 0 var text_sample = \u0026#34;文字列\u0026#34; GDScriptは静的型付けの機能を持っています。 多くの言語は型を明示的に指定する必要がありますが、GDScriptは自動的に型を割り付けます。 これによりユーザーは型をあまり意識せずにプログラムを書くことができます。 明示的な型付け var int_sample2 :int = 1 型を意識したい場合もありますので、上記のように明示的に型を指定することもできます。 関数 func _ready(): pass GDScriptの関数はfuncにスペースを空けて関数名を記述します。 多くの言語のように{ }でブロックを作るのではなく、:のあとのインデントでブロックを作る構文になります。 関数にはクラスがもともと持っている組み込み関数と、ユーザーが作る独自関数の２種類があります。"
        },
        {
          title: "数値について",
          url: "https://godot-jp.github.io/reference/gdscript%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E6%95%B0%E5%80%A4%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/", 
          body: "数値について 数値の基本 数値の型は、主にint型とfloat型になります。 単純に言えば、intは整数で、floatは小数点のある数字（実数）です。 int型の場合、64bitの数値として、-9223372036854775807 〜 9223372036854775807までの数値を扱う事ができます。 float型の場合、エンジン内の関数などでは32bitの浮動小数点値を使用しています。 これは10進数の6桁になりますので、大きな数字を表現する場合はint型として処理するほうが良いと思います。 数値の作成方法 数値を作成するには数値リテラルを使用します。 整数の作成 var value0 :int = 1 var value1 :int = -1 # 静的型付け var value2 = 1 実数の作成 var value0 :float = 1.0 var value1 :float = -1.0 # 静的型付け var value2 = 1.0 数値に変換する方法 別の型を数値に変換（キャスト）する関数が用意されています。 intクラスメソッド メソッド名 説明 int(bool) bool型をint型に変換します。trueなら1に、falseなら0に変換します。 int(float) float型をint型に変換します。端数は切り捨てられますので、例えば2.7の場合は2に、-0.7の場合は0になります。 int(String) 有効なString型をint型に変換します。すべて無効な文字列は無視され0が返されます。例えば\u0026quot;test1\u0026quot;の場合は1に、\u0026quot;1e3\u0026quot;の場合は13になります。 floatクラスメソッド メソッド名 説明 float(bool) bool型をfloat型に変換します。trueなら1.0に、falseなら0.0に変換します。 float(int) int型をfloat型に変換します。1の場合は1.0に変換されます。 float(String) 有効なString型をfloat型に変換します。このメソッドはfloat文字列（\u0026quot;0.72\u0026quot;など）や指数表記文字列を受け入れるため、1e3の場合は1000.0になります。（1e3 = 1×10の3乗 = 1000）それまで解析した結果を返して処理を終了するため、1e3a2の場合は1000.0となり、後半のa2は無効となります。 特殊な数値の表し方 2進整数（int型） 0と1で表す2進数ですが、Godot Engineでは、最終的にint型として扱われます。 例えば0101という二進整数の場合、0b0101と記述することができ、これを出力すると5になります。 逆に、5を二進整数で表すと0b0101になりますので、明示的な型の変換は必要はなく、整数を二進整数として演算することが可能です。 二進整数（ビット）演算については別のページで詳しく解説します。 16進整数（int型） 0～Fまでの1桁が0~15まである数値です。Godot Engineでは、最終的にint型として扱われます。 例えばFFFという16進整数の場合、0xFFFと記述することができ、これを出力すると4095になります。 数値の計算 数値は演算子を使って計算することができます。 算術演算子 # 加算（足し算） var value1:int = 3 + 2 # value = 5 # 減算（引き算） var value2:int = 3 - 2 # value = 1 # 乗算（掛け算） var value2:int = 3 * 2 # value = 6 # 除算（割り算） var value2:float = 3.0 / 2.0 # value = 1.5 # 剰余（余り） var value2:int = 3 % 2 # value = 1 複合代入演算子 var value:float = 3.0 value += 2.0 # =5.0 加算 value -= 2.0 # =1.0 減算 value *= 2.0 # =6.0 乗算 value /= 2.0 # =1.5 除算 # 以下はint型のみ var value:int = 3 value %= 2 # =1　剰余"
        },
        {
          title: "文字列について",
          url: "https://godot-jp.github.io/reference/gdscript%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E6%96%87%E5%AD%97%E5%88%97%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/", 
          body: "文字列について 文字列の基本 文字列は非常に単純なデータ型であり、コピーオンライトという方式が取られています。 参照渡しができない型の場合、他の変数に渡すとすぐに複製されますが、Godot Engineの場合、渡された時点では参照渡しであり、変更があった場合に複製されます。 つまり、変更がない場合は複製されないのでメモリの節約になります。 また、Godot Engineでは文字列を加工するメソッドが多数用意されています。 文字コードについて Godot EngineはUnicodeをサポートしています。 文字列の作成方法 文字列を作成するには、文字列リテラルを使用し、ダブルクォーテーション\u0026quot;\u0026quot;でくくります。 var value :String = \u0026#34;あいうえお\u0026#34; # あいうえお 文字列の中でダブルクォーテーションを使う 文字列リテラルでダブルクォーテーションを使用しているため、文字列内にダブルクォーテーションを使用することができません。 その場合、エスケープ文字を使い、\\\u0026quot;と記述します。 var value :String = \u0026#34;\\\u0026#34;かきくけこ\\\u0026#34;\u0026#34; # \u0026#34;かきくけこ\u0026#34; 他の型を文字列に変換する ほとんどの型をStringに変換することができますが、Stringクラスで変換するわけではありません。 String(100)などとするとエラーが出ます。 str(100) var_to_str(100) 文字列の処理 文字列を連結する 連結演算子+または+=を使用して、複数の文字列を連結します。 var value :String = \u0026#34;あいう\u0026#34; + \u0026#34;え\u0026#34; # あいうえ value += \u0026#34;お\u0026#34; # あいうえお 他の型と文字列を連結する 他の型と連結する場合は、どちらも文字列に揃える必要があります。 var value :String = \u0026#34;あいうえお\u0026#34; value += str(100) print(value) # あいうえお100 文字列同士を比較する 文字列が同じかどうかを比較する場合、==等価演算子を使用することができます。 var value = \u0026#34;あいう\u0026#34; == \u0026#34;あいう\u0026#34; # true また、文字コードの大小を、\u0026lt;または\u0026gt;の比較演算子を使用することで判別できます。 var value1 = \u0026#34;あ\u0026#34; \u0026lt; \u0026#34;い\u0026#34; # true var value2 = \u0026#34;う\u0026#34; \u0026lt; \u0026#34;い\u0026#34; # false 文字列を数える 文字列を数えるメソッドをご紹介します。 文字列の長さを数える var value = \u0026#34;あいうえお\u0026#34; print(value.length()) # 5 文字列の出現回数を数える var value = \u0026#34;ねこねここねこ\u0026#34; print(value.count(\u0026#34;こ\u0026#34;)) # 4 文字列の途中から、または途中までなどの範囲で探すことも可能です。 var value = \u0026#34;ねこねここねこ\u0026#34; print(value.count(\u0026#34;こ\u0026#34;, 2, 5)) # 2 上記の例だと、最初の「ね」は0文字目と扱い、2文字目から5文字目までなので、 「ねこねここねこ」の範囲になります。 文字列を調べる 文字列が空か調べる var value1 = \u0026#34;あいうえお\u0026#34; print(value1.empty()) # false var value2 = \u0026#34;\u0026#34; print(value2.empty()) # true 文字列が特定の文字で始まるか調べる var value = \u0026#34;あいうえお\u0026#34; print(value.begin_with(\u0026#34;あ\u0026#34;)) # true print(value.begin_with(\u0026#34;お\u0026#34;)) # false 文字列が特定の文字で終わるか調べる var value = \u0026#34;あいうえお\u0026#34; print(value.extends_with(\u0026#34;あ\u0026#34;)) # false print(value.extends_with(\u0026#34;お\u0026#34;)) # true 文字列を加工する フォーマットを設定する（簡易版） var value1:String = \u0026#34;あいう%s\u0026#34; print(value1 % \u0026#34;えお\u0026#34;) # あいうえお var value2:String = \u0026#34;%sいうえ%s\u0026#34; print(value2 % [\u0026#34;あ\u0026#34;, \u0026#34;お\u0026#34;]) # あいうえお フォーマットを設定する（formatメソッド使用） var value:String = \u0026#34;かきく{str}\u0026#34; print(value.format({\u0026#34;str\u0026#34;: \u0026#34;けこ\u0026#34;})) # かきくけこ format()を使用すると、辞書に定義されたキーとペアになった文字列に置換されます。 例えば、リッチテキストを使用することを前提として、メッセージ内に画像を表示させるタグに置き換えることも可能です。 var dict :Dictionary = {\u0026#34;Aボタン画像\u0026#34;,\u0026#34;[img]{res://icon.png}[/img]\u0026#34;} var value :String = \u0026#34;{Aボタン画像}ボタン\u0026#34; $RichTextLabel.bbcode_text = value.format(value, dict) # 🅰️ボタン 指定の桁以下ならゼロで埋める 最終的に文字列に変換されますが、変換元は数値を扱います。 print(\u0026#34;%010d\u0026#34; % 555) # 0000000555 print(\u0026#34;%05d\u0026#34; % 555) # 00555"
        },
        {
          title: "入力機能について",
          url: "https://godot-jp.github.io/reference/%E5%85%A5%E5%8A%9B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E5%85%A5%E5%8A%9B%E6%A9%9F%E8%83%BD%E3%81%AE%E5%9F%BA%E6%9C%AC/", 
          body: "入力機能について プロジェクトの入力マップ設定 Godot Engineはインプットマップとしてプロジェクト毎に入力の管理ができます。 インプットマップは、アクション名を設定し、そのアクションに、どの入力を割り当てるかという考え方になります。 デバイスからの入力を設定する プロジェクト設定からインプットマップタブを開きます。 デフォルトで設定されているアクションは非表示になっています。 アクション名の設定 インプットマップタブの上部にあるテキストボックスに、アクション名を入力して「追加」ボタンを押します。 今回はJumpと入力しました。 アクション（Action）のリストの中に、作成したJumpが登録されます。 アクションに入力を設定する 設定したアクションの項目の右側の「＋」ボタンを押します。 キーを設定するEvent Configurationウィンドウがポップアップします。 このウィンドウが開いた状態で、キーボードのキーやゲームパッドのボタンを押すと自動的に入力されます。 ウィンドウ中央のリストから、マウス・キーボード・ゲームパッドなどのボタンを選択することも可能です。 例えば、マウスはこのウィンドウの設定に使用するため、自動での入力は反応しないため、リストから選択する必要があります。 開発段階でゲームパッドがつながっていなくても、リストから選択することで設定自体は可能です。 一つのアクションに対して複数の入力を割り当てる事が可能なため、キーボードとゲームパッドの両方で対応する場合も、アクション名を参照することで、設定されたすべての入力の状態を調べることができます。 すべてのアクションの登録が終わったら、プロジェクト設定ウィンドウを閉じます。 デッドゾーンについて キーボードやマウスと異なり、ゲームパッドはスティックのアナログ入力があります。 アナログ入力の利点は、スティックを倒す量を0.0~1.0の値で表現し、操作性が柔軟になることです。 欠点は、デッドゾーンを設定しない場合、スティックの値が安定しないことです。 これは物理的なスティックの倒す量を取っている事から、ブレが発生するためです。 例えばデッドゾーンを0.2に設定すると、0.2未満の値はすべて0とみなされます。 これにより、不安定なアナログ入力のブレを制限することができます。 基本的な入力の取得方法 プロジェクトにアクションマップが登録されたので、実際に入力を処理するサンプルを記載します。 インプットメソッドで入力を処理する func _input(_event): if _event.is_action_just_pressed(\u0026#34;Jump\u0026#34;): print(\u0026#34;ジャンプボタンが押された\u0026#34;) プロセスメソッドで入力を処理する func _proccess(_delta): if Input.is_action_just_pressed(\u0026#34;Jump\u0026#34;): print(\u0026#34;ジャンプボタンが押された\u0026#34;) InputEventの種類 イベント名 型インデックス 説明 InputEvent NONE 空の入力イベント InputEventKey KEY スキャンコードとUnicodeの値、および修飾子が含まれています。 InputEventMouseButton MOUSE_BUTTON ボタン、モディファイヤなどのクリック情報が含まれます。 InputEventMouseMotion MOUSE_MOTION 相対位置、絶対位置、速度などのモーション情報が含まれます。 InputEventJoypadMotion JOYSTICK_MOTION ジョイスティック/ジョイパッドのアナログ軸情報が含まれています。 InputEventJoypadButton JOYSTICK_BUTTON ジョイスティック/ジョイパッドのボタン情報が含まれます。 InputEventScreenTouch SCREEN_TOUCH マルチタッチのプレス/リリース情報が含まれています。(モバイルデバイスでのみ使用可能) InputEventScreenDrag SCREEN_DRAG マルチタッチドラッグ情報が含まれています。(モバイルデバイスでのみ使用可能) InputEventScreenAction SCREEN_ACTION 汎用アクションが含まれています。これらのイベントは多くの場合、フィードバックとしてプログラマーによって生成されます。(詳細は以下)"
        },
        {
          title: "ゲームパッド入力について",
          url: "https://godot-jp.github.io/reference/%E5%85%A5%E5%8A%9B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%91%E3%83%83%E3%83%89%E5%85%A5%E5%8A%9B%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/", 
          body: "ゲームパッド入力について ゲームパッドとアクションの登録 入力機能についてで解説している通り、Godot Engineではアクションに対して複数の入力を登録することができます。 これにより、コードからはキーボードとゲームパッドの操作を、どちらも同じアクションで参照することができます。 このページでは、ゲームパッドに関連する操作やコードを解説していきます。 ゲームパッドの状態取得 ゲームパッドが認識されているか取得 ゲームパッドがシステムに認識されているかどうかを判別します。 if is_joy_known(0): print(\u0026#34;デバイス0のゲームパッドが正常に認識されています。\u0026#34;) システムが認識している状態であれば、グローバルスコープのJoystickListに定義されたゲームパッドの入力の値を正常に取得できます。 切断・接続の状態を取得する ゲームパッドの接続状態が変わったことを通知するシグナルがあります。 func _ready(): Input.joy_connection_changed.connect(_on_joy_connection_changed) func _on_joy_connection_changed(device:int, connected:bool): if not connected: print(\u0026#34;デバイス%sのゲームパッドが切断されました\u0026#34; % str(device)) elif connected: print(\u0026#34;デバイス%sのゲームパッドが接続されました\u0026#34; % str(device)) ゲームパッドの入力取得 スティックの傾きを取得 各アクションにゲームパッドの左スティックの上下左右方向をmove_right, move_left, move_up, move_downとして定義し、以下のようにアクションから方向を取得します。 var value :Vector2 = Input.get_vector(\u0026#34;move_right\u0026#34;, \u0026#34;move_left\u0026#34;, \u0026#34;move_up\u0026#34;, \u0026#34;move_down\u0026#34;) print(str(value)) # [-1.0, -1.0] ~ [0, 0] ~ [1.0, 1.0] ボタン入力を取得 通常はis_action_pressed()などを使用してアクションでの入力判定を行うことがほとんどですが、ゲームパッドのボタン入力を個別に取得したい場合は以下のように取得できます。 if Input.is_joy_button_pressed(0, JOY_DS_A): print(\u0026#34;Nintendo規格のAボタンに値するボタンが押されている\u0026#34;) グローバルスコープのJoystickListに定義されたゲームパッドの入力の値を第2引数に指定します。 ジャイロスコープセンサーの取得 ! 現在標準のエンジンの機能として、iOS・Android以外のジャイロスコープセンサーの取得はできないようです。 GDExtensionなどの拡張で取得することは可能です。 ゲームパッドへの命令 バイブレーションの設定 start_joy_vibration(デバイス, 弱振動値, 強振動値, 振動時間)で設定します。 ゲームパッドのバイブレーションは2個のモーターがあり、それぞれのモーターの強さを0-1の値で設定することができます。 これらの振動値を動的に変更する場合はstart_joy_vibration()メソッドを変化の回数分実行することで実装可能です。 振動時間は0を設定することで、無限に振動しようとします。 すべてのデバイスが長時間振動できるわけではありませんので、長時間振動させたい場合は、繰り返し実行します。 # バイブレーションフラグ var is_vibrate:bool = true func _process(_delta): if get_joy_vibration_duration(0) =\u0026lt; 0 and is_vibrate: start_joy_vibration(0, 0.4, 0.2) # バイブレーション開始 elif get_joy_vibration_duration(0) \u0026gt; 1000.0: is_vibrate = false stop_joy_vibration(0) # バイブレーションを止める"
        },
        {
          title: "Controlノードについて",
          url: "https://godot-jp.github.io/reference/gui%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/control%E3%83%8E%E3%83%BC%E3%83%89%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/", 
          body: "Controlノードについて Godot EngineのControlノードはGUI（グラフィカルユーザーインターフェース）を作成する機能になります。 もちろん、同じCanvasItemを継承するNode2DでもGUIを作ることは可能ですが、レスポンシブなレイアウト機能や自動的なフォーカス機能などを持っているため、独自のプログラムを組まずともGodot Engineのエディタで簡単にデザインができる事が特徴です。 また、翻訳を設定していると自動的にノードに含まれたテキストを翻訳したり、テーマを設定することができます。 概念 基点とアンカー まず、アンカーとは、画面または親のControlノードの基準となる位置です。 アンカーには、上下左右の4点の設定があり、これらはあくまでも相対的な割合になります。 例えば、左上にアンカーがある場合は、画面（または親のControlノード）の左上から0の相対的な位置を示します。 上記の例で言うと、Left：0, Top：0と共にRight：0, Bottom：0になっているのがわかります。 それぞれ、0~1の間で、画面または親のControlノードの左上を基準とした位置の割合になります。 つまり、Left:0, Top:0, Right:1, Bottom:1は画面全体となります。 アンカーの設定方法 Godot Engine 4.0からアンカーは自動的に設定しやすくなりました。 Controlノードを選択して、エディタビューポートの上部のメニューから、アンカーの設定をワンクリックで設定できるようになっています。 細かな調整をする場合は、前項までの設定を個別にする必要がありますが、多くの場合はプリセットで対応可能かと思います。 機能 翻訳 ! 翻訳については別ページで詳しく説明しますが、この項目ではControlノードが持つ翻訳についての機能のみを取り上げます。 Controlノードを継承するノードすべてに翻訳するかどうかのプロパティが設定されています（デフォルトはauto_translate: true） 例えば、ButtonやLabelなどのテキストが表示されているノードの文字を翻訳するかどうかのプロパティになります。 翻訳データが無い場合は、デフォルトの言語が使われるため、基本的には意識しなくても問題ありません。 ただし翻訳データが存在している場合、ノードに使用されている文言を翻訳すると自動的に置き換わりますので、翻訳キーには注意が必要です。 フォーカス Controlノードは、tabキーや上下左右キー（対応するゲームパッドの方向キーなど）を押した際に自動的にフォーカスする機能を持っています。 例えば、複数のボタンを方向キーで選択することができます。 ただし、画面上のフォーカスができるすべてのノードを自動的に選んで選択するため、画面レイアウトによっては明示的にフォーカス機能を一時的にオフにする などの対応が必要になります。 var btn:Button = $Button func _ready(): # フォーカスを無効にする btn.focus_mode = Control.FOCUS_NONE # フォーカスを有効にする btn.focus_mode = Control.FOCUS_ALL # マウスクリックのみのフォーカスを受け付ける btn.focus_mode = Control.FOCUS_CLICK マウスクリック制限とスルー Controlノードはレイアウトとして複数重なる事が多く起こります。 例えば、ボタンとウィンドウはどちらもControlノードで重なっていることが多いですし、さらにそのウィンドウのうらには別のウィンドウが表示されている場合もあります。 こういった場合に、ボタンをクリックすると、後ろにあるボタンも反応してしまう または、あえて反応させたい というシチュエーションがあります。 これらの挙動もいくつかのプロパティが用意されています。 クリックの深さ ControlノードのインスペクタからMouseセクションのFilterに設定があります。 GDScriptでは以下のようになります。 var btn:Button = $Button func _ready(): btn.mouse_filter = Control.MOUSE_FILTER_STOP btn.mouse_filter = Control.MOUSE_FILTER_PASS btn.mouse_filter = Control.MOUSE_FILTER_IGNORE タイプ 説明 MOUSE_FILTER_STOP クリックされたControlノードでクリックの影響を止めます。 MOUSE_FILTER_PASS クリックされたControlノードよりも後ろにあるノードもクリックの影響を受けます。 MOUSE_FILTER_IGNORE クリックされたControlノードはクリックを無視します（影響は止まりません） テーマ Controlノードにはテーマ（Theme）を設定することができます。 テーマは複数のスタイルの管理リソースで、ButtonやPanelなど、グラフィカルな要素のスタイルを個別に設定し、そのテーマが設定されたControlノードと、その子ノードすべてに反映されます。 Type Variation テーマと関連するType Variationは、Webで言うところのCSSのClassのようなものです。 テーマの中で定義したIDのスタイルを、個別のノードでIDを指定することで、定義されたスタイルを適用することができます。 ! より詳しい情報はテーマとスタイルについてを参照してください。"
        },
        {
          title: "画面レイアウトについて",
          url: "https://godot-jp.github.io/reference/gui%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E7%94%BB%E9%9D%A2%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/", 
          body: "画面レイアウトについて Containerノードの基本 Container（コンテナ）ノードは、子ノードとしてコンテンツを持つことを前提としたノードです。 子ノードであるコンテンツを自動的にレイアウトすることを目的とした機能を持っています。 継承元のContainerノード自体はControlノードとほとんど機能は変わりませんので、単体で使用することはありません。 基本的にはContianerを継承している以下で紹介するノードの拡張のために準備された機能を持っています。 コンテンツのレイアウト設定 基本的にContainerの子ノードであるコンテンツはそれぞれの機能に応じて、自動的に大きさが決定され配置されます。 これは基本的に、コンテンツ自体のサイズやレイアウトを自由に決めることができないことを意味します。 ただし、コンテンツごとのContainer Sizingで、コンテナ内でのサイズの設定を変更することができます。 これらはControlノードのレイアウト設定なので、Controlノードについてを参照してください。 単一コンテナ 単一コンテナはコンテンツを自動的にレイアウトしませんが、単一のコンテンツに対するレイアウトの設定を行うことができます。 パネルを作る PanelContainerは目に見えてわかりやすいコンテナです。 グラフィックが設定できるという以外は、基本のContainerノード（Controlノード）と同じ機能になります。 panelのプロパティを持っていますので、テーマでスタイルを設定することができ、ウィンドウやヘッダー・フッターなどの下地に活用できます。 テーマとスタイルについては、テーマとスタイルについてを参照してください。 コンテンツのアスペクト比を固定する AspectContainerは、自身のサイズが変わっても、コンテンツの縦横比を変えずにコンテンツを拡大・縮小して表示します。 その際、縦を基準とするか横を基準とするかを設定することができます。 コンテンツのマージンを空ける MarginContainerはconstantsプロパティで、上下左右のマージンをピクセル単位で設定することができるコンテナです。 コンテナ内のコンテンツに対し、それぞれのマージンを設定することができます。 コンテンツをコンテナの縦横中央に配置する CenterContainerは、コンテンツを親であるCenterContainerの縦横中央に配置します。 親コンテナはコンテンツの大きさが最小の大きさになります。 コンテンツをスクロールする ScrollContainerは、コンテンツをスクロールします。 親コンテナからはみ出したコンテンツはクリッピングされます。 整列コンテナ 整列コンテナは複数のコンテンツを自動的にレイアウトするコンテナです。 例えば、ゲームのインベントリや、設定画面の項目を並べるような場合に活用できます。 縦並び・横並びにする VBoxContainerまたはHBoxContainerは、複数のコンテンツを自動的に縦または横に並べて配置します。 コンテナのサイズよりも、コンテンツの合計サイズが大きくなる場合ははみ出して表示されます。 設定された個数分のコンテンツを順番に並べる GridContainerは、Columnsプロパティで設定された個数分のコンテンツを並べ、その個数を超えたら次の行に並べます。 もしも並んだコンテンツの横幅が、親のコンテナであるGridContainerの横幅を超えた場合であっても、必ず並べるのが特徴です。 コンテンツの大きさに応じて並べる FlowContainerは、コンテンツの大きさに応じて自動的に並べ、GridContainerのように詰めて表示します。 親のコンテナであるFlowContainerの幅に応じて、収まりきらないコンテンツは次の行または列にカラム落ちします。 My PR for implementing FlowContainers(H/V) got merged today! This type of container arranges its child nodes similar to text and autowraps the ones which don\u0026#39;t fit in a line.#GodotEngine pic.twitter.com/BJhORGiunm \u0026mdash; Geometror (@Hendrik_Brucker) January 18, 2022 コンテンツ同士のマージンを空ける 上記で紹介した整列コンテナのTheme OverrideにはConstantsプロパティが設定されており、複数配置されたコンテンツ同士の上下左右のマージンを設定することができます。"
        },
];