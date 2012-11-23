#pragma strict
var btnTexture : Texture;
var ButtonText = "null";
var TextButton = false;
var ImageButton = false;

var ImagePosx = 0.000;
var ImagePosy = 0.000;
var ImageWidth = 0.000;
var ImageHeight = 0.000;

var TextPosx = 0.000;
var TextPosy = 0.000;
var TextWidth = 0.000;
var TextHeight = 0.000;
var GUIDEPTH = 0;

private var Image_Posx = 0;
private var Image_Posy = 0;
private var Image_Width = 0;
private var Image_Height = 0;

private var Text_Posx = 0;
private var Text_Posy = 0;
private var Text_Width = 0;
private var Text_Height = 0;

var Plinth = false;

function Start () {
GameObject.Find("SpaceShipPlinthDummy").transform.position.y = 3.7;
}

function Update () {

Image_Posx = ImagePosx * Screen.width;
Image_Posy = ImagePosy * Screen.height;
Image_Width = ImageWidth * Screen.width;
Image_Height = ImageHeight * Screen.height;

Text_Posx = TextPosx * Screen.width;
Text_Posy = TextPosy * Screen.height;
Text_Width = TextWidth * Screen.width;
Text_Height = TextHeight * Screen.height;

}

function FixedUpdate(){

if(Application.loadedLevelName == "Shop"){

if (Plinth == false){

   if(GameObject.Find("SpaceShipPlinthDummy").transform.position.y > 1.7){
   SpaceStationtoShop();
   }
   
    }
}

if(Plinth == true){
if(GameObject.Find("SpaceShipPlinthDummy").transform.position.y <= 3.7){
ShoptoSpaceStation();

    if(GameObject.Find("SpaceShipPlinthDummy").transform.position.y >= 3.3){
    Application.LoadLevelAsync("SpaceStation");

}

}
}

}


function OnGUI() { 

GUI.depth = GUIDEPTH;

    if (!btnTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
    if(ImageButton == true)
    {
    if (GUI.Button(Rect(Image_Posx,Image_Posy,Image_Width,Image_Height),btnTexture))
    {
    Plinth = true;
        Debug.Log("Clicked the button with an image");
    }
    }
    
    if(TextButton == true)
    {
    if (GUI.Button(Rect(Text_Posx,Text_Posy,Text_Width,Text_Height),"Click"))
    {    
        Debug.Log("Clicked the button with text");
    }
    }    

}

function SpaceStationtoShop(){
GameObject.Find("SpaceShipPlinthDummy").transform.position.y = GameObject.Find("SpaceShipPlinthDummy").transform.position.y-.02;
}

function ShoptoSpaceStation(){
GameObject.Find("SpaceShipPlinthDummy").transform.position.y = GameObject.Find("SpaceShipPlinthDummy").transform.position.y+.02;
}