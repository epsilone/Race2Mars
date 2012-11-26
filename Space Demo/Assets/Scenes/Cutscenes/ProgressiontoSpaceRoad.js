#pragma strict
var Cutscene = true;
var mincutscenelength = 60;
var TMinus = 0;
var counter =0;
var Rocket1 : GameObject;
var Rocket2 : GameObject;

function Start () {
Cutscene = true;
counter = 0;

}

function FixedUpdate(){
TMinus = TMinus+1;
Rocket1.SetActive(true);
Rocket2.SetActive(true);

GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("Shuttle").transform);

if(TMinus >=20)
{
counter = counter+1;

GameObject.Find("Shuttle").transform.position.x = counter*.1;



}

Debug.Log(GameObject.Find("Shuttle").transform.localRotation.eulerAngles.x);


//Debug.Log(counter.ToString());

}


function Update () {

if(GameObject.Find("Shuttle").transform.position.x >= 30){
Cutscene = false;
}

if (Cutscene == false){
LoadScene();
}

}


function LoadScene(){

if(ScenetoLoad.ScenetoLoad != "null" && ScenetoLoad.ScenetoLoad != null){
Application.LoadLevel(ScenetoLoad.ScenetoLoad);
}

}