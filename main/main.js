"use strict";
const data = [];
const record = (param) => {
    data.push(param);
    console.log('Record: ' + param + ' added!');
    setTimeout(() => {
        const index = data.indexOf(param);
        if (index > -1) {
            data.splice(index, 1);
            console.log('Record: ' + param + ' removed!');
        }
    }, 10000);
};
record("Test1");
record("Test2");
function printFunc(str) {
    str = 'Your string: ' + str;
    function addSubStr(name) {
        console.log(str);
        console.log("Your name: ", name);
    }
    return addSubStr;
}
const func = printFunc("My string");
func("Alex");
