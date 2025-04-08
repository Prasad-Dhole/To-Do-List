const enter = document.getElementById('enter');
const entrance = document.getElementById('input');
let value = entrance.value;
let container = document.getElementById('div');

enter.addEventListener("click", function() 
{
    var newStart = document.createElement("li");
    newStart.style.width = "400px";
    newStart.style.display = "inline-block";

    var details = document.createTextNode(entrance.value);
    newStart.appendChild(details);

    var x = document.createElement("input");
    x.style.display = "inline-block";
    x.style.width = "25px";
    x.style.height = "25px";
    x.style.position = "absolute";
    x.style.left = "60%";
    newStart.appendChild(x);

    var z = document.createElement("span");
    z.innerText = "✅";
    z.style.display = "none";
    z.style.position = "absolute";
    z.style.left = "0%";
    newStart.appendChild(z);

    document.getElementById('div').appendChild(newStart);

    x.addEventListener("click", function removeItem(item) 
    {
            document.getElementById('div').removeChild(this.parentElement)
    });
    
    newStart.style.cursor = "pointer";

    newStart.addEventListener("click", function() 
    {
        if (z.style.display = "none") 
        {
            z.style.display = "inline-block";
        } 
        else if (z.style.display = "inline-block") 
        {
            z.style.display = "none";
        }
    });
});