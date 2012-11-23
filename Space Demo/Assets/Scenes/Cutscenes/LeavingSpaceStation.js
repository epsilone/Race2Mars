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

GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("ShuttleDummy").transform);

if(TMinus >=60)
{
counter = counter+1;

GameObject.Find("ShuttleDummy").transform.position.x = counter*.1;


if(GameObject.Find("Main Camera").transform.localPosition.z+.01 < 0){
GameObject.Find("Main Camera").transform.localPosition.z =  GameObject.Find("Main Camera").transform.localPosition.z+.02;
GameObject.Find("Main Camera").transform.localPosition.y =  GameObject.Find("Main Camera").transform.localPosition.y-.03;
}

}


if(GameObject.Find("Main Camera").transform.localPosition.z >=0){


GameObject.Find("Main Camera").transform.localPosition.z =  GameObject.Find("ShuttleDummy").transform.localPosition.z+2;
GameObject.Find("Main Camera").transform.localPosition.y =  GameObject.Find("ShuttleDummy").transform.localPosition.y+5;
GameObject.Find("Main Camera").transform.localRotation.eulerAngles.x =  90;
GameObject.Find("Main Camera").transform.localRotation.eulerAngles.y =  90;
GameObject.Find("Main Camera").transform.LookAt(GameObject.Find("ShuttleDummy").transform);

Debug.Log(GameObject.Find("ShuttleDummy").transform.localRotation.eulerAngles.x);



}


//Debug.Log(counter.ToString());

}


function Update () {

if(GameObject.Find("ShuttleDummy").transform.position.x >= 60){
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