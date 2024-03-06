function first() {
    function print(msg) {
        document.write(msg);
    }
    var x = "<h1><b><i>Registered successfully!!</i></b></h1>";
    print(x);


    var name = prompt("Enter Your Full Name: ");
    var birth = prompt("Enter Your Birthday: dd/mm/yy");
    alert("Hello " + name + ", Welcome You To My Page!!!");
    print("<h3>Name: " + name + ".</h3>");
    print("<h3>Birthday: " + birth + ".</h3>" + "<br>");


    //document.write("Title: " + document.title + "<br>");
    //document.write("File location: " + document.baseURI + "<br>");
    //document.write(window.location);

    console.log("Hello Bạn Nhé !!!!");
}
function message(msg) {
    document.getElementById('output').innerHTML = msg;
}
function displayDate() {
    document.getElementById('date').innerHTML = "<b>" + Date() + "</b>";
}
function showProperties(element) {
    document.getElementById('message').innerHTML = element.alt;
}
function upDate(previewPic) {
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById('image').innerHTML = "Please hover over an image";
    document.getElementById('image').style.backgroundImage = "url( )";
}