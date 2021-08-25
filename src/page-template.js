const createManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${manager.getName()}<br><i class="fas fa-mug-hot"> Manager</i></div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href= mailto:${manager.getEmail()}>${manager.getEmail()} </a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
    </div>
    
    `
}

const createEngineer = (engineer) => {
    //use for each 
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${engineer.getName()}<br><i class="fas fa-glasses"> Engineer</i></div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href= mailto:${engineer.getEmail()}>${engineer.getEmail()} </a></li>
            <li class="list-group-item">GitHub: <a href=https://github.com/${engineer.getGithub()} target=_blank >${engineer.getGithub()} </a> </li>
        </ul>
    </div>
    `
}
const createIntern = (intern) => {
    //use for each 
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${intern.getName()}<br><i class="fas fa-user-graduate"> Intern</i></div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href= mailto:${intern.getEmail()}>${intern.getEmail()} </a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    `
}

module.exports = templateData => {
    let htmlCards = [];

    for(var i=0 ; i<templateData.length; i++) {
        if (templateData[i].getRole() === 'Manager'){
            htmlCards.push(createManager(templateData[i]))
        } else if (templateData[i].getRole() === 'Engineer'){
            htmlCards.push(createEngineer(templateData[i]))
        } else {
            htmlCards.push(createIntern(templateData[i]))
        }
    }
    //reming commas
    let newCards = htmlCards.join(' ')
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" 
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css">
    </head>

    <body> 
        <header>
            <div class="text-center align-center">
                <h1 class="page-title text-center text-secondary py-2 px-3"> My Team </h1>
            </div>
        </header>

        <main class="container card-columns">
            ${newCards}
            
        </main>

        <footer class="footer">
            <h6 class="text-dark">&copy; 2021 by George </h3>
        </footer.

    </body>
    </html>
    
    `;

}