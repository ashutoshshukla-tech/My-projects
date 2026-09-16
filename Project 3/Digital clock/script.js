function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add 0 before single digit numbers
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = time;

    // Date
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    document.getElementById("date").textContent =
        `${day}/${month}/${year}`;
}

// Update clock immediately
updateClock();

// Update every 1 second
setInterval(updateClock, 1000);