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

if(TMinus >=60)
{
counter = counter+1;
//Move the shuttle up
GameObject.Find("Shuttle").transform.position.y = counter*.1;

//For as long as the camera is not looking up the rockets of the shuttle move the camera downward relative to the rocket and also toward the rocket's local Z access (makes a nice arc)
if(GameObject.Find("Main Camera").transform.localPosition.z+.01 <=0){
GameObject.Find("Main Camera").transform.localPosition.z =  GameObject.Find("Main Camera").transform.localPosition.z+.02;
GameObject.Find("Main Camera").transform.localPosition.y =  GameObject.Find("Main Camera").transform.localPosition.y-.04;
}

}


if(GameObject.Find("Main Camera").transform.localPosition.z >=-0.5){

if(GameObject.Find("EarthTerrain"))
GameObject.Find("EarthTerrain").SetActive(false);
if(GameObject.Find("Main Camera").GetComponent(Skybox).enabled)
GameObject.Find("Main Camera").GetComponent(Skybox).enabled = false;

GameObject.Find("Main Camera").transform.localPosition.z =  GameObject.Find("Shuttle").transform.localPosition.z+1;;
GameObject.Find("Main Camera").transform.position.y =  GameObject.Find("Shuttle").transform.position.y+6;
GameObject.Find("Main Camera").transform.localRotation.eulerAngles.x =  90;

GameObject.Find("Shuttle").transform.rotation.eulerAngles.y =GameObject.Find("Shuttle").transform.rotation.eulerAngles.y +1;

Debug.Log(GameObject.Find("Shuttle").transform.position.y.ToString());

}


//Debug.Log(counter.ToString());

}


function Update () {

if(GameObject.Find("Shuttle").transform.position.y >= 75){
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