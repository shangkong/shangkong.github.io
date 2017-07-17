window.onload=function(){

		//轮播图
		toBox();

		//分割图片淡入淡出第一行
		var oSection=document.getElementById('section5-1');
		var aDiv=oSection.getElementsByTagName('div');
		for(var i=0; i<aDiv.length; i++){
			aDiv[i].onmouseover=function(){
				startMove(this,{opacity:50});
			}

			aDiv[i].onmouseout=function(){
				startMove(this,{opacity:100});
			}
		}

		//分割图片淡入淡出第二行
		var oSection2=document.getElementById('section7-1');
		var aDiv=oSection2.getElementsByTagName('div');
		
		for(var i=0; i<aDiv.length; i++){
			aDiv[i].onmouseover=function(){
				startMove(this,{opacity:50});
			}

			aDiv[i].onmouseout=function(){
				startMove(this,{opacity:100});
			}
		}
		//分割图片淡入淡出第三行
		var oSection3=document.getElementById('section17-1');
		var aDiv=oSection3.getElementsByTagName('div');
		for (var i=0; i<aDiv.length; i++) {
			aDiv[i].onmouseover=function(){
				startMove(this,{opacity:50});
			}
			aDiv[i].onmouseout=function(){
				startMove(this,{opacity:100});
			}
		}
		//分割图片淡入淡出第四行
		var oSection4=document.getElementById('section31-1');
		var aDiv=oSection4.getElementsByTagName('div');
		for (var i=0; i<aDiv.length; i++) {

			aDiv[i].onmouseover=function(){
				startMove(this,{opacity:50});
			}
			aDiv[i].onmouseout=function(){
				startMove(this,{opacity:100});
			}
		}
		//li里的logo图
		var oSection5 = document.getElementById('section8-bottom14');
		var oUl = getByClass(oSection5,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection5);

		var oSection6=document.getElementById('section9-bottom14');
		var oUl=getByClass(oSection6,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection6);
		
		var oSection7=document.getElementById('section10-bottom14');
		var oUl=getByClass(oSection7,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection7);

		var oSection8=document.getElementById('section11-bottom14');
		var oUl=getByClass(oSection8,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection8);
		
		var oSection9=document.getElementById('section14-bottom14');
		var oUl=getByClass(oSection9,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection9);

		var oSection10=document.getElementById('section15-bottom14');
		var oUl=getByClass(oSection10,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection10);

		var oSection11=document.getElementById('section16-bottom14');
		var oUl=getByClass(oSection11,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection11);

		var oSection12=document.getElementById('section21-bottom14');
		var oUl=getByClass(oSection12,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection12);

		var oSection13=document.getElementById('section22-bottom14');
		var oUl=getByClass(oSection13,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection13);

		var oSection14=document.getElementById('section23-bottom14');
		var oUl=getByClass(oSection14,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection14);

		var oSection15=document.getElementById('section24-bottom14');
		var oUl=getByClass(oSection15,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection15);

		var oSection16=document.getElementById('section25-bottom14');
		var oUl=getByClass(oSection16,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection16);

		var oSection17=document.getElementById('section26-bottom14');
		var oUl=getByClass(oSection17,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection17);

		var oSection18=document.getElementById('section27-bottom14');
		var oUl=getByClass(oSection18,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		aLiImg(oSection18);


		var oSection19=document.getElementById('section28-bottom14');
		var oUl=getByClass(oSection19,'ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var aUl=oSection19.getElementsByTagName('ul');
		aLiImg(oSection19);

		var oPrev19=document.getElementById('prev19');
		var oNext19=document.getElementById('next19');
		aOprev(oSection19,oPrev19,oNext19);
		

}
//li里的小图淡入淡出函数
function aLiImg(obj){
	var oUl=getByClass(obj,'ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	for(var i=0; i<aLi.length; i++){

			aLi[i].onmouseover=function(){
				startMove(this,{opacity:50});
			}
			aLi[i].onmouseout=function(){
				startMove(this,{opacity:100});
			}
		}
}
//getByClass函数,获取className来操作dom
	function getByClass(oParent,sClass){
		var aEle=oParent.getElementsByTagName('*');
		var aResult=[];
		for (var i=0; i<aEle.length; i++) {
			if (aEle[i].className==sClass) {
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
//轮播图函数
function toBox(){
	var oBox=document.getElementById('box');
	var aLi=oBox.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var oUl=oBox.getElementsByTagName('ul')[0];
	var aLiImg=oUl.getElementsByTagName('li');
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	oUl.style.width=aLiImg.length*aLiImg[0].offsetWidth+'px';
	var now=0;
    

	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			
			now=this.index;
			tab();
		}
	}
		function tab(){
			for(var i=0; i<aLi.length; i++){
				if(aLi[i]==aLi[now]){
						aLi[i].className='active';
						startMove(aLiImg[i],{opacity: 100});
						aLiImg[i].style.display='block';
					}else{
						aLi[i].className='';
						startMove(aLiImg[i],{opacity: 0});
						aLiImg[i].style.display='none';
					}
			}
			aLi[now].className='active';
			aLiImg[now].style.display='block';

			startMove(aLiImg[now],{opacity: 100});
		}
		function prev(){
			now--;
			if(now==-1){
				now=aLi.length-1;
			}
			tab();
		}
		function next(){
			now++;
			if(now==aLi.length){
				now=0;
			}
			tab();
		}

		oPrev.onclick=function(){
			prev();
		}
		oNext.onclick=function(){
			next();
		}
		var timer=setInterval(oNext.onclick,3000);


		oBox.onmouseover=function(){
			oPrev.style.display='block';
			oPrev.style.background='rgba(0,0,0,.5)';
			oNext.style.display='block';
			oNext.style.background='rgba(0,0,0,.5)';
			clearInterval(timer);
		}
		oBox.onmouseout=function(){
			oPrev.style.display='none';
			oNext.style.display='none';
		    timer=setInterval(oNext.onclick,3000);
		}
		
}
function aOprev(obj,ev1,ev2){
	var aUl=obj.getElementsByTagName('ul');
	var now=0;
		for(var i=0; i<aUl.length; i++){
			aUl[i].index=i;
			aUl[i].onmouseover=function(){
				
				now=this.index;
				tab();
			}
		}
		function tab(){
			for(var i=0; i<aUl.length; i++){
				aUl[i].style.opacity=100;
				aUl[i].style.display='none';
			}
			aUl[now].style.display='block';
			startMove(aUl[now],{opacity: 100});		
		}
		function prev(){
			now--;
			if(now==-1){
				now=aUl.length-1;
			}
			tab();
		}
		function next(){
			now++;
			if(now==aUl.length){
				now=0;
			}
			tab();
		}
		ev1.onclick=function (){
			prev();
		}
		ev2.onclick=function(){
			next();
		}


	//京东倒计时
	var oDiv=document.getElementById('section2-topr2');
	var oToTime1=document.getElementById('toTime1');
	var oToTime2=document.getElementById('toTime2');
	var oToTime3=document.getElementById('toTime3');
	var oDateTo=new Date('2017/06/29 23:00:00')

	function fnCountdown(){
		var oDate=new Date();
		var toTime=oDateTo-oDate;

		var hours=parseInt(toTime/1000/60/60%24);
		if(hours<10)  hours='0'+hours;
		var minutes=parseInt(toTime/1000/60%60);
		if (minutes<10) minutes='0'+minutes;
		var seconds=parseInt(toTime/1000%60);
		if (seconds<10) seconds='0'+seconds;

		oToTime1.innerHTML=hours;
		oToTime2.innerHTML=minutes;
		oToTime3.innerHTML=seconds;
		if(toTime<1){
			clearInterval(timer);
			oToTime1.innerHTML='00';
			oToTime2.innerHTML='00';
			oToTime3.innerHTML='00';
		}
	}
	fnCountdown();	
	var timer=setInterval(fnCountdown,1000);
}
//section .section1 .section-r中的js运动

