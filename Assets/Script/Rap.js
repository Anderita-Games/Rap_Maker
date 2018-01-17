#pragma strict
var recording = false;
var ism = false;

var off : GameObject;
var on : GameObject;
var email : GameObject;

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

var time : UnityEngine.UI.Text;
var title : UnityEngine.UI.Text;
var counter : UnityEngine.UI.Text;

function Start () {
	var aud = GetComponent.<AudioSource>();
	on.SetActive (false);
	email.SetActive(false);
	title.text = "R E C O R D I N G  I N";
	yield WaitForSeconds (1);
	counter.text = "4";
	yield WaitForSeconds (1);
	counter.text = "3";
	yield WaitForSeconds (1);
	counter.text = "2";
	yield WaitForSeconds (1);
	counter.text = "1";
	yield WaitForSeconds (1);
	counter.text = "";
	recording = true;
	title.text = "S T A R T  R A P I N G !";
	if (PlayerPrefs.GetString("Beat") == "audio1") {
		audio1.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 371, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio2") {
		audio2.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 205, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio3") {
		audio3.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 229, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio4") {
		audio4.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 156, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio5") {
		audio5.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 262, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio6") {
		audio6.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 166, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio7") {
		audio7.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 201, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio8") {
		audio8.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 265, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio9") {
		audio9.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 178, 44100);
	}else if (PlayerPrefs.GetString("Beat") == "audio10") {
		audio10.Play();
		aud.clip = Microphone.Start("Built-in Microphone", true, 229, 44100);
	}
	on.SetActive (true);
	off.SetActive (false);
	ism = true;
}

function Update () {
	if (recording == true) {
		time.text = "" + (Time.timeSinceLevelLoad - 5);
	} else {
		time.text = "Not Recording";
	}
}


function Record () {
	var aud = GetComponent.<AudioSource>();
	if (ism == true) {
		if (recording == false) {
			Application.LoadLevel ("Rap");
		} else if (recording == true) {
			off.SetActive (true);
			on.SetActive (false);
			email.SetActive(true);
			recording = false;
			pause();
			aud.Play();
		}
	}
}

function Download () {
	var aud = GetComponent.<AudioSource>();  
	//Save.Wav.Save("Sick Beat", audio1);
	Application.OpenURL("mailto:yesyoucan@hotmail.com?subject=Email&body=from Unity&attachment=\aud.clip");
}

function pause () {
	audio1.Stop();
	audio2.Stop();
	audio3.Stop();
	audio4.Stop();
	audio5.Stop();
	audio6.Stop();
	audio7.Stop();
	audio8.Stop();
	audio9.Stop();
	audio10.Stop();
}

function Back () {
	Application.LoadLevel ("Create");
}



