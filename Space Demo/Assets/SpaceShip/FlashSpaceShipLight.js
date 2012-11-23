#pragma strict
var FlashSpeed = 0;
var FlashPeriod = 0;
var FlashCounter = 0;
var Flash = true;
var ShipLight : GameObject;

function Start () {

}

function FixedUpdate () {

if (FlashCounter < FlashPeriod)
{
FlashCounter = FlashCounter + FlashSpeed;
}

if (FlashCounter >= FlashPeriod)
{
FlashCounter = 0;

switch(Flash)
{
case false:
  Flash = true;
  break;
case true:
  Flash = false;
  break;

}

}

ShipLight.SetActive(Flash);

}