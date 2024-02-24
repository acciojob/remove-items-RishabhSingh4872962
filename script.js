//your JS code here. If required.
 
const colorSelect=document.getElementById("colorSelect");
 
function remove() {
	let indx=null;
	for (let op of colorSelect) {
		if (colorSelect.value==op.innerText) {
			op.remove()
		}
	}
}
