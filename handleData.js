const colors = require("colors");
const fs = require("fs");
const handleData = (type, tittle) => {
    const data = fs.readFileSync("data.json");
    let tasks = JSON.parse(data);
    if (type === 1 || type === 2) {
        isExisted = tasks.find(task => task.tittle === tittle) ? true : false;
        if (type === 1 && isExisted) {
            return console.log("Takie zadanie już istnieje");
        } else if (type === 2 && !isExisted) {
            return console.log("Nie znaleziono takiego zadania");
        }
    }
    let dataJson = "";
    switch (type) {
        case 1:
            tasks = tasks.map((el, index) => ({
                id: index + 1,
                tittle: el.tittle,
            }))
            const id = tasks.length + 1;
            tasks.push({
                id,
                tittle
            });
            dataJson = JSON.stringify(tasks);
            fs.writeFileSync("data.json", dataJson);
            break;
        case 2:
            const index = tasks.findIndex(task => task.tittle === tittle);
            tasks.splice(index, 1);
            tasks = tasks.map((el, index) => ({
                id: index + 1,
                tittle: el.tittle,
            }))
            dataJson = JSON.stringify(tasks);
            fs.writeFileSync("data.json", dataJson);
            break;
        case 3:
            console.log(`Masz ${tasks.length} zadanie/a do zrobienia`);
            tasks.forEach(task => {
                console.log(task.tittle.green)
            })
            break;
    }
};
module.exports = handleData;