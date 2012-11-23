var SpaceStationGUI : GameObject;
var RoadsideGUI : GameObject;


function Start()

{
if (ShopState.SpaceStationShop == true){
SpaceStationGUI.SetActive(true);
RoadsideGUI.SetActive(false);

}

if (ShopState.RoadSideShop  == true){
RoadsideGUI.SetActive(true);
SpaceStationGUI.SetActive(false);
}

}
