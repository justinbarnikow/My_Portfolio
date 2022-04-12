
export const ProjectSlideshowData = [
    {
        title: 'TravelPod 2.0',
        subtitle: 'TravelPod is a React app that finds you the perfect-length podcast for the duration of your driving trip.',
        image: require('../Images/TravelPod2.PNG'),
        first_info: 'To use TravelPod, fill in the starting and ending destinations address, as well as a keyboard or phrase for the podcast. The podcasts displayed will all be of a similar length to the travel time between destinations (ie 90 minute travel time, 85-95 minute podcasts).',
        second_info: 'TravelPod utilizes three separate APIs to function properly. It uses Mapbox Geocoding to convert the addresses to GPS coordinates, Bing Distance Matrix to calculate the travel time, and Listennotes to display the podcasts that are within the given duration.',
        link: "https://travelpod.vercel.app/",
        languages: 'Languages: HTML, CSS, JavaScript & jQuery'
    },
    {
        title: 'Recipod', 
        subtitle: 'Recipod is a React app that finds you the perfect-length podcast for the recipe of your choice.',
        image: require('../Images/recipod.png'),
        first_info: 'To use Recipod, enter a phrase or keyword into the searchbar and the results will be listed. Select the recipe and podcast of your choosing, and they will both be displayed at the final results page. Select ‘reset’ to restart at a previous point in the app.',
        second_info: 'Recipod makes use of the Edamame API and Listennotes API for the recipe and podcast databases. When a podcast is searched, all of the listings will be based on the length of the recipe you chose, so that they accurately match in the length of time.',
        link: "https://recipod.vercel.app/",
        languages: 'Languages: HTML, CSS & JavaScript'
    },
    {   
        title: 'Weathernaut',
        subtitle: 'Weathernaut is a React app that allows you to search weather data using a valid US zip code.',
        image: require('../Images/weathernaut.png'),
        first_info: 'To use Weathernaut, enter a zip code into the searchbar and the results will be displayed. Weathernaut creates a list of the searches you make, instead of only displaying one city at a time. To delete a city, click the trash can on the corresponding card.',
        second_info: 'Weathernaut makes use of the Openweathermap API for current weather data. The data is fetched in the main class component, held as state, and passed through context to children components. ',
        link: "https://weathernaut-4rns4dyyx-justinbarnikow.vercel.app/",
        languages: 'Languages: HTML, CSS & JavaScript'
    },
    {
        title: 'Noted',
        subtitle: 'Noted is a React app made up of cards and lists, mocking some of the functions of a Trello-like app.',
        image: require('../Images/noted.png'),
        first_info: 'Noted allows you to have as many lists and cards as you’d like. You can create and delete them at your will, double-click to change their titles and content, and prioritize them by highlighting the ‘star’ and ‘watch’ icons. ',
        second_info: 'Noted does not use any APIs, but does store data in state and makes use of ‘useState’ quite a bit to display and hide certain sections on the app.',
        link: 'https://noted-jb.vercel.app/',
        languages: 'Languages: HTML, CSS & JavaScript'
    },
    {
        title: 'Pac-Man',
        subtitle: 'The Pac-Man quiz is a basic, 5-question quiz app based on the classic Pac-Man game.',
        image: require('../Images/pacman.png'),
        first_info: 'Answer the Pac-Man based quiz to the best of your ability. If you choose incorrectly, the correct answer will be displayed and you can continue to the next question. Your results will be tracked as you go along the quiz, and you will be given a final score at the end.',
        second_info: 'This app uses jQuery to create many of its functions and effects. All of the HTML is in one single file, as well as all of the JavaScript. This was the first project I ever made during my boot camp.',
        link: "https://justinbarnikow.github.io/pacman/",
        languages: 'Languages: HTML, CSS & JavaScript'
    },
    {
        title: 'TravelPod 1.0',
        subtitle: 'TravelPod is an app that finds you the perfect-length podcast for the duration of your driving trip.',
        image: require('../Images/travel_pod.png'),
        first_info: 'To use TravelPod, fill in the starting and ending destinations address, as well as a keyboard or phrase for the podcast. The podcasts displayed will all be of a similar length to the travel time between destinations (ie 90 minute travel time, 85-95 minute podcasts).',
        second_info: 'TravelPod utilizes three separate APIs to function properly. It uses Mapbox Geocoding to convert the addresses to GPS coordinates, Bing Distance Matrix to calculate the travel time, and Listennotes to display the podcasts that are within the given duration.',
        link: "https://justinbarnikow.github.io/travelpod/",
        languages: 'Languages: HTML, CSS, JavaScript & jQuery'
    }
]