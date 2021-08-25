const createManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.getId()}</li>
                <li class="list-group-item"><a href= mailto:${manager.getEmail()}>${manager.getEmail()} </a></li>
                <li class="list-group-item">${manager.getOfficeNumber()}</li>
            </ul>
    </div>
    `
}

const createEngineer = (engineer) => {
    //use for each 
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">${engineer.getName()}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item"><a href= mailto:${engineer.getEmail()}>${engineer.getEmail()} </a></li>
            <li class="list-group-item"><a href=https://github.com/${engineer.getGithub()} target=_blank >${engineer.getGithub()} </a> </li>
        </ul>
</div>
    `
}
const createIntern = (intern) => {
    //use for each 
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">${intern.getName()}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.getId()}</li>
            <li class="list-group-item"><a href= mailto:${intern.getEmail()}>${intern.getEmail()} </a></li>
            <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
</div>
    `
}

module.exports = templateData => {
    console.log('this is templatedata', templateData)
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

    console.log(htmlCards);
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body> 
        <header>
            <div class="text-center align-center">
                <h1 class="page-title text-center text-secondary py-2 px-3"> MYTEAM!! </h1>
            </div>
        </header>

        <main class="contaier py-5">
            ${htmlCards}
        </main>

    </body>
    </html>
    
    `;

}