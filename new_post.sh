#!/bin/bash

WORK_DIR=`pwd`/content/reference/
sections_arr=()

function color(){
    COLOR=33
    case $1 in
    red)
    COLOR=31;;
    green)
    COLOR=32;;
    blue)
    COLOR=34;;
    esac

    local ESC=$(printf '\033') # \e や \x1b または $'\e' は使用しない
    echo "${ESC}[${COLOR}m${2}${ESC}[m";
}

function new_post(){
    echo どのカテゴリーで記事を作成しますか？
    local n=1
    for cats in "${sections_arr[@]}"; do
        color green "[$n] $(basename ${cats})"
        let n=$n+1
    done
    color red "[0] メニューに戻る"

    read menu

    if [ $menu = "0" ]; then select_mode; fi

    clear
    local cats_path=${sections_arr[menu-1]} 
    echo 「$(basename $cats_path)」に記事を作成します。
    echo 記事の名前を入力してください（記事スラッグになります）
    read post_name

    clear
    echo 以下の内容で記事を作成します。
    echo -----------------------------
    echo カテゴリー：$(basename $cats_path)
    echo ファイルパス：$cats_path/$post_name/index.md
    echo 記事名：$post_name
    echo -----------------------------
    echo よろしいですか？（y/n）
    read confirm

    if [ $confirm = "y" ]; then 
        hugo new $cats_path/$post_name/index.md
    else
        echo 作成しないキャンセル
        select_mode
    fi
}

function new_section(){
    echo カテゴリー名を入力してください。
}

function select_mode(){
    clear
    for dir in `find $WORK_DIR* -maxdepth 0 -type d`;
    do
        sections_arr+=($dir)
    done

    #echo ${sections_arr[@]}

    echo メニューを選んでください。
    color green "[1] 記事を作成"
    color green "[2] セクションを作成"
    color red "[0] 終了"

    read menu

    case $menu in
        0)
            exit ;;
        1)
            clear
            echo 記事を作成します
            new_post;;
        2)
            clear
            echo セクションを作成します
            new_section;;
        *)
            echo 入力エラーです。
            sleep 2
            select_mode;;
    esac
}

select_mode