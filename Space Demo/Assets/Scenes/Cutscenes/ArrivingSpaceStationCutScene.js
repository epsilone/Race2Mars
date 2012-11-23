#pragma strict
var Cutscene = true;
var mincutscenelength = 60;
var TMinus = 0;
var counter =0.0000;
var Rocket1 : GameObject;
var Rocket2 : GameObject;
var BreakingDistance = 10;

function Start () {
Cutscene = true;
counter = -25;
GameObject.Find("ShuttleDummy").transform.position.x = -25;
GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("ShuttleDummy").transform);
GameObject.Find("ShuttleDummy").transform.position.x = counter;
Rocket1.SetActive(true);
Rocket2.SetActive(true);
}

function FixedUpdate(){
//TMinus = TMinus+1;


if((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x)> BreakingDistance ){

counter = counter+0.1;
}

if((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x)<= BreakingDistance ){
counter = counter+0.03;
Rocket1.SetActive(false);
Rocket2.SetActive(false);
GameObject.Find("TractorBeam").GetComponent(ParticleEmitter).enabled = true;
GameObject.Find("SpaceStationShield").renderer.enabled = false;
}


GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("ShuttleDummy").transform);
GameObject.Find("ShuttleDummy").transform.position.x = counter;

//Debug.Log((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x).ToString());
//Debug.Log(GameObject.Find("ShuttleDummy").transform.position.x.ToString());
Debug.Log((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x).ToString());
}


function Update () {

if((GameObject.Find("SpaceStation").transform.position.x -GameObject.Find("ShuttleDummy").transform.position.x) <5.5){
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