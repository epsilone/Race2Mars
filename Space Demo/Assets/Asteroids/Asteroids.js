var rotationSpeedX =0.0000;
var rotationSpeedY =0.0000;
var rotationSpeedZ =0.0000;

var SpeedX = 0.0000;
var SpeedY = 0.0000;
var SpeedZ = 0.0000;
var StartPos : GameObject;

var StartSpeed =0.0000;
var BoostMultiplier = 10;
var SpeedBoost = false;

var SpeedBoosterObject : GameObject;

function Start () {
//Record the spawn point
StartPos.transform.position = gameObject.transform.position;
//Record the Start Speed
StartSpeed = SpeedZ;

}

function FixedUpdate () {

//rotate the asteroids
transform.rotation.eulerAngles.x = transform.rotation.eulerAngles.x +rotationSpeedX;
transform.rotation.eulerAngles.y = transform.rotation.eulerAngles.y +rotationSpeedY;
transform.rotation.eulerAngles.z = transform.rotation.eulerAngles.z +rotationSpeedZ;

//Move Asteroids towards the spaceship
transform.position.x = transform.position.x +SpeedX;
transform.position.y = transform.position.y +SpeedY;
transform.position.z = transform.position.z +SpeedZ;

//Reset Asteroids
if (transform.position.z < GameObject.Find("Main Camera").transform.position.z -1)
{
transform.position = StartPos.transform.position;
}

if(SpeedBoosterObject){
//Speed Booster
if(SpeedBoosterObject.activeInHierarchy == true)
{
SpeedZ = StartSpeed*BoostMultiplier;
}

//need to check for a deactivated gameobject
if(SpeedBoosterObject.activeInHierarchy == false)
{
SpeedZ = StartSpeed;
}
Debug.Log(SpeedBoosterObject.activeInHierarchy);
}

}