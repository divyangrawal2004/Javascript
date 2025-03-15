let users = JSON.parse(localStorage.getItem("users")) || [];


const registerUser = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let obj = {
        id : Math.floor(Math.random() * 100000),
        name: name,
        email: email,
        password: password

    }

    if(name == "" || email == "" || password == ""){
        alert("Please fill all the fields");
        return;

    }
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html";
    
}

const loginUser = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let checkuser = users.find ((val) => {
        return val.email == email && val.password == password
    })

    if(email == "" || password == ""){
        alert("Please fill all the fields");
        return;

    }
    if(checkuser){
        alert("Login successfully");
        // Swal.fire({
        //     title: "Good Luck successfully login !!!",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   });

        localStorage.setItem("checkuserlogin", JSON.stringify(checkuser));   
        window.location.href = "./index.html";
        // setTimeout (() => {
        //      window.location.href = "./index.html";
        // },2000)
        
       
    }
    else{
        alert("User not found");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        
    }
}



