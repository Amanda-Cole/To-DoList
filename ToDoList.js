
// setup textBox that receives input,addbutton that adds to todo List, and container shows previous input
const textBox = document.querySelector('#text-box');
const addButton = document.querySelector('#add-button');
const listContainer = document.querySelector('.list-container');


addButton.addEventListener('click', ()=>{
    try{
        if(textBox.value.trim() === '')
        {
            throw new Error("Input not right");
        }

        //create div add class todo-item-container
        const todoItemContainer = document.createElement('div');
        todoItemContainer.classList.add('todo-item-container');

        //add the todo-item-container to the list container
        listContainer.appendChild(todoItemContainer);

        //create p element add id = todo-text
        const todoText = document.createElement('p');
        todoText.id = 'todo-text';
        todoText.innerText = textBox.value;
        todoItemContainer.appendChild(todoText);
        //add double click to todoText
        todoText.addEventListener('dblclick', ()=>{
            todoText.classList.add('line-through');
            editButton.setAttribute("disabled","disabled")
        });

        //create edit button add i = edit-button, add to todoText in todoItemContainer
        const editButton = document.createElement('button');
        editButton.id = 'edit-button';
        //create img add to button
        const editImage = document.createElement('img');
        editImage.src = 'edit-colored.png';
        editButton.appendChild(editImage);
        todoItemContainer.appendChild(editButton);
        //add click event to edit button
        editButton.addEventListener('click', ()=>{
            textBox.value = todoText.innerText;
            const parent = editButton.parentElement;
            parent.parentElement.removeChild(parent);
        });

        //create delete button
        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
        //create img add to button
        const deleteImage = document.createElement('img');
        deleteImage.src = 'delete-colored.png';
        deleteButton.appendChild(deleteImage);
        todoItemContainer.appendChild(deleteButton);

        deleteButton.addEventListener('click', ()=>{
            const parent = deleteButton.parentElement;
            parent.parentElement.removeChild(parent);
        });
        //clear textBox after Button Click
        textBox.value = "";
        //cursor active in text box
        textBox.focus();
    }
    catch (error) {
        alert("Must input a valid item")
        console.error('An error occurred:', error.message);
    

    }
});