#pragma strict

function Create () {
	Application.LoadLevel("Create");
}

function QuitGame () {
	Debug.Log ("Game is exiting...");
	Application.Quit ();
}