import react from "../static/react.png";
import pig from "../static/pig.jpg";
import recipe from "../static/recipe.jpg";
import blog from "../static/blog.png";
import hookpractice from "../static/hookpractice.png";
import language from "../static/language.png";
import itemDetails from "../static/itemdetails.png";
import seasons from "../static/seasons.png";
import streams from "../static/streams.png";
import bear from "../static/bear.png";
import resume from "../static/resume.png";
import pictureSearch from "../static/picturesearch.png";
import video from "../static/video.png";
import weight from "../static/weight.png";

const projectCards = [
    {
        title: "Weight Tracker",
        framework: "React, Firebase Authentication, Cloud Firestore, Material-UI",
        desc: "This PWA is meant to be a comprehensive fitness app that tracks nutrition, exercise, and weight, but it is a work in progress, and the only functional aspect is the weight tracking. Currently it allows the user to log in with either their Google account or by creating an account with their email. Then the user can input their weight daily into the Cloud Firestore database and retrieve it whenever they log in.",
        img: weight,
        live: "https://weight-tracker-d90aa.web.app/",
        repo: "https://github.com/victorwlin/fitness"
    },  
    {
        title: "Video Player",
        framework: "React",
        desc: "Using the YouTube API, this app allows the user to search for videos",
        img: video,
        live: "https://victorwlin.github.io/videoplayer",
        repo: "https://github.com/victorwlin/videoplayer"
    },
    {
        title: "Image Search",
        framework: "React",
        desc: "Using the Unsplash API, this app allows the user to search for images and returns the images in a grid",
        img: pictureSearch,
        live: "https://victorwlin.github.io/picsearch",
        repo: "https://github.com/victorwlin/picsearch"
    },
    {
        title: "Portfolio and Resume",
        framework: "React, Material-UI",
        desc: "My portfolio and resume built using React and Material-UI",
        img: resume,
        live: "https://victorwlin.github.io/react-resume/",
        repo: "https://github.com/victorwlin/react-resume"
    },
    {
        title: "Bear with Me",
        framework: "React, Cloud Functions, Nodemailer, Material-UI",
        desc: "A site to host the results of my capital market backtests using the QuantConnect platform",
        img: bear,
        live: "https://bearwithme.web.app/",
        repo: "https://github.com/victorwlin/backtestsite/"
    },
    {
        title: "Forkify",
        framework: "Vanilla JavaScript",
        desc: "App to search for and favorite recipes and create shopping lists for ingredients",
        img: recipe,
        live: "https://victorwlin.github.io/forkify",
        repo: "https://github.com/victorwlin/forkify"
    },
    {
        title: "Pig Game",
        framework: "Vanilla JavaScript",
        desc: "Dice game for two players playing hotseat. It was created primarily to practice DOM manipulation.",
        img: pig,
        live: "https://victorwlin.github.io/piggame",
        repo: "https://github.com/victorwlin/piggame",
    },
    {
        title: "Streaming",
        framework: "React, Redux, OAuth",
        desc: "This is an app for streaming. However a server has not been set up, so the live app is limited to just authentication.",
        img: streams,
        live: "https://victorwlin.github.io/streams",
        repo: "https://github.com/victorwlin/streams"
    },
    {
        title: "Seasons",
        framework: "React",
        desc: "Using the user's geolocation and month, this app displays the current season",
        img: seasons,
        live: "https://victorwlin.github.io/seasons-hooks",
        repo: "https://github.com/victorwlin/seasons-hooks"
    },
    {
        title: "Item Details",
        framework: "React, Redux",
        desc: "This app lists several items and allows the user to click on the item for more details. This app was created to practice Redux.",
        img: itemDetails,
        live: "https://victorwlin.github.io/songs",
        repo: "https://github.com/victorwlin/songs"
    },
    {
        title: "Form with Language Toggle",
        framework: "React",
        desc: "This app generates different login screens for different languages. Please note that the submit button does not do anything.",
        img: language,
        live: "https://victorwlin.github.io/translate/",
        repo: "https://github.com/victorwlin/translate"
    },
    {
        title: "Hook Practice",
        framework: "React",
        desc: "This app allows the user to toggle between two lists. It was created to practice using React hooks.",
        img: hookpractice,
        live: "https://victorwlin.github.io/hooks-simple/",
        repo: "https://github.com/victorwlin/hooks-simple"
    },
    {
        title: "Generic Blog",
        framework: "React, Redux",
        desc: "This app requests blog posts from an API, stores the data in Redux, and renders the results",
        img: blog,
        live: "https://victorwlin.github.io/blog",
        repo: "https://github.com/victorwlin/blog"
    },
];

export default projectCards;