const data: string[] = [];

const record = (param: string) => {
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


function printFunc(str : string){
    str = 'Your string: ' + str;
    function addSubStr(name : string){
        console.log(str);
        console.log("Your name: ", name);
    }
    return addSubStr;
}

const func = printFunc("My string");
func("Alex");
