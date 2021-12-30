var todoInp = document.getElementById('todoinp')
var showList = document.getElementById('showList')


function todoApp(){
    var todoText = todoInp.value
    var textNode = document.createTextNode(todoText)
    var todoLi = document.createElement('li')
    showList.appendChild(todoLi)
    todoLi.appendChild(textNode)



    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('onclick','deletedTodo(this)')
    var deleteTextNode = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteTextNode)
    todoLi.appendChild(deleteBtn)

    var editBtn = document.createElement('button')
    editBtn.setAttribute('onclick','editedTodo(this)')
    var editTextNode = document.createTextNode('edit')
    editBtn.appendChild(editTextNode)
    todoLi.appendChild(editBtn)

    todoInp.value = ''


}
function deletedTodo(element){
    element.parentNode.remove()
}

function editedTodo(element){
    element.parentNode.firstChild.nodeValue = prompt("Edit text", element.parentNode.firstChild.nodeValue  )
}

function deleteAll(){
    showList.innerHTML = ""
}