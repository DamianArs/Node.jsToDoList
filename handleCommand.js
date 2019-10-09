const handleData = require('./handleData');
const handleCommand = ({
    add,
    remove,
    list
}) => {
    if (add) {
        if (typeof add !== "string") {
            return console.log("Nie podałeś stringa".red);
        } else {
            console.log("Dodałeś zadanie".green);
        }
        handleData(1, add);
    } else if (remove) {
        if (typeof remove !== "string") {
            return console.log("Nie podałeś stringa");
        } else console.log("Usunąłeś zadanie".green);
        handleData(2, remove);
    } else if (list) {
        console.log("Lista zadań".green);
        handleData(3, null);
    } else console.log("Podałeś złe wartości".red);
};
module.exports = handleCommand;