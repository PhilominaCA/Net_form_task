let formelm = {};
var count = 0;

function onSubm() {
    var pinnum = document.getElementById("pin").value;

    if (document.getElementById("fn").value == "") {
        alert("Please Fill Firstname");
        return false;
    }
    if (document.getElementById("ln").value == "") {

        alert("Please Fill LastName");
        return false;
    }
    if (document.getElementById("ad").value == "") {
        alert("Please Fill Address");
        return false;
    }
    if (document.getElementById("pin").value == "" || isNaN(pinnum)) {
        alert("Enter a Valid Pincode");
        return false;
    }
    if (document.getElementById("fe").checked == false && document.getElementById("ma").checked == false) {
        alert("Choose any Gender");
        return false;
    }
    var chec = document.querySelectorAll('input[type="checkbox"]:checked');
    if (chec.length < 2) {
        alert("Choose atleast two food choices");
        return false;
    }
    if (document.getElementById("st").value == "") {
        alert("Enter your State");
        return false;
    }
    if (document.getElementById("co").value == "") {
        alert("Enter your Country Name");
        return false;
    }
    /*   else if (document.getElementById("pin").value == undefined || isNaN(pinnum)) {
        alert("Enter a Valid Pincode");
        return false;
    } else if (document.getElementById("fe").checked == false && document.getElementById("ma").checked == false) {
        alert("Choose any Gender");
        return false;
    } else if (chec.length < 2) {
        alert("Choose atleast two food choices");
        return false;
    } else if (document.getElementById("st").value == undefined) {
        alert("Enter your State");
        return false;
    } else if (document.getElementById("co").value == undefined) {
        alert("Enter your Country Name");
        return false;
    } */
    var arrf = [];
    arrf.push(document.getElementById("fn").value);
    arrf.push(document.getElementById("ln").value);
    arrf.push(document.getElementById("ad").value);
    document.getElementById("ad").value = "";
    arrf.push(document.getElementById("pin").value);
    if (document.getElementById("fe").checked == true) {
        arrf.push(document.getElementById("fe").value);
    } else if (document.getElementById("ma").checked == true) {
        arrf.push(document.getElementById("ma").value);
    }
    var chec = document.querySelectorAll('input[type="checkbox"]:checked');
    var foo = "";
    for (let i = 0; i < chec.length - 1; i++) {
        if (chec[i].checked == true)
            foo += chec[i].value + ", ";
    }
    //console.log(chec);
    foo += chec[chec.length - 1].value;
    arrf.push(foo);
    arrf.push(document.getElementById("st").value);
    arrf.push(document.getElementById("co").value);
    var txtrest = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < txtrest.length; i++)
        txtrest[i].value = "";

    var checkrest = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < checkrest.length; i++)
        checkrest[i].checked = false;

    var radiorest = document.querySelectorAll('input[type="radio"]:checked');
    for (let i = 0; i < radiorest.length; i++)
        radiorest[i].checked = false;

    formelm.count = arrf;
    console.log(arrf);
    count++;
    var tabrow = document.createElement("tr");
    for (let i = 0; i < arrf.length; i++) {
        var tabata = document.createElement("td");
        tabata.innerText = arrf[i];
        tabrow.appendChild(tabata);
    }
    var abt = document.getElementById("tab");
    abt.appendChild(tabrow);
    console.log(formelm);
    return false;
}