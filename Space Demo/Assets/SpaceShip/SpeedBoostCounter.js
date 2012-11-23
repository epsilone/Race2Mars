#pragma strict
var Counter =0;
var SpeedBoostTime = 30;

function Start () {

}


function FixedUpdate () {

Counter = Counter+1;

if(Counter > SpeedBoostTime)
{
Counter = 0;
gameObject.SetActive(false);
}
}