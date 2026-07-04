const fs = require('fs');
const rawData = fs.readFileSync('mockData.json', 'utf-8');

const user = JSON.parse(rawData);
console.log(user[0].name);

const activeUser = user.filter(u => u.status === 'active');
console.log(activeUser.length);
//convert json array back into formatted json 
const formattedData = JSON.stringify(activeUser, null, 2);
console.log(formattedData);
fs.writeFileSync('active-user.json', formattedData);
const inactiveUserEmail = user.filter(user => user.status === 'inactive').map(user => ({name:user.name,
    email:user.email
}));
const formattedEmailList = JSON.stringify(inactiveUserEmail, null, 1);
console.log(formattedEmailList);
fs.writeFileSync('inactive-user-emailList.txt',formattedEmailList)
