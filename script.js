function addToDo() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const newToDo = document.createElement("div");

    newToDo.innerHTML = `<h4>${title}</h4> <p>${desc}</p> <button class="markAsDone">Mark as done</button>` 

    const toDoList =  document.getElementById("add");
    toDoList.appendChild(newToDo);
    
    const btn = newToDo.querySelector('.markAsDone')
    btn.addEventListener('click', function(){
        newToDo.innerHTML=`<s><h4>${title}</h4> <p>${desc}</p></s>`
    })
}