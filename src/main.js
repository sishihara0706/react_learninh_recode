//import "src/style.css"

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liの生成
    const li = document.createElement("li");
    console.log(li);
    
    // divの生成
    const div = document.createElement("div");
    div.className = "list-row";
    console.log(div);

    // pの生成
    const p = document.createElement("p");
    p.className = "todo-item";
    // console.log(p);
    
    p.innerText = inputText;
    
    // button（完了）の生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    
    // button（削除）の生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    
    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);

    
}

document.getElementById("add-button").addEventListener("click", onClickAdd);