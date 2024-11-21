
const draggables = document.querySelectorAll('.draggable');
const boardItems = document.querySelectorAll('.board-item');

let draggedElement = null; 


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        draggedElement = e.target; 
        e.dataTransfer.setData('text/plain', ''); 
        e.dataTransfer.effectAllowed = "move";
    });

    draggable.addEventListener('dragend', () => {
        draggedElement = null; // 
    });
});


boardItems.forEach(boardItem => {
    boardItem.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    boardItem.addEventListener('drop', () => {
        if (draggedElement) {
            boardItem.innerHTML = ''; 

            
            const clonedImage = draggedElement.cloneNode(true);
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerHTML = '&times;'; 
            deleteBtn.addEventListener('click', () => {
                boardItem.innerHTML = ''; 
            });

            
            boardItem.appendChild(clonedImage);
            boardItem.appendChild(deleteBtn);
        }
    });
});
