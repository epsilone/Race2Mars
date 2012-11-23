var color:Color32;
//color = Color.yellow;

function Update() { 
if(guiText != null)
{
guiText.material.color.a = color.a;
guiText.material.color.b = color.b;
guiText.material.color.g = color.g;
guiText.material.color.r = color.r;
}
//Debug.Log(color.ToString());
}
