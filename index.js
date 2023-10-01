//shiftとunshiftは破壊的
// 問題1. push メソッドを使って配列の末尾に要素を追加してみよう
const sports = ["baseball", "football"];
// この下に回答を記述してください
sports.push("golf");
console.log(sports);

// 問題2. 1~10までの連続した数字を配列に追加してみよう
const sequentialNumbers = [];
for (i = 1; i <= 10; i++) {
  // この中に回答を記述してください
  sequentialNumbers.push(i);
}
console.log(sequentialNumbers);

// 問題3. unshift メソッドを使って配列の先頭に要素を追加してみよう
const fruits = ["strawberry", "cherry", "peach"];
// この下に回答を記述してください
fruits.unshift("pineapple");
console.log(fruits);


//popとshiftは破壊的
// 問題1. pop メソッドを使った配列末尾の要素の取り出し
const vegetables = ['tomato', 'potato', 'carrot']
// この下に回答を記述してください
console.log(vegetables.pop())
console.log(vegetables)
// 問題2. shift メソッドを使った、配列最初の要素の取り出し
const numbers = [10, 1, 2, 3]
// この下に回答を記述してください
console.log(numbers.shift())
console.log(numbers)


//sliceメソッドはコピーを作成するので非破壊的
//sliceは開始位置と終了位置
//sliceは配列の中身を抽出するイメージ
const numbers = [1, 2, 3, 10].slice(0, 2)
console.log(numbers) // [1, 2]

//spliceは破壊的
//spliceは開始位置と削除する要素数

//元の配列に変更を加える
//array.splice(開始位置番号, 削除する要素数, 追加する要素1, 追加する要素2, ...追加する要素N)
//spliceは配列から要素を削除するイメージ
const singleNumbers = [1, 3, 5, 7, 9]
singleNumbers.splice(2, 0, 100, 200)

console.log(singleNumbers) // [1, 3, 100, 200, 5, 7, 9]


//forEach()
// 問題1. forEach メソッドを使用し、県名を出力
const prefectures = ['愛知', '福岡', '沖縄']
prefectures.forEach(function (prefecture) {
  console.log(prefecture)
})

// この下に回答を記述してください

// 問題2. forEach メソッドを使用し、インデックス番号を出力
const numbers = [100, 200, 300, 400]

// この下に回答を記述してください
numbers.forEach((number,index) => {
  console.log(index)
})


// ポイント
// * forEachメソッドは、すべての配列要素に対して処理を行い、その結果を取得する
// * mapメソッドは、すべての配列要素に対して処理を行い、その結果を配列として返す
// * filterメソッドは、条件に一致した配列要素をフィルタリングし、その要素のみの配列を返す


//join
//joinメソッドを呼び出した配列の要素を文字列として結合します


//concat
//配列の結合
