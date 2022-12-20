const addNotesButton = document.getElementById("add-notes");
const inputTitle = document.getElementById('title');
const displayNotesSection = document.getElementById('notes')

// addNoteButton onClick
addNotesButton.addEventListener('click', () => {
// step 1 - get the value entered by the user

// step 2 - create an HTML tag for displaying the notes
    const newNotesTiltle = document.createElement('p');

    const deleteNoteButton = document.createElement('button')

// step 3 - add the value that the user entered to the new tag
    newNotesTiltle.innerText = inputTitle.value;
  
// step 4 - append the created notes tag into display section    
    displayNotesSection.appendChild(newNotesTiltle);
})