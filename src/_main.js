// console.log('hoge');
// console.log('hoge');


// // var変数は上書き可能
// var val1 = "var変数"
// console.log(val1);

// val1 = "var変数の上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // let val2 = "let変数は再宣言できない";
// // console.log(val2);

// const val3 = "const定数";
// console.log(val3);

// val3 = "constの上書き";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "ishihara",
//     age: 26
// }
// console.log(val4);

// val4.name = "satoshi"
// val4.age = 27;
// val4.address = "Nagasaki";
// console.log("constで定義したオブジェクトであればプロパティの変更が可能");
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name ="石原";
// const age = 26;

// // 従来の記法
// const messasge1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(messasge1);

// // テンプレート文字列を用いる方法
// const messasge2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(messasge1);

// 従来の関数
// function func1(str) {
//     return str;
// }
// console.log(func1("func1です。"));
// // const func1 = function(str) {
// //     return str;
// // }
// // もできる

// // アロー関数
// const func2 = (str) => {
//     return str;
// }
// const func3 = str => {
//     return str;
// }
// const func4 = str => str;

// // ↑すべて同じ意味

// console.log(func2("func2です。"));

// const func5 = (num1, num2) => ({
//     hoge: num1,
//     fuga: num2
// });

// console.log(func5(1,2));

// const myProfile = {
//     name: "satoshi",
//     age: 26
// }
// // 通常
// const message1 = `名前${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);
// // 分割代入
// const { name, age } = myProfile;
// const message2 = `名前${name}です。年齢は${age}歳です。`
// console.log(message2);


// // 通常
// const myProfile2 = [ "Satoshi", 26 ];
// const message3 = `名前${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`
// // 配列の分割代入
// const [ name1, age1 ] = myProfile2;
// const message4 = `名前${name1}です。年齢は${age1}歳です。`
// console.log(message3);


// const sayHello = (name) => console.log(`こんにちは！${name}さん!`);
// sayHello("satoshi");
// sayHello(); //undefinedと表示されてしまう。

// const sayHello2 = (name = "ゲスト") => console.log(`こんにちは！${name}さん!`);
// sayHello2("satoshi");
// sayHello2(); //ゲストと表示される。


// const myProfile = {
//     age: 26
// }

// nameはundefinedと表示される 
// const { age, name } = myProfile;
// console.log(age);
// console.log(name);

// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記法
// // オブジェクトのプロパティの名前と代入する変数名が同じ場合、以下のように書ける
// const name = "satoshi";
// const age = 26;

// const myProfile = {
//     name,
//     age
// }

// console.log(myProfile);

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); //配列展開

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //上と同じ処理になる

// まとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [ num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー,結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //コピー
// const arr7 = [...arr4, ...arr5]; // 複数の配列をつなげる
// console.log(arr6);
// console.log(arr7);

// // これは参照を引き継いでいる。まったく同じ。aar8を上書きすると、arr4も書き換わる。
// const arr8 = arr4;
// console.log(arr8);

// 従来のfor分
const nameArr = ["田中", "山田", "石原"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// mapを使った書き方
// nameArr.map((name) => {
//     console.log(name);
// });

// 新しい配列として定義することもできる
// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// nameArr.map((name) => console.log(name));

// mapでindexを使う
// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です。`));


// filter
// return の次に条件を書く
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 == 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//     if(name == "石原") {
//         return name;
//     } else {
//         return `${name}さん`
//     }
// });
// console.log(newNameArr);

// 三項演算子
// [条件式] ? [tureの時] : [falseの時]
// const val1 = 1 > 0 ? "trueです" : "falseです"
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); // toLocaleStringメソッドは、数値をカンマ区切りで表示する

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum); 

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100超過" : "許容範囲内";
// }

// console.log(checkSum(40, 300));

// 論理演算子の本当の意味を知ろう && ||

// truthy falsyについて(暗黙的にtrueかfalseに判定される)
// "ABC" 0 10 undefined null false NaN "" [] {}
// const val = "ABC"
// console.log({} ? "truethyです" : "falseyです");

const flag1 = true;
const flag2 = false;

// || は左がtrueの時その時点で値を返却する.左がfalseの時右を返却する
const num = 0;
const fee = num || "金額は未設定です";
console.log(fee); //numがfalseyなので、"金額は未設定です"が*返却される*

// && は左がfalseの時,その時点で値を返却する.左がtrueの時は右を返却する
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

