var fs = require('fs');
var outfile = "hello.txt";
var out = "";
var n = 0  
var i = 1

while (n  < 101)
{ 
	var delitelne = false;
	var k=2;
	while (i>k)
	{ 
		var pod = i/k;
		var fl = Math.floor(pod);
		if(fl==pod)	
		{
		 delitelne = true;	
		}
	 k++		
	}	
	
	if(delitelne == false)
	{
		out = out + i + ",";
		n++
	}	
	i++
}


fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);  

