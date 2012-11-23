#pragma strict
var Cutscene = true;
var mincutscenelength = 60;
var TMinus = 0;
var counter =0;
var Rocket1 : GameObject;
var Rocket2 : GameObject;
var BreakingDistance = 6;

function Start () {
Cutscene = true;
counter = 0;
GameObject.Find("TruckDummy").transform.position.x = -BreakingDistance;


}

function FixedUpdate(){
TMinus = TMinus+1;


if(TMinus >60)
{
counter = counter+1;
Rocket1.SetActive(true);
Rocket2.SetActive(true);
}

GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("TruckDummy").transform);
GameObject.Find("ShuttleDummy").transform.position.x = counter;

//Debug.Log((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x).ToString());
Debug.Log(GameObject.Find("TruckDummy").transform.position.x.ToString());


}


function Update () {

if(GameObject.Find("ShuttleDummy").transform.position.x >= 50){
Cutscene = false;
}

if (Cutscene == false){
LoadScene();
}

}


function LoadScene(){

if(ScenetoLoad.ScenetoLoad != "null" && ScenetoLoad.ScenetoLoad != null){
Application.LoadLevelAsync(ScenetoLoad.ScenetoLoad);
}

}