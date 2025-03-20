document.querySelectorAll('.scroll-buttons .change-button-color').forEach(button => {
    button.addEventListener('click', function (){
        let all_buttons = document.querySelectorAll('.scroll-buttons .change-button-color')
        all_buttons.forEach(btn => {
            btn.style.transition = 'background-color 1s ease-in-out';
            btn.style.backgroundColor = '#D1E8FF'; 
        });
        this.style.transition = 'background-color 1s ease-in-out';
        this.style.backgroundColor = '#0B1957';
    })
});
document.querySelectorAll('.buttons-container .change-button-color').forEach(button => {
    button.addEventListener('click', function (){
        let all_buttons = document.querySelectorAll('.buttons-container .change-button-color')
        all_buttons.forEach(btn => {
            btn.style.transition = 'background-color 0.5s ease-in-out';
            btn.style.backgroundColor = '#D1E8FF'; 
        });
        this.style.transition = 'background-color 0.5s ease-in-out';
        this.style.backgroundColor = '#0B1957';
    })
});

document.querySelectorAll('.employer').forEach(container => {
    container.addEventListener('click', function () {
        document.getElementById('popup').style.right = '0';
    })
});
document.getElementById('services-button').addEventListener('click', () =>{
    document.getElementById('services-body').scrollIntoView({ behavior: 'smooth', block: 'start' })
});

document.getElementById("log-out-button").addEventListener("click", () =>{
    const logout = document.getElementById("log-out");
    logout.style.visibility === "hidden" ? logout.style.visibility = "visible" : logout.style.visibility = "hidden" ;
});

document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('popup').style.right = '-50%';
});

    const circle = document.querySelector('.progress-ring__circle circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Initialize the circle with 20% progress
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - (0 / 100) * circumference;

    // Function to update the progress
    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      document.querySelector('.progress-ring__text').textContent = `${percent}%`;
    }

    // Example: Update progress to 75% after 2 seconds

    setProgress(75);

// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
    
// Get the select element
const selectElement = document.getElementById("months");
    
// Add each month as an option
months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1; // Month number (1-12)
    option.text = month; // Month name
    selectElement.appendChild(option);
});




