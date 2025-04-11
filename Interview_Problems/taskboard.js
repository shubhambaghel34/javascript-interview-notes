// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let tasks=[];
function addTask(title,priority="low"){
    const task={
        id:tasks.length + 1,
        priority:priority.toLocaleLowerCase(),
        title,
        completed:false,
        createdAt:null
    }
    tasks.push(task);
    return task;
}

function filterByPriority(priority){
  return  tasks.find(t => t.priority === priority.toLocaleLowerCase())
}

function completedTask(id){
   const task=tasks.find(t=>t.id === id);
   if(task && !task.completed){
     task.completed=true
     task.createdAt=new Date()
   }
   return task;
}

function filterByCompletedDate(datestr){
return tasks.filter(t=> t.completed && t.createdAt.toISOString().split('T')[0] === datestr)
}


function deleteById(idToDelete) {
    tasks = tasks.filter(item => item.id !== idToDelete);
    console.log(`Deleted task with id ${idToDelete}`);
  }
  
addTask("Task11","high");
addTask("Task33","low");
addTask("Task42","low");


completedTask(1);
// completedTask(2);
const today=new Date().toISOString().split('T')[0];

//console.log("All task",tasks);
//console.log("Complted Today",filterByCompletedDate(today))

//console.log("Complted Today",filterByCompletedDate(today))

console.log("All task",tasks);
console.log("Deleted  Id",deleteById(2))
console.log("All task",tasks);