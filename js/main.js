function init(){

    var config = {
        apiKey: "AIzaSyDGAGkaZ3nHvEEfCQ-JEnpf8pzPEcU_Jpg",
        authDomain: "fir-login-63468.firebaseapp.com",
        databaseURL: "https://fir-login-63468.firebaseio.com",
        projectId: "fir-login-63468",
        storageBucket: "",
        messagingSenderId: "38035329548"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

/* REJESTRACJA */
    let data = [];
    let login = document.getElementById('login')
    let inputPassword = document.getElementById('password')
    let inputName = document.getElementById('name')
    let inputSurname = document.getElementById('surname');
    let addButton = document.querySelector('button');

    function writeUserData() {
        firebase.database().ref('users/' + login.value).set({
          username: inputName.value,
          surname: inputSurname.value,
          password: inputPassword.value,
        });
    }
    

    addButton.addEventListener("click", function(){
        
        writeUserData();
        inputName.value = "";
        inputSurname.value = "";
        inputPassword.value = "";

    });
/*  KONIEC REJESTRACJA */

/* ZALOGUJ */

    let inputLoginVerify = document.getElementById('loginVerify');
    let inputPasswordVerify = document.getElementById('passwordVerify');
    let buttonVerify = document.getElementById('login-btn');
    let dbRef = firebase.database().ref().child('/users');
    
    
    buttonVerify.addEventListener('click', function(){

        dbRef.once('value', data => {
            
            let loginn = inputLoginVerify.value;   

            if ( data.val()[loginn] && inputPasswordVerify.value == data.val()[loginn].password ) {
            
                $('#success').removeClass('hidden');
                $('#fail').addClass('hidden');
                inputLoginVerify.value = "";
                inputPasswordVerify.value = "";

            }else{
                
                $('#success').addClass('hidden');
                $('#fail').removeClass('hidden');
                inputLoginVerify.value = "";
                inputPasswordVerify.value = "";
            };
        
        });
    });
/* KONIEC ZALOGUJ */
    

    
  

}
init();