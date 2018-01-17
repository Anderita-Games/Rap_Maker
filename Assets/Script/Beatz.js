#pragma strict
var audio1 : AudioSource; 
var audio2 : AudioSource; 
var audio3 : AudioSource; 
var audio4 : AudioSource; 
var audio5 : AudioSource; 
var audio6 : AudioSource; 
var audio7 : AudioSource; 
var audio8 : AudioSource;
var audio9 : AudioSource; 
var audio10 : AudioSource; 
 
function Start () {
	PlayerPrefs.SetString("Beat", "");
}
 
function beatz1 () {
	pause();
	audio1.Play();
	PlayerPrefs.SetString("Beat", "audio1");
}

function beatz2 () {
	pause();
	audio2.Play();
	PlayerPrefs.SetString("Beat", "audio2");
}

function beatz3 () {
	pause();
	audio3.Play();
	PlayerPrefs.SetString("Beat", "audio3");
}

function beatz4 () {
	pause();
	audio4.Play();
	PlayerPrefs.SetString("Beat", "audio4");
}

function beatz5 () {
	pause();
	audio5.Play();
	PlayerPrefs.SetString("Beat", "audio5");
}

function beatz6 () {
	pause();
	audio6.Play();
	PlayerPrefs.SetString("Beat", "audio6");
}

function beatz7 () {
	pause();
	audio7.Play();
	PlayerPrefs.SetString("Beat", "audio7");
}

function beatz8 () {
	pause();
	audio8.Play();
	PlayerPrefs.SetString("Beat", "audio8");
}

function beatz9 () {
	pause();
	audio9.Play();
	PlayerPrefs.SetString("Beat", "audio9");
}

function beatz10 () {
	pause();
	audio10.Play();
	PlayerPrefs.SetString("Beat", "audio10");
}

function pause () {
	audio1.Pause();
	audio2.Pause();
	audio3.Pause();
	audio4.Pause();
	audio5.Pause();
	audio6.Pause();
	audio7.Pause();
	audio8.Pause();
	audio9.Pause();
	audio10.Pause();
}

function forward () {
	if (PlayerPrefs.GetString("Beat") != "") {
		Application.LoadLevel ("Rap");
	}
}

function home () {
	Application.LoadLevel ("MainMenu");
}

