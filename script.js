var current_angle_position = 0;
var available_angles = [0,30,60,90,120,150,180,210,240,270,300,300,330]
var current_color = 'orange';
var current_bumper = 'standard';
var current_roof = 'standard';

var previous_color = 'orange';
var current_angle = available_angles[current_angle_position];



function change_color(color) {
    previous_color = current_color;
    current_color = color;
    var previous_element = document.getElementById("orange-color");
    var current_element = document.getElementById(current_color);
    if (previous_color == "orange") {
        previous_element = document.getElementById("orange-color");
    }
    if (previous_color == "dark-green") {
        previous_element = document.getElementById("green-color");
    }
    if (previous_color == 'green-white') {
        previous_element = document.getElementById("green-white-color");
    }
    if (previous_color == "orange-white") {
        previous_element = document.getElementById("orange-white-color");
    }
    if (current_color == "orange") {
        current_element = document.getElementById("orange-color");
    }
    if (current_color == "dark-green") {
        current_element = document.getElementById("green-color");
    }
    if (current_color == 'green-white') {
        current_element = document.getElementById("green-white-color");
    }
    if (current_color == "orange-white") {
        current_element = document.getElementById("orange-white-color");
    }

    current_element.classList.remove("color-btn");
    current_element.classList.add("color-btn-selected");


    previous_element.classList.remove("color-btn-selected");
    previous_element.classList.add("color-btn");





    load_buchanka();
}
function change_bumper(bumper) {
    current_bumper = bumper;
    load_buchanka();
}
function change_roof(roof) {
    var previous_roof = current_roof;
    current_roof = roof;
    var previous_roof_element = document.getElementById(previous_roof);
    previous_roof_element.classList.remove("btn-roof-active");
    previous_roof_element.classList.add("btn-roof");
    var new_roof_element = document.getElementById(current_roof);
    new_roof_element.classList.remove("btn-roof");
    new_roof_element.classList.add("btn-roof-active");

    load_buchanka();
}
function change_angle(change) {
    if (change == 'plus') {
        current_angle_position += 1;
    } else {
        current_angle_position -= 1;
    }
    if (current_angle_position >= available_angles.length) {
        current_angle_position = 0;
    }
    if (current_angle_position < 0) {
        current_angle_position = available_angles.length - 1;
    }
    current_angle = available_angles[current_angle_position];
    load_buchanka();
}

var bumper_slider = document.getElementById("bumper-slider");

bumper_slider.oninput = function () {
    if (bumper_slider.value == 1) {
        current_bumper = 'standard';
        document.getElementById("standard-bumper").style.color = "rgb(0, 0, 0)";
        document.getElementById("force-bumper").style.color = "rgb(129, 129, 129)";
    }
    else {
        current_bumper = 'force';
        document.getElementById("standard-bumper").style.color = "rgb(129, 129, 129)";
        document.getElementById("force-bumper").style.color = "rgb(0, 0, 0)";
    }
    load_buchanka();
}


function load_buchanka() {
    document.getElementById("img-placeholder").src = "img/UAZ_2206_" + current_color + "_" + current_roof + "_" + current_bumper + "_" + current_angle + ".jpeg";
}  
