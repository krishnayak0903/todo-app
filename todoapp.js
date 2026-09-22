import fs, { readFileSync } from "fs";
import readline from "readline";

const FILE = "task.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadtasks = () => {
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data);
};

const savetask = (tasks) => {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
};

const showmenu = () => {
  console.log("\n========= TODO Application ==========\n");
  console.log("1. Add Task");
  console.log("2. View Task");
  console.log("3. Delete Task");
  console.log("4.Exit\n");
  rl.question("Choose an option :", handlemenu);
};

function handlemenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter Task :", (task) => {
        const tasks = loadtasks();
        tasks.push({ task, done: false });
        savetask(tasks);
        console.log("task added succesfully");
        showmenu();
      });
      break;

    case "2":
      const tasks = loadtasks();
      if (tasks.length === 0) {
        console.log("no Task found ");
      } else {
        tasks.forEach((t, index) => {
          console.log(`${index + 1} ${t.task}`);
        });
      }
      showmenu();
      break;

    case "3":
        const alltasks= loadtasks();
        if (alltasks.length  === 0) {
            console.log("no Task found to delete");
            showmenu();
            return;
          }

          console.log("tasks:");
          alltasks.forEach((t,index)=>{
              console.log(`${index+1}${t.task}`)
          }); 
            
              rl.question("enter task num to delete",(num)=>{
                  const index = parseInt(num)-1;
                  if(index>=0 && index<alltasks.length ){
                      alltasks.splice(index,1);
                      savetask(alltasks);
                      console.log("task deleted succesfully")
                  }
                  else{
                      console.log("ivalid task num")
                  }
                  showmenu()
              })
              break;
              
            case "4":
                console.log("existing...");
                
            
        default:
            console.log("invalid option try again ");
            showmenu();
            rl.close();
  }
}
showmenu();