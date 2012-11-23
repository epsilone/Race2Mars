#pragma strict
var KM = 0;
var SPEED =1;
function Start () {

}

function Update () {
//tidy this up to make it correlate to the actual speed boost used on asteroids
if (GameObject.Find("Asteroid1").GetComponent(Asteroids).SpeedBoost ==true)
{
SPEED = 5;
}
else
{
SPEED = 1;
}


}

function FixedUpdate(){
KM = KM+SPEED;
gameObject.GetComponent(TextScaler).str = "KM " + KM.ToString();

}