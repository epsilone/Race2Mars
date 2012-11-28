#pragma strict
var StageEnd = 0;
var SpaceStation : GameObject;

function Start () {
SpaceStation.transform.position.z = StageEnd;
}

function Update () {

MoveSpaceStation();

if(GameObject.Find("Counter").GetComponent(KMCounter).KM >= StageEnd){
ScenetoLoad.ScenetoLoad = "SpaceStation";
Application.LoadLevel("ArrivingSpaceStation");
}

}

function MoveSpaceStation(){
SpaceStation.transform.position.z = (StageEnd - GameObject.Find("Counter").GetComponent(KMCounter).KM+15);
}
