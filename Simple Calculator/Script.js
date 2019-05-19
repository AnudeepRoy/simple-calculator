
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

	calci=()=>{

			var expr = document.getElementById('ip').value;
			var str = String(expr);
			var a = str.split('');
			var i=0;;
			var x = new Array();
			var y = new Array();
			var firstNum, secNum;

			while(!isNaN(a[i]) || a[i] =='.' ) {
				x.push(a[i]);
				i++;
			}

			firstNum = Number(x.join(''));
			var optr = a[i];
			i++;

			for(;i<a.length;i++){
				y.push(a[i]);
			}

			secNum = Number(y.join(''));
			var res;
			switch (optr) {

					case '+':
					res = firstNum+secNum;
					disp(res);
					break;

					case '-':
					res = firstNum-secNum;
					disp(res);
					break;

					case '*':
					res = firstNum*secNum;
					disp(res);
					break;

					case '/':
					res = firstNum/secNum;
					disp(res);
					break;

					default:
					document.getElementById('ip').value = 'Invalid Input';
					break;
			}

		}
		
		disp=(num)=>{
			document.getElementById('ip').value = num;
		}