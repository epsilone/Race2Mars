#pragma strict

var SpeedBoosterObject :GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other: Collider) {

if (other.tag == "Player")
SpeedBoosterObject.SetActive(true);

}