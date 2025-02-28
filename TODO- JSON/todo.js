let arr = [];

const checkTask = () => {
    localTasks = JSON.parse(localStorage.getItem('task'));
    if (localTasks) {
        arr = localTasks;
    }

    showtask();
}
const showtask = () => {
    let tbl = "";
    arr.map((val) => {
        tbl += `
        <tr>
            <td>${val.taskid}</td>
            <td>${val.taskname}</td>
            <td><button class = "btn btn-danger btn-sm" onclick = "deleteTask (${val.taskid})">Delete</button></td>
            <td><button class = "btn btn-danger btn-sm" onclick = "editTask ('${val.taskid}','${val.taskname}')">Edit</button><br><br>
            
             <select id='status_${val.taskid}' onchange='changeStatus(${val.taskid})' class='form-control' w-25>
                                <option value=''>---select status---</option>
                                <option value='success'>success</option>
                                <option value='pending'>pending</option>
                                <option value='cancel'>cancel</option>

                            </select>
            </td>
            <td>
                `
        if (val.status == "pending") {
            tbl += `<p style= 'color:orange'> ${val.status}</p>`
        } else if (val.status == "cancel") {
            tbl += `<p style = 'color:red'>${val.status}</p>`
        } else if (val.status == "success") {
            tbl += `<p style = 'color:green'>${val.status}</p>`
        }
        tbl +=
            `           
            </td>
        </tr>
        `
    })
    document.getElementById(`viewtask`).innerHTML = tbl;
}

const addTask = () => {
    let task = document.getElementById(`Task`).value;

    if (task == "") {
        alert(`Plzzz add task..`)
        return;
    }

    let dublicate = arr.some((value) => value.taskname === task)
    if (dublicate) {
        alert("task is allready added , plzz enter any other task");
        document.getElementById(`Task`).value = "";
        return
    }

    let obj = {
        taskname: task,
        taskid: Math.floor(Math.random() * 1000000)
    }

    arr.push(obj);

    localStorage.setItem(`task`, JSON.stringify(arr));
    let recover = JSON.parse(localStorage.getItem('task'))

    document.getElementById('Task').value = ""
    showtask()
}

const clearTask = () => {
    localStorage.removeItem('task');
    arr = [];
    showtask();
}

const deleteTask = (taskid) => {
    arr = arr.filter((val) => {
        return val.taskid != taskid;
    })
    localStorage.setItem('task', JSON.stringify(arr));
    showtask();
}
window.onload = checkTask();


const editTask = (taskid, taskname) => {
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block";

    document.getElementById("Task").value = taskname;
    document.getElementById("edit").setAttribute("data-id", taskid);
};

const updateTask = () => {
    let updatedTask = document.getElementById("Task").value;
    let taskid = document.getElementById("edit").getAttribute("data-id");

    if (updatedTask === "") {
        alert("Please enter a task.");
        return;
    }

    arr = arr.map((val) => {
        if (val.taskid == taskid) {
            return { taskid: val.taskid, taskname: updatedTask };
        }
        return val;
    });

    localStorage.setItem("task", JSON.stringify(arr));
    document.getElementById("Task").value = "";
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
    showtask();
};

const changeStatus = (id) => {
    let status = document.getElementById(`status_${id}`).value;
    if (status) {
        arr = arr.map((val) => {
            if (val.taskid == id) {
                val.status = status
            }
            return val;
        })
        localStorage.setItem("task", JSON.stringify(arr));
        showtask();
    }
}
