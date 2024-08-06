var Smosa = 10,
    Kachori = 12,
    Vadapav = 60,
    Maggi = 50;
var smosa_q = 0,
    kachori_q = 0,
    vadapav_q = 0,
    maggi_q = 0;
var name = "",
    email = "";
var smosaBill = "",
    kachoriBill = "",
    vadapavBill = "",
    maggiBill = "";
var total_amount = 0;
document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function() {
    document.getElementById("email2").innerHTML = this.value;
});

document.getElementById("mobile").addEventListener("keyup", function() {
    document.getElementById("mobile2").innerHTML = this.value;
});

document.getElementById("smosa").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        smosaBill = "";
        smosa_q = 0;
        showBill();
    } else {
        smosa_q = this.value;
        smosaBill = "<tr><td>Smosa</td><td>Rs. " + Smosa + "</td><td>" + smosa_q + "</td><td>" + Smosa + "x" + smosa_q + " = " + Smosa * smosa_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("kachori").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        kachoriBill = "";
        kachori_q = 0;
        showBill();
    } else {
        kachori_q = this.value;
        kachoriBill = "<tr><td>Kachori</td><td>Rs. " + Kachori + "</td><td>" + kachori_q + "</td><td>" + Kachori + "x" + kachori_q + " = " + Kachori * kachori_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("vadapav").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        vadapavBill = "";
        vadapav_q = 0;
        showBill();
    } else {
        vadapav_q = this.value;
        vadapavBill = "<tr><td>Vadapav</td><td>Rs. " + Vadapav + "</td><td>" + vadapav_q + "</td><td>" + Vadapav + "x" + vadapav_q + " = " + Vadapav * vadapav_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("maggi").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        maggiBill = "";
        maggi_q = 0;
        showBill();
    } else {
        maggi_q = this.value;
        maggiBill = "<tr><td>Maggi</td><td>Rs. " + Maggi + "</td><td>" + maggi_q + "</td><td>" + Vadapav + "x" + maggi_q + " = " + Maggi * maggi_q + "</td></tr>";
        showBill();
    }
});

function showBill() {
    document.getElementById("bill").innerHTML = smosaBill + kachoriBill + vadapavBill + maggiBill;
    document.getElementById("amount").innerHTML = Smosa * smosa_q + Kachori * kachori_q + Vadapav * vadapav_q + Maggi * maggi_q;
}