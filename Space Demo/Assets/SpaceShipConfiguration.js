#pragma strict

//Basic Structure of SpaceShip initialised to default levels
static var Hull_ID = 2;
static var Engine_ID = 2;
static var Capacitor_ID = 2;
static var Shield_ID = 2;
static var Guidance_ID = 2;

//Multiple weapons default to owning weapon1 with level 1 performance
static var Weapon1_ID = 1;
static var Weapon2_ID = 0;
static var Weapon3_ID = 0;


static var Hull_QTY = 0;
static var Engine_QTY = 0;
static var Capacitor_QTY = 0;
static var Shield_QTY = 0;
static var Guidance_QTY = 0;

static var Weapon1_QTY = 0;
static var Weapon2_QTY = 0;
static var Weapon3_QTY = 0;



function Start () {
SpaceShipConfiguration();
}

function Update () {

}

//Displaying the Ship's capabilities
static function SpaceShipConfiguration(){
var counter=1;
//Hull
Hull_QTY = GameObject.FindGameObjectsWithTag("Hull").Length;

for (counter=1; counter < Hull_QTY+1; counter++){
GameObject.Find("Hull"+(counter.ToString())).renderer.enabled = false;
}
GameObject.Find("Hull"+(Hull_ID.ToString())).renderer.enabled = true;
Debug.Log(Hull_ID.ToString());

//Engine
Engine_QTY = GameObject.FindGameObjectsWithTag("Engine").Length;

for (counter=1; counter < Engine_QTY+1; counter++){
GameObject.Find("Engine"+(counter.ToString())).renderer.enabled = false;
}
GameObject.Find("Engine"+(Engine_ID.ToString())).renderer.enabled = true;
Debug.Log(Engine_ID.ToString());


//Shield
Shield_QTY = GameObject.FindGameObjectsWithTag("Shield").Length;

for (counter=1; counter < Shield_QTY+1; counter++){
GameObject.Find("Shield"+(counter.ToString())).renderer.enabled = false;
}
GameObject.Find("Shield"+(Shield_ID.ToString())).renderer.enabled = true;
Debug.Log(Shield_ID.ToString());

//Capacitor
Capacitor_QTY = GameObject.FindGameObjectsWithTag("Capacitor").Length;

for (counter=1; counter < Capacitor_QTY+1; counter++){
GameObject.Find("Capacitor"+(counter.ToString())).renderer.enabled = false;
}
GameObject.Find("Capacitor"+(Capacitor_ID.ToString())).renderer.enabled = true;
Debug.Log(Capacitor_ID.ToString());

//Guidance
Guidance_QTY = GameObject.FindGameObjectsWithTag("Guidance").Length;

for (counter=1; counter < Guidance_QTY+1; counter++){
GameObject.Find("Guidance"+(counter.ToString())).renderer.enabled = false;
}
GameObject.Find("Guidance"+(Guidance_ID.ToString())).renderer.enabled = true;
Debug.Log(Guidance_ID.ToString());

//Weapon1
Weapon1_QTY = GameObject.FindGameObjectsWithTag("Weapon1").Length;

for (counter=1; counter < Weapon1_QTY+1; counter++){
GameObject.Find("Weapon1_"+(counter.ToString())).renderer.enabled = false;
}

//Null check to make sure Ship is armed with weapon
if(Weapon1_ID != 0){
GameObject.Find("Weapon1_"+(Weapon1_ID.ToString())).renderer.enabled = true;
}
Debug.Log(Weapon1_ID.ToString());

//Weapon2
Weapon2_QTY = GameObject.FindGameObjectsWithTag("Weapon2").Length;

for (counter=1; counter < Weapon2_QTY+1; counter++){
GameObject.Find("Weapon2_"+(counter.ToString())).renderer.enabled = false;
}

//Null check to make sure Ship is armed with weapon
if(Weapon2_ID != 0){
GameObject.Find("Weapon2_"+(Weapon2_ID.ToString())).renderer.enabled = true;
}
Debug.Log(Weapon2_ID.ToString());


//Weapon3
Weapon3_QTY = GameObject.FindGameObjectsWithTag("Weapon3").Length;

for (counter=1; counter < Weapon3_QTY+1; counter++){
GameObject.Find("Weapon3_"+(counter.ToString())).renderer.enabled = false;
}
//Null check to make sure Ship is armed with weapon
if(Weapon3_ID != 0){
GameObject.Find("Weapon3_"+(Weapon3_ID.ToString())).renderer.enabled = true;
}
Debug.Log(Weapon3_ID.ToString());

}