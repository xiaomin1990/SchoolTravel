const SSH2Shell = require('ssh2shell');

const commands = [
    'cd /home/ubuntu/project/SchoolTravel',
    'git pull',
    'npm install',
    'pm2 delete schooltravel',
    'pm2 start app.js  --name schooltravel'
]

let host = {
    server: {
        host: "58.87.97.46",
        userName: "ubuntu",
        password: "1qaz_@WSX",
    },
    commands: commands
};

const SSH = new SSH2Shell(host);

SSH.connect(function (sessionText) {
    console.log(sessionText)
});