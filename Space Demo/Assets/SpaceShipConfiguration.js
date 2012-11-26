#pragma strict

//Basic Structure of SpaceShip initialised to default levels
static var Hull_ID = 1;
static var Engine_ID = 1;
static var Capacitor_ID = 1;
static var Shields_ID = 1;
static var Guidance_ID = 1;
//Multiple weapons default to owning weapon1 with level 1 performance
var Weapon1 = 1;
var Weapon2 = 0;
var Weapon3 = 0;
var Weapon4 = 0;
var Weapon5 = 0;

function Start () {

}

function Update () {

}

//Displaying the Ship's capabilities
static function SpaceShipConfiguration(){

//Set Hull to True if it is owned
switch(Hull_ID) {
			case 1:
				Hull_1 = true;
				Hull_2 = false;
				Hull_3 = false;
				break;	
			case 2:
				Hull_1 = false;
				Hull_2 = true;
				Hull_3 = false;
				break;
			case 3:
	     		Hull_1 = false;
				Hull_2 = false;
				Hull_3 = true;
				break;
			
			default:
				break;
			}

		//Set Engine to True if it is owned
switch(Engine_ID) {
			case 1:
				Engine_1 = true;
				Engine_2 = false;
				Engine_3 = false;
				break;	
			case 2:
				Engine_1 = false;
				Engine_2 = true;
				Engine_3 = false;
				break;
			case 3:
	     		Engine_1 = false;
				Engine_2 = false;
				Engine_3 = true;
				break;
			
			default:
				break;
			}
		
		//Set Capacitor to True if it is owned
switch(Capacitor_ID) {
			case 1:
				Capacitor_1 = true;
				Capacitor_2 = false;
				Capacitor_3 = false;
				break;	
			case 2:
				Capacitor_1 = false;
				Capacitor_2 = true;
				Capacitor_3 = false;
				break;
			case 3:
	     		Capacitor_1 = false;
				Capacitor_2 = false;
				Capacitor_3 = true;
				break;

			default:
				break;
			}




}