#pragma strict
var Cutscene = true;
var mincutscenelength = 60;
var TMinus = 0;
var counter =0.00000;
var Rocket1 : GameObject;
var Rocket2 : GameObject;
var BreakingDistance = 6;

function Start () {
Cutscene = true;
counter = -35;
GameObject.Find("TruckDummy").transform.position.x = -35;
Rocket1.SetActive(true);
Rocket2.SetActive(true);

}

function FixedUpdate(){
//TMinus = TMinus+1;


if((GameObject.Find("ShuttleDummy").transform.position.x -GameObject.Find("TruckDummy").transform.position.x)> BreakingDistance )
{
counter = counter+0.3;
}

if((GameObject.Find("ShuttleDummy").transform.position.x -GameObject.Find("TruckDummy").transform.position.x)<= BreakingDistance){
counter = counter+0.03;
Rocket1.SetActive(false);
Rocket2.SetActive(false);
}
GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("TruckDummy").transform);
GameObject.Find("TruckDummy").transform.position.x = counter;

//Debug.Log((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x).ToString());
Debug.Log((GameObject.Find("ShuttleDummy").transform.position.x -GameObject.Find("TruckDummy").transform.position.x).ToString());

if(((GameObject.Find("ShuttleDummy").transform.position.x -GameObject.Find("TruckDummy").transform.position.x) <3.5)){
counter =-3.5;
}

}


function Update () {

if(((GameObject.Find("ShuttleDummy").transform.position.x -GameObject.Find("TruckDummy").transform.position.x) <=3.5)){
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