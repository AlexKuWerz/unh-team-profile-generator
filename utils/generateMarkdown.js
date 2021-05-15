const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateEmployeeCardList(employeesInfo) {
    return `    <ul class="team-members-list">\n${employeesInfo.reduce((list, employeeInfo) => {
        return list += generateEmployeeCard(employeeInfo);
    }, '')}    </ul>`;
}

function generateEmployeeCard(employeeInfo) {
    const id = employeeInfo.getId() ?? '';
    const name = employeeInfo.getName() ?? '';
    const role = employeeInfo.getRole() ?? '';
    const email = employeeInfo.getEmail() ?? '';
    const icon = employeeInfo.getIcon() ?? '';

    const officeNumber = employeeInfo instanceof Manager ? employeeInfo.getOfficeNumber() : undefined;
    const github = employeeInfo instanceof Engineer ? employeeInfo.getGithub() : undefined;
    const school = employeeInfo instanceof Intern ? employeeInfo.getSchool() : undefined;

    return `        <li class="team-member-card">
            <div class="card-header">
                <h2 class="name">${name}</h2>
                <p class="job-title">${icon}${role}</p>
            </div>
            <div class="card-body">
                <ul class="info-list">
                    <li class="info-item">
                        <span class="label">ID:</span>
                        <span class="info">${id}</span>
                    </li>
                    <li class="info-item">
                        <span class="label">Email:</span>
                        <span class="info">${generateEmailLink(email)}</span>
                    </li>${officeNumber ? `\n                    <li class="info-item">
                        <span class="label">Office number:</span>
                        <span class="info">${officeNumber}</span>
                    </li>` : ''}${github ? `\n                    <li class="info-item">
                        <span class="label">GitHub:</span>
                        <span class="info">${generateGithubLink(github)}</span>
                    </li>` : ''}${school ? `\n                    <li class="info-item">
                        <span class="label">School:</span>
                        <span class="info">${school}</span>
                    </li>` : ''}
                </ul>
            </div>
        </li>\n`;
}

function generateEmailLink(email) {
    return `<a href="mailto:${email}" rel="noopener">${email}</a>`;
}

function generateGithubLink(githubUser) {
    return `<a href="https://github.com/${githubUser}" target="_blank" rel="noopener">${githubUser}</a>`;
}

function generateMarkdown(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../src/assets/css/reset.css">
    <link rel="stylesheet" href="../src/assets/css/style.css">
</head>
<body>
    <h1 class="header">My Team</h1>
${generateEmployeeCardList(data)}
</body>
</html>
`;
}

module.exports = generateMarkdown;