function firstStep() {
    //đổi lệnh document.write thành print cho ngắn
    function print(msg) {
        document.write(msg);
    }

    //Password = 00000000
    var password = "";
    while (password == null || password == "" || password != "00000000") {
        password = prompt("Password:");
    }

    //Hỏi Nơi Người Dùng Ở
    var region = "";
    while (region == null || region == "") {
        region = prompt("Your Country:");
    }

    //Nhập Tên  
    var name = "";
    var lastname;
    var firstname;
    while (true) {
        if (name == null) {
            name = prompt("Enter Your Full Name:");
        } else {
            var w = [];
            w = name.trim().split(" ");
            if (name == "" || name.includes("0", "1", "2", "3", "4", "5", "6", "7", "8", "9") || !name.includes(" ") || w.length < 2 || w[0] == w[1]) {
                name = prompt("Enter Your Full Name:");
            } else {
                if (region.toLowerCase() == "vietnam" || region.toLowerCase() == "viet nam" || region.toLowerCase() == "việt nam") {
                    lastname = w[0];
                    firstname = w[w.length - 1];
                } else {
                    firstname = w[0];
                    lastname = w[w.length - 1];
                }
                break;
            }
        }
    }

    //Nhập Ngày Tháng Năm Sinh
    var birth = "";
    while (true) {
        if (birth == null) {
            birth = prompt("Enter Your Birthday: dd/mm/yyyy");
        } else {
            var b = [];
            b = birth.trim().split("/");
            var day, month, year;
            day = b[0];
            month = b[1];
            year = b[2];
            if (birth == "" || !birth.includes("/") || b.length < 3 || (('A' <= birth && birth <= 'Z') || ('a' <= birth && birth <= 'z'))
                || day.length < 2 || month.length < 2 || year.length < 4) {
                birth = prompt("Enter Your Birthday: dd/mm/yyyy");
            } else {
                if (1900 > year || year > 2024) {
                    birth = prompt("Enter Your Birthday: dd/mm/yyyy");
                }
                else {
                    if (month > 12) {
                        birth = prompt("Enter Your Birthday: dd/mm/yyyy");
                    }
                    else if (month == 2) {
                        if (day > 29) {
                            birth = prompt("Enter Your Birthday: dd/mm/yyyy");
                        } else {
                            break;
                        }
                    } else if ((month % 2 == 0 && month < 8 && month != 2) || (month % 2 != 0 && month > 8)) {
                        if (day > 30) {
                            birth = prompt("Enter Your Birthday: dd/mm/yyyy");
                        } else {
                            break;
                        }
                    }
                    else if ((month % 2 == 0 && month >= 8) || (month % 2 != 0 && month < 8)) {
                        if (day > 31) {
                            birth = prompt("Enter Your Birthday: dd/mm/yyyy");
                        } else {
                            break;
                        }
                    }
                }
            }

        }
    }



    //Xin Chào Người Dùng
    alert("Hello " + firstname + ", Welcome You To My Page!!!");

    //test tính năng trên
    var x = "<h1><b><i>Registered successfully!!</i></b></h1>";
    print(x);

    //In ra thông tin người dùng
    print("<h3>First Name: " + firstname + ".</h3>");
    print("<h3>Last Name: " + lastname + ".</h3>");
    print("<h3>Full Name: " + name + ".</h3>");
    print("<h3>Birthday: " + birth + ".</h3>" + "<br>");

    //document.write("File location: " + document.baseURI + "<br>");

    console.log("Hello Bạn Nhé !!!!");
}


function message(msg) {
    document.getElementById('output').innerHTML = msg;
}
//Đồng Hồ
var x;
function openDisplayDate() {
    x = document.getElementById('date').innerHTML = "<b>" + Date() + "</b>";
    x.style.display == 'block';
}
function closeDisplayDate() {
    x = document.getElementById('date').innerHTML = "";
    x.style.display == 'none';
}

//Feature 1
function upDate(previewPic) {
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}
function unDo() {
    document.getElementById('image').innerHTML = "Please hover over an image";
    document.getElementById('image').style.backgroundImage = "url( )";
}


//Array -- Feature 2
var fruits = ["Mango", "Apple", "Orange", "Pear"];

function loadFruits() {
    document.getElementById('fruits').innerHTML = fruits;
}

function addFruits() {
    var fruit = prompt("Add Your Favourite Fruit: ");
    fruits[fruits.length] = fruit;
    document.getElementById('fruits').innerHTML = fruits;
}

//feature 3
// Function that display value 
function val(result) {
    document.getElementById("div-print").innerHTML = result;

}
function dis(result) {
    document.getElementById("div-print").value += result;

}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/') {
        document.getElementById("div-print").value += event.key;
    }

}


var cal = document.getElementById("div-print");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("div-print").value;
        console.log(x);
        solve();
    }
}

// Function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("div-print").value;
    let y = eval(x);
    document.getElementById("div-print").value = y;
}

// Function that clear the display 
function clr() {
    document.getElementById("div-print").value = "";
}
function uclr() {
    let res = document.getElementById("div-print").value;
    document.getElementById("div-print").value = res.substring(0, res.length - 1);
}