'use strict'


let dat = new Date()    
let sp1=document.querySelector('.sp1')
let sp3=document.querySelector('.sp3')
let sp5=document.querySelector('.sp5')

sp1.innerHTML = dat.getHours();
sp3.innerHTML = dat.getMinutes();
sp5.innerHTML = dat.getSeconds();

function f1(){
 	sp5.innerHTML++;

	 if(sp5.innerHTML == 60){
		sp5.innerHTML = 0;
		sp3.innerHTML++;
	 }

	 if(sp3.innerHTML == 60){
	 	sp3.innerHTML = 0;
	 	sp1.innerHTML++;
	 }

	 if(sp1.innerHTML == 24){
	 	sp1.innerHTML = 0;
	 }

}
setInterval(f1,1000);
