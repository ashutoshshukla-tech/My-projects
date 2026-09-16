const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");


// Add note
addNoteBtn.addEventListener("click", function () {

    const title = noteTitle.value.trim();
    const text = noteText.value.trim();

    if (title === "" || text === "") {
        alert("Please enter both title and note.");
        return;
    }

    // Create note
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
        <button class="deleteBtn">Delete</button>
    `;

    // Add note to container
    notesContainer.appendChild(note);

    // Clear input fields
    noteTitle.value = "";
    noteText.value = "";

    // Delete note
    const deleteBtn = note.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {
        note.remove();
    });
});