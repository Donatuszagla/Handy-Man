document.addEventListener("DOMContentLoaded", () => {
    // Change button color logic
    document.querySelectorAll('.scroll-buttons .change-button-color, .buttons-container .change-button-color').forEach(button => {
        button.addEventListener('click', function () {
            const allButtons = document.querySelectorAll('.scroll-buttons .change-button-color, .buttons-container .change-button-color');
            allButtons.forEach(btn => {
                btn.style.transition = 'background-color 0.5s ease-in-out';
                btn.style.backgroundColor = '#D1E8FF';
            });
            this.style.transition = 'background-color 0.5s ease-in-out';
            this.style.backgroundColor = '#0B1957';
        });
    });

    // Popup logic
    const popup = document.getElementById('popup');
    if (popup) {
        document.querySelectorAll('.employer').forEach(container => {
            container.addEventListener('click', function () {
                popup.style.right = '0';
            });
        });

        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', function () {
                popup.style.right = '-50%';
            });
        }
    }

    // Services button logic
    const servicesButton = document.getElementById('services-button');
    if (servicesButton) {
        servicesButton.addEventListener('click', () => {
            const servicesBody = document.getElementById('services-body');
            if (servicesBody) {
                servicesBody.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Logout button logic
    const logoutButton = document.getElementById('log-out-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            const logout = document.getElementById('log-out');
            if (logout) {
                logout.style.visibility === "hidden" ? logout.style.visibility = "visible" : logout.style.visibility = "hidden";
            }
        });
    }
    // About company button logic
    const aboutCompany = document.getElementById("company-button");
    if (aboutCompany) {
        aboutCompany.addEventListener('click', () => {
            const about = document.getElementById("about-company");
            if (about) {
                about.style.right = "38%";
                about.style.top = "60px";
                about.style.visibility === "hidden" ? about.style.visibility = "visible" : about.style.visibility = "hidden";
            }
        });
    }


    // Progress ring logic
    const circle = document.querySelector('.progress-ring__circle circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference - (0 / 100) * circumference;

        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            const progressText = document.querySelector('.progress-ring__text');
            if (progressText) {
                progressText.textContent = `${percent}%`;
            }
        }

        setProgress(75); // Example: Set progress to 75%
    }

    // Month dropdown logic
    const selectElement = document.getElementById("months");
    if (selectElement) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        months.forEach((month, index) => {
            const option = document.createElement("option");
            option.value = index + 1; // Month number (1-12)
            option.text = month; // Month name
            selectElement.appendChild(option);
        });
    }
});