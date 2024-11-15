/*
	Student Name: Katie Swanson
	File Name: script.js
	Date: 11/15/24
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
	videoSource.src = "media/video1.mp4";
	descriptionSource.src = "media/video1-description.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the video2 video
function video2() {
	videoSource.src = "media/video2.mp4";
	descriptionSource.src = "media/video2-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the video3 video
function video3() {
	videoSource.src = "media/video3.mp4";
	descriptionSource.src = "media/video3-descriptions.vtt";
	video.style.display = "block"
	video.load();
}