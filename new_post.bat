@echo off
@setlocal enabledelayedexpansion

set base_path=content/reference/

echo [1] 記事を作る
echo [2] カテゴリーを作る
echo [0] 終了

:SelectMenu
set /p make_cat="メニューを選んでください。"

echo %make_cat%

IF 1 EQU %make_cat% (
    echo 記事を作ります
    goto MakePost
) ELSE IF 2 EQU %make_cat% (
    echo カテゴリーを作ります
    goto MakeCategory
) ELSE IF 0 EQU %make_cat% (
    echo 終了します
    goto End
) ELSE (
    goto SelectMenu
)

:MakePost
set counter=0

rem ディレクトリを取得して疑似配列に格納
for /d %%f in (%base_path%*) do (
    set cats[!counter!]=%%f
rem    echo cats[!counter!]に%%fを代入しました。
    set /a counter+=1
)
echo %counter%個のカテゴリーが見つかりました。
echo;

set /a max_count=%counter%-1

set counter=0
for /l %%n in (0,1, %max_count%) do (
    echo !counter!: !cats[%%n]!
    set /a counter+=1
)

:SelectCategory
echo;
set /p category="上記のカテゴリーの番号を選択してください。"

if %category% GTR %max_count% (
    echo 数値が大きすぎます。再度入力してください。
    echo;
    goto SelectCategory
) else (
    if %category% lss 0 (
    echo 数値が小さすぎます。再度入力してください。
    echo;
    goto SelectCategory
    )
)

set create_path=%base_path%!cats[%category%]!/

echo 選んだカテゴリーは!cats[%category%]!です。
echo パスは %create_path% です
echo;

set /p title="記事のタイトルを入力してください。※入力文字列がファイル名になります。"

hugo new %create_path%%title%/index.md
goto End

:MakeCategory
set /p ctitle="カテゴリーのタイトルを入力してください。※入力文字列がカテゴリー名になります。"

hugo new %base_path%%ctitle%/_index.md
goto End

:End

timeout 2
exit