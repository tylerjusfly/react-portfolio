import anyby from './assets/images/projects/anybuyherokuapp.png'
import azure from './assets/images/projects/azurehack.png'
import mds from './assets/images/projects/featured-img.png'

export const profile = [
    {
        "Fullname" : "Tyler. T. Momoh",
        "occupation" : "Software Engineer",
        "twitter" : "https://twitter.com/Tyler_Jusfly",
        "github" : "https://github.com/tylerjusfly",
        "linkedIn" : "https://www.linkedin.com/in/momoh-taiwo/"
    }

]

export const about = {
    "Languages" : "JavaScript,TypeScript",
    "FrameWorks" : "NodeJs, ExpressJs, NestJs, React",
    "Tools" : "MySQL Workbench, Git, Heroku, Netlify, RabbitMQ",
    "DataBase" : "MySQL, PostqreSQL, MongoDB ",
    "OperatingSystem" : "Windows, Linux"
}

export const projects = [
    {
        id : 1,
        summary : "An E-commerce web Application -Paid/Freelance Work",
        href : "https://anyby.herokuapp.com/",
        livesite : "https://anyby.herokuapp.com/",
        image : anyby,
        technologyStack : " CodeIgniter, NodeJs, MySQL, ExpressJs",
        teamSize : 2,
        desc : "Anybuy is my first freelance Project built with expressjs and MySQL for the Backend and the frontend was designed with code igniter."
    },
     {
        id : 2,
        summary : "Food Library App For Azure Hack",
        href : "https://github.com/tylerjusfly/azure-devto-hackathon",
        livesite : "https://food-library-azure.herokuapp.com/",
        image : azure,
        technologyStack : "Javascript, NodeJs, MongoDB, Mongoose, Pug, Bootstrap ",
        teamSize : 1,
        desc : "Food Library is a nodejs, expressJs App, Pug, bootstrap. and it was deployed using the microsoft azure services. implemented the CI/CD with Github. The Functionalities and how to find your way around is in the README.md file. "
    },
    {
        id : 3,
        summary : "Maverick-Digital-Stores",
        href : "https://github.com/tylerjusfly/azure-devto-hackathon",
        livesite : "https://food-library-azure.herokuapp.com/",
        image : mds,
        technologyStack : "React, NodeJs, ExpressJs, SQL ORM - Sequelize ",
        teamSize : 8,
        desc : `Designed database structure, created models, and deployed app on heroku.
         Created the signup and signin logic using JWT, Bcrypt and also implemented refresh token. 
         Collaborated with front-end developers and creating API for them to use and more. `
    }
]