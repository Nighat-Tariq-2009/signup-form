var usersData = [];
var signupBtn = document.getElementById("signUpbtn")
var text = document.querySelector('.text');

signupBtn && signupBtn.addEventListener("click", function () {

      var userName = document.getElementById("name")
      var userEmail = document.getElementById("email")
      var userPassword = document.getElementById("password")


      if (userName.value === "" || userEmail.value === "" || userPassword.value === "") {
        //  alert("Please fill all fields before submitting");
        // sweet alert
        Swal.fire({
          icon: "warning",
          title: "Warning",
          text: "Please fill all fields before submitting!"
      });
  
        return;  // Stop the function if any field is empty
    }
     

  var userObj = {
    name:userName.value,
    email:userEmail.value,
    password:userPassword.value,
  }
  usersData.push(userObj)

  userName.value= ""
  userEmail.value = ""
  userPassword.value = ""

  console.log(usersData);
      localStorage.setItem("users", JSON.stringify(usersData))
        var fetchingData = JSON.parse(localStorage.getItem("users"));
        fetchingData.push(userObj)
// sweet alert
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });

      
        setTimeout(function () {
          location.href = "login.html";
      }, 2000); 

});

 var loginBtn = document.getElementById("login");
 
 loginBtn && loginBtn.addEventListener("click", function(){
  var loginEmail = document.getElementById("loginEmail")
  var loginPassword = document.getElementById("loginPassword")
  var users = JSON.parse(localStorage.getItem("users"))

  var isEmailFound = false;   // To check if email exists
  var isPasswordCorrect = false; // To check if password matches

  for(var user of users){
   if(user.email === loginEmail.value){
    isEmailFound = true; // Email found

    if(user.password === loginPassword.value){
      isPasswordCorrect = true; // Password is also correct
      // sweet alert
      Swal.fire({
        icon: "success",
        title: "Congratulation",
        text: "login successfully!"
    });
    setTimeout(function () {
      location.href = "dashboard.html";
  }, 2000);
    break; // Stop loop when both are correct
    }
    else{
      // sweet alert
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please try again!"
    });
    break;
    }
   }
  }

  if (!isEmailFound) {
      if (loginPassword.value === "") {
        //sweet alert
        Swal.fire({
                icon: "error",
                title: " Email not found password field is empty",
                text: "Please try again!"
            });
      } else {
        // If email is not found, check if the password matches any user
        for(var user of users){
          if(user.password === loginPassword.value){
            isPasswordCorrect = true; // Password is correct but email is wrong
            Swal.fire({
                    icon: "error",
                    title: "Invalid Email",
                    text: "Please try again!"
                });
            break;
          }
        }
      }
 // If neither email nor password are correct
    if (!isEmailFound && !isPasswordCorrect) {
      // alert("Email and password both are incorrect")
      Swal.fire({
              icon: "error",
              title: "Invalid Email & Password",
              text: "Please try again!"
          });
        }

      }
 })
   

 