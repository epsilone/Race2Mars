#pragma strict
var xSpeed = 0.00000;
function Start () {

}


function FixedUpdate () {

if(Input.GetAxis("Mouse X") < 0){
//transform.position.x = transform.position.x - xSpeed;// (Input.GetAxis("Mouse X")* xSpeed);
GameObject.Find("SpaceShip").rigidbody.AddForce(-.2,0,0,ForceMode.Impulse);
}

if(Input.GetAxis("Mouse X") > 0){
//transform.position.x = transform.position.x + xSpeed;// (Input.GetAxis("Mouse X")* xSpeed);
GameObject.Find("SpaceShip").rigidbody.AddForce(.2,0,0,ForceMode.Impulse);

}


if(transform.position.x > 3)
transform.position.x = 3;

if(transform.position.x < -3)
transform.position.x = -3;

Debug.Log(Input.GetAxis("Mouse X"));

}