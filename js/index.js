
		var lis=document.getElementsByClassName('slideshow')[0].getElementsByTagName('li');
		var imgs=document.getElementsByClassName('slideshow')[0].getElementsByTagName('img');
		var txt=document.getElementById('txt');
		console.log(imgs[0].getAttribute('alt'))
		var n=0;
		lis[n].style.opacity=1;
		txt.innerHTML=imgs[n].getAttribute('alt');
		function selImg(){
			n++;
			if(n==lis.length){
				n=0;
			}
			for(var i=0;i<lis.length;i++){
				lis[i].style.opacity=0;
			}
			lis[n].style.opacity=1;
			txt.innerHTML=imgs[n].getAttribute('alt');
		}
		var timer=setInterval(function(){
			selImg();
		},5000)
