// Id din html

let input_todo = document.getElementById("input_todo");
let item_left = document.getElementById("item_left");
let btn_all = document.getElementById("btn_all");
let btn_active = document.getElementById("btn_active");
let btn_completed = document.getElementById("btn_completed");
let btn_clearCompleted = document.getElementById("btn_clearCompleted");
let container_todo = document.getElementById("container_todo");
//...................................................................




//Cream elemente 




input_todo.addEventListener("keyup", function(event) {
    
   

    if(event.keyCode === 13){
      
        myFunction();
        input_todo.value = "";
    }
})

function myFunction(){
let todo_list_container = document.createElement('div');
let btn_todo_check =  document.createElement('button');
let text_todo_input =  document.createElement('span');
let btn_todo_delete =  document.createElement("button");
btn_todo_delete.setAttribute("id", "btn_todo_delete");




container_todo.appendChild(todo_list_container);
todo_list_container.appendChild(btn_todo_check);
todo_list_container.appendChild(text_todo_input);
todo_list_container.appendChild(btn_todo_delete);

btn_todo_delete.innerText = "x"
text_todo_input.innerText = input_todo.value

btn_todo_check.classList.add("btn_todo_check")

text_todo_input.classList.add("text_todo_input")
btn_todo_delete.classList.add("btn_todo_delete")
todo_list_container.classList.add("todo_list_container")


btn_todo_delete.addEventListener("click",(e)=> delet_x(e));

btn_todo_check.addEventListener("click", function(e){
    
    text_todo_input.classList.toggle('complete')
    btn_todo_check.classList.toggle('complete')
})







}

function delet_x(e){
    
    let container = e.target.parentElement;
    container_todo.removeChild(container)};



