#pragma strict
static var SpaceStationShop = true;
static var RoadSideShop = false;

static function ShopState(State)
{
if (State == "SpaceStation"){
RoadSideShop = false;
SpaceStationShop = true;
}

if (State == "Roadside"){
SpaceStationShop = false;
RoadSideShop = true;
}

}