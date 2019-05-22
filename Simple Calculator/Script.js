var a = new Array();

	getClear = () =>{
		a.length = 0;
		document.getElementById('ip').value='';
	}


	getFilled=(num)=>{
		if((a.length==0) && (isNaN(num)) && (num!='.')){
			document.getElementById('ip').value='';
		}

		else{
			a.push(num);
			document.getElementById('ip').value=a.join('');

		}
	}

	calci= () =>{

		disp(eval(String(a.join(''))));

	}
		
		disp=(num)=>{
			a.length = 0;
			var num_parts = num.toString().split(".");
   			num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			document.getElementById('ip').value =  num_parts.join(".");
			a[0]= num_parts.join(".");
}
