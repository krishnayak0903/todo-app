📝 TODO Application

A simple Command Line TODO Application built with Node.js.
It allows users to add, view, and delete tasks. Tasks are stored locally in a task.json file.

🚀 Features

Add new tasks

View all tasks

Delete tasks by task number

Store tasks permanently in task.json

Simple command-line interface

🛠️ Technologies Used

Node.js

JavaScript

File System (fs)

Readline (readline)

JSON

📁 Project Structure
todo-app/
│
├── index.js
├── task.json
└── README.md

▶️ How to Run
1. Clone or download the project

Open the project folder in your terminal.

2. Run the application
node index.js


The application will show the following menu:

========= TODO Application ==========

1. Add Task
2. View Task
3. Delete Task
4. Exit

Choose an option:

📌 How to Use
Add Task

Select option 1 and enter your task.

Choose an option : 1
Enter Task : Learn Node.js
task added succesfully

View Tasks

Select option 2 to see all saved tasks.

1 Learn Node.js
2 Build TODO App

Delete Task

Select option 3, then enter the task number you want to delete.

tasks:
1 Learn Node.js
2 Build TODO App

enter task num to delete: 2
task deleted succesfully

Exit

Select option 4 to exit the application.

💾 Data Storage

Tasks are stored in task.json.

Example:

[
  {
    "task": "Learn Node.js",
    "done": false
  },
  {
    "task": "Build TODO App",
    "done": false
  }
]


If task.json does not exist, the application automatically creates it.

📄 License

This project is created for learning and practice purposes.
