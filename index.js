let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

// Function to fetch weather details from API and display them
let getWeather = async () => {
    let cityValue = cityRef.value.trim();

    // If input field is empty
    if (cityValue.length === 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=95e6ab70508cdca2207878e70d805207&units=metric`;
    cityRef.value = "";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            console.log(data);

            // Display current weather and forecast
            result.innerHTML = `
                <h2>${data.name}</h2>
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
                <h1>${Math.round(data.main.temp)} &#176;C</h1>
                <div class="temp-container">
                    <div>
                        <h4 class="title">Min</h4>
                        <h4 class="temp">${Math.round(data.main.temp_min)}&#176;C</h4>
                    </div>
                    <div>
                        <h4 class="title">Max</h4>
                        <h4 class="temp">${Math.round(data.main.temp_max)}&#176;C</h4>
                    </div>
                </div>
                <div class="additional-info">
                    <h4>Humidity: ${data.main.humidity}%</h4>
                    <h4 id="wind">Wind Speed: ${data.wind.speed} m/s</h4>
                </div>
            `;
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        result.innerHTML = `<h3 class="msg">${error.message}</h3>`;
    }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
cityRef.addEventListener("keydown",() =>{
    if(event.key === 'Enter'){
        getWeather();
    }
}
)

document.addEventListener('DOMContentLoaded', () => {
    const homeMenuItem = document.querySelector('#ul li:nth-child(1)'); // Assuming the first item is "home"
    const weatherMenuItem = document.querySelector('#ul li:nth-child(2)'); // Assuming the second item is "weather"
    const contactsMenuItem = document.querySelector('#ul li:nth-child(3)'); // Assuming the third item is "contacts"
    const wrapper = document.querySelector('.wrapper');

    homeMenuItem.addEventListener('click', () => {
        alert('You are there');
    });

    weatherMenuItem.addEventListener('click', () => {
        wrapper.classList.add('highlight');

        // Remove the class after the animation ends to allow re-triggering
        wrapper.addEventListener('animationend', () => {
            wrapper.classList.remove('highlight');
        }, { once: true });
    });

    contactsMenuItem.addEventListener('click', () => {
        displayComingSoonMessage();
    });

    // Function to display a "Coming Soon" message in the DOM
    function displayComingSoonMessage() {
        const existingMessage = document.querySelector('.coming-soon-message');
        if (!existingMessage) {
            const message = document.createElement('div');
            message.textContent = 'Coming Soon';
            message.className = 'coming-soon-message';
            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 3000); // Remove the message after 3 seconds
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const homeMenuItem = document.querySelector('#ul li:nth-child(1)'); // Assuming the first item is "home"
    const weatherMenuItem = document.querySelector('#ul li:nth-child(2)'); // Assuming the second item is "weather"
    const contactsMenuItem = document.querySelector('#ul li:nth-child(3)'); // Assuming the third item is "contacts"
    const wrapper = document.querySelector('.wrapper');
    const contacts = document.querySelector('.contact');

    homeMenuItem.addEventListener('click', () => {
        alert('You are there');
    });

    weatherMenuItem.addEventListener('click', () => {
        // Scroll to the wrapper div
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add highlight class for animation
        wrapper.classList.add('highlight');

        // Remove the class after the animation ends to allow re-triggering
        wrapper.addEventListener('animationend', () => {
            wrapper.classList.remove('highlight');
        }, { once: true });
    });

    contactsMenuItem.addEventListener('click', () => {
        contacts.scrollIntoView({ behavior: 'smooth', block: 'start' });
        wrapper.classList.add('highlight');
        // Alternatively, you can insert a message into the DOM:
        // displayComingSoonMessage();
    });

    // Function to display a "Coming Soon" message in the DOM
    function displayComingSoonMessage() {
        const existingMessage = document.querySelector('.coming-soon-message');
        if (!existingMessage) {
            const message = document.createElement('div');
            message.textContent = 'Coming Soon';
            message.className = 'coming-soon-message';
            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 3000); // Remove the message after 3 seconds
        }
    }
});
