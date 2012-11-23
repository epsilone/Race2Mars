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
static var NewGame = true;

private var Image_Posx = 0;
private var Image_Posy = 0;
private var Image_Width = 0;
private var Image_Height = 0;

private var Text_Posx = 0;
private var Text_Posy = 0;
private var Text_Width = 0;
private var Text_Height = 0;

function Start () {

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


function OnGUI() { 

GUI.depth = GUIDEPTH;

    if (!btnTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
    if(ImageButton == true)
    {
    
    if (GUI.Button(Rect(Image_Posx,Image_Posy,Image_Width,Image_Height),btnTexture)){
    ScenetoLoad.ScenetoLoad = "ProgressionMap";
    
    //From Login Screen        
    if (Application.loadedLevelName == "SplashLogin"){
    
    if(NewGame == false){
    Application.LoadLevelAsync("ProgressionMap");
    }
    
    if(NewGame == true){
    NewGame = false;
    Application.LoadLevelAsync("InitialLaunchTransition");
    }
    
    }
    
    //From SpaceStation Screen
    if (Application.loadedLevelName == "SpaceStation"){
    Application.LoadLevelAsync("LeavingSpaceStation");
    }
    
    //Quitting From Shop
    if (Application.loadedLevelName == "Shop"){
    Application.LoadLevelAsync("ShoptoProgressionQuit");
    }
    
    
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