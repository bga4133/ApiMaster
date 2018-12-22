let xhr = new XMLHttpRequest();
 xhr.open('POST', 'http://reservashoteleras2.azurewebsites.net/Api/Auth2/login');
 xhr.setRequestHeader('Content-Type', 'application/json');
 xhr.onprogress = () => {
   console.log('cargando');
 }
 xhr.onload = () => {
     if (xhr.status === 200) {
         let response = JSON.parse(xhr.responseText);
         console.log(response);
            let session = response.data.Session,
            token =  response.data.access_Token;
            console.log(session,token);
            sessionStorage.setItem('vl1',session);
            sessionStorage.setItem('vl2',token);
     }
 }
 xhr.send(JSON.stringify({
   "Login": "Ahumadaladmin",
   "Password":"lahumada123456%"
 }))
const data  = (inputCulture,inputPage,inputCity,inputDay,inputMonth,inputYear,inputNights,inputRooms,inputAdult,inputChildren,inputName,inputLname,inputEmail,inputDocument,inputBirthdate,inputLogin,inputPass) =>{   
//  let inputs= [...document.querySelectorAll('[name=data]')],
//  values =  inputs.map(val => val.value);
// api reservation
    let reservation = new XMLHttpRequest();
        console.log(sessionStorage.getItem('vl2'),sessionStorage.getItem('vl1'));
        reservation.open('POST', 'http://reservashoteleras2.azurewebsites.net/Api/Search/List');
        reservation.setRequestHeader('Content-Type', 'application/json');
        reservation.setRequestHeader('X-SESSION',sessionStorage.getItem('vl1'));
        reservation.setRequestHeader('Authorization',sessionStorage.getItem('vl2'));
        sessionStorage.clear('vl1');
        sessionStorage.clear('vl2');
        reservation.onprogress = () => {
        console.log('cargando');
        }
        reservation.onload = () => {
            if (reservation.status === 200) {
                let response = JSON.parse(reservation.responseText);
                console.log(response);
            }
        }
        reservation.send(JSON.stringify({
            "culture":inputCulture, "pageNumber":inputPage,"cityId":inputCity,"day":inputDay,"month":inputMonth,"year":inputYear,"nights":inputNights,"rooms":inputRooms,"adult":inputAdult,"children":inputChildren
        }))
        // login app
        let loginApp = new XMLHttpRequest();
        console.log(sessionStorage.getItem('vl2'),sessionStorage.getItem('vl1'));
        loginApp.open('POST', 'http://reservashoteleras2.azurewebsites.net/Api/Auth2/Login');
        loginApp.setRequestHeader('Content-Type', 'application/json');
        loginApp.setRequestHeader('X-SESSION',sessionStorage.getItem('vl1'));
        loginApp.setRequestHeader('Authorization',sessionStorage.getItem('vl2'));
        sessionStorage.clear('vl1');
        sessionStorage.clear('vl2');
        loginApp.onprogress = () => {
        console.log('cargando');
        }
        loginApp.onload = () => {
            if (loginApp.status === 200) {
                let response = JSON.parse(loginApp.responseText);
                console.log(response);
            }
        }
        loginApp.send(JSON.stringify({
            // "Login": "luisgabrielahumada2@gmail.com",
            // "Password":"732014631"
            "Login":inputLogin,"Password":inputPass
        }))
    }   
    // fin api reservation
    const getDataValue = () => {
        let inputCulture= document.getElementById('culture').value,
        inputPage = document.getElementById('page').value,
        inputCity = document.getElementById('city').value,
        inputDay = document.getElementById('day').value,
        inputMonth = document.getElementById('month').value,
        inputYear = document.getElementById('year').value,
        inputNights = document.getElementById('nights').value,
        inputRooms = document.getElementById('rooms').value,
        inputAdult = document.getElementById('adult').value,
        inputChildren = document.getElementById('children').value;
        return {inputCulture,inputPage,inputCity,inputDay,inputMonth,inputYear,inputNights,inputRooms,inputAdult,inputChildren};
    }
    const getEvent = () => {
        document.getElementById("button-click").addEventListener("click",() => {
            console.log(getDataValue());
            let object = getDataValue();
            data(object.inputCulture,object.inputPage,object.inputCity,object.inputDay,object.inputMonth,object.inputYear,object.inputNights,object.inputRooms,object.inputAdult,object.inputChildren);
    });
    }
        // login getdata
        const getDatalogin = () =>{
            let inputLogin = document.getElementById('login').value,
            inputPass = document.getElementById('pass').value;
            return {inputLogin,inputPass};
        }
            const  eventClick = () =>{
            document.getElementById("button-login").addEventListener("click",() => {
                console.log(getDatalogin());
                let object = getDatalogin();
                data(object.inputLogin,object.inputPass);
            });
        }
        if(document.getElementById("button-click")){getEvent();}
        if(document.getElementById("button-login")){eventClick();}
    // api signUp
    // let xhr3 = new XMLHttpRequest();
    // console.log(sessionStorage.getItem('vl2'),sessionStorage.getItem('vl1'));
    // xhr3.open('POST', 'http://reservashoteleras2.azurewebsites.net/Api/Search/AddCustomer');
    // xhr3.setRequestHeader('Content-Type', 'application/json');
    // xhr3.setRequestHeader('X-SESSION',sessionStorage.getItem('vl1'));
    // xhr3.setRequestHeader('Authorization',sessionStorage.getItem('vl2'));
    // sessionStorage.clear('vl1');
    // sessionStorage.clear('vl2');
    // xhr3.onprogress = () => {
    // console.log('cargando');
    // }
    // xhr3.onload = () => {
    //     if (xhr3.status === 200) {
    //         let response = JSON.parse(xhr3.responseText);
    //         console.log(response);
    //     }
    // }
    // xhr3.send(JSON.stringify({
    //     "firstname":"Brayan","lastname":"Garcia","email":"bga4133@gmail.com","document":"Nimierda" ,"birthdate":"Que le importa pirob"
    // }))
    // const getDataSignUp = () => {
    //     let inputName = document.getElementById('name').value,
    //     inputLname = document.getElementById('lastname').value,
    //     inputEmail = document.getElementById('email').value,
    //     inputDocument = document.getElementById('document').value,
    //     inputBirthdate = document.getElementById('birthdate').value;
    //     return {inputName,inputLname,inputEmail,inputDocument,inputBirthdate};
    // }
    // const  eventClick = () =>{
    //     document.getElementById("button-click2").addEventListener("click",() => {
    //         console.log(getDataSignUp());
    //         let object = getDataSignUp();
    //         data(object.inputName,object.inputLname,object.inputEmail,object.inputDocument,object.inputBirthdate);
    //     });
    // }
    // if(document.getElementById("button-click2")){
    //     eventClick();
    // }
    