// Id din html

let input_todo = document.getElementById("input_todo");
let item_left = document.getElementById("item_left");
let btn_all = document.getElementById("btn_all");
let btn_active = document.getElementById("btn_active");
let btn_completed = document.getElementById("btn_completed");
let btn_clearCompleted = document.getElementById("btn_clearCompleted");
let container_todo = document.getElementById("container_todo");

//...................................................................



//Functie de drag and drop.
function dragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    e.dataTransfer.setData('application/btnFunction', this.getAttribute('data-function'));
  };
  
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  function dragDrop(e) {
    if (dragSrcEl != this) {
      // Schimbăm conținutul dintre elemente
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
  
      // Restabilim funcționalitatea butonului pe baza informației transferate
      var buttonFunction = e.dataTransfer.getData('application/btnFunction');
      var buttons = this.querySelectorAll('button');
      buttons.forEach(function(button) {
        if (button.getAttribute('data-function') === buttonFunction) {
          button.addEventListener('click', window[buttonFunction]);
        }
      });
    }
    return false;
  }
  


//   function dragDrop(e) {
//     if (dragSrcEl != this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData('text/html');
//       var buttonFunction = e.dataTransfer.getData('application/btnFunction');
//     this.setAttribute('data-function', buttonFunction);
//     }
//     return false;
//   }
  
  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('drop', dragDrop, false);
  
  }


var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});


//Cream elemente 
input_todo.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
      
        addItem();
        input_todo.value = "";
    }
})

function addItem(){
let todo_list_container = document.createElement('div');
let btn_todo_check =  document.createElement('button');
let text_todo_input =  document.createElement('span');
let btn_todo_delete =  document.createElement("button");
btn_todo_delete.setAttribute("id", "btn_todo_delete");

var attr = document.createAttribute('draggable');
todo_list_container.className = 'draggable';
attr.value = 'true';
todo_list_container.setAttributeNode(attr);


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

addEventsDragAndDrop(todo_list_container);


btn_todo_delete.addEventListener("click",(e)=> delet_x(e));

btn_todo_check.addEventListener("click", function(e){
    
    text_todo_input.classList.toggle('complete')
    btn_todo_check.classList.toggle('complete')
})


}

function delet_x(e){
    
    let container = e.target.parentElement;
    container_todo.removeChild(container)};



