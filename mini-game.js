'use strict';
const messageJS = document.getElementById('message'); // メッセージ切り替え用
const getGuess = document.getElementById('getGuess'); // 入力した答え
const guessButton = document.getElementById('guessButton'); // 予想ボタン
const resetButton = document.getElementById('resetButton'); // リセットボタン
const historyList = document.getElementById("historyList"); // 入力履歴
//let answer = 1; // テスト用

// 1~100までの答えランダム生成
let answer = Math.floor(Math.random() * 100) + 1; 
// 正解かどうか確認関数 function
  function checkAnswer() {
   const guess = Number(getGuess.value) // 入力した答えの入れもの
 
   // 1~100以外の数字や文字をはじいて終了させる
   if(!Number.isInteger(guess) || guess < 1 || guess > 100) {
     messageJS.textContent = "1~100の整数を入力してください"; // messageJS のテキストを上書きする
     return
   }
   // 正解の判定
   let result = "";
   if (guess === answer) { // 回答 = 答え
     messageJS.textContent = '正解！'
     result = "正解！"
     guessButton.disabled = true // ボタン名(ID) 無効 真(ON) = ボタン無効化をONにする
     getGuess.disabled = true; // 答え入力欄 無効 真(ON) = 答え入力無効化をONにする

   } else if (guess < answer) { // 回答 < 答え
    messageJS.textContent = "もっと大きい数字です"
    result = "もっと大きい";
   } else { // 回答 > 答え
    messageJS.textContent = "もっと小さい数字です"
    result = "もっと小さい";
   }
    // 履歴に追加
    const listItem = document.createElement("li");
    listItem.textContent = guess + result
    historyList.appendChild(listItem);
    getGuess.value = "";
    getGuess.focus();

  }
  function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guessButton.disabled = false // ボタン名(ID) 無効 偽(OFF) = ボタン無効化をOFFにする
    getGuess.disabled = false; // 答え入力欄 無効 偽(OFF) = 答え入力無効化をOFFにする
    document.getElementById("historyList").innerHTML = "";
  }
guessButton.addEventListener('click', checkAnswer);
resetButton.addEventListener('click', resetGame);