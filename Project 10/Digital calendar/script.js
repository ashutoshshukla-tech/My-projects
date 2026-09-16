const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// Current date
let currentDate = new Date();


// Month names
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


// Create calendar
function renderCalendar() {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Show month and year
    monthYear.textContent = monthNames[month] + " " + year;

    // First day of month
    const firstDay = new Date(year, month, 1).getDay();

    // Number of days in month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Clear previous days
    daysContainer.innerHTML = "";


    // Empty spaces before first day
    for (let i = 0; i < firstDay; i++) {

        const emptyDay = document.createElement("div");

        emptyDay.classList.add("empty");

        daysContainer.appendChild(emptyDay);
    }


    // Create dates
    for (let day = 1; day <= totalDays; day++) {

        const dayElement = document.createElement("div");

        dayElement.textContent = day;


        // Highlight today's date
        const today = new Date();

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayElement.classList.add("today");
        }


        daysContainer.appendChild(dayElement);
    }
}


// Previous month
prevBtn.addEventListener("click", function () {

    currentDate.setMonth(currentDate.getMonth() - 1);

    renderCalendar();
});


// Next month
nextBtn.addEventListener("click", function () {

    currentDate.setMonth(currentDate.getMonth() + 1);

    renderCalendar();
});


// Initial calendar
renderCalendar();