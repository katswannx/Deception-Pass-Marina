/*
	Student Name: Katie Swanson
	File Name: script.js
	Date: 12/4/24
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

//Function to display the video1 video
function video1() {
	videoSource.src = "media/aerial-video.mp4";
	video.style.display = "block";
	video.load();
}
