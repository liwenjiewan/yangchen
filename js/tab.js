var tabs=document.getElementById("tab").getElementsByTagName("li");
var pic = document.getElementById("pic")
var pic1 = document.getElementById("pic1");
var colorone = document.getElementById("colorone");
var colortwo = document.getElementById("colortwo");
//获取tabCon下边的4个div
var divs=document.getElementById("tabCon").getElementsByTagName("div");
//当点击时调用一个函数
for(var i=0;i<tabs.length;i++){
 tabs[i].onclick=function(){
 	change(this);
 }
}
function change(obj){
	for(var i=0;i<tabs.length;i++){
	 if(tabs[i]==obj){
		 tabs[i].className="fli";
		 divs[i].className="fdiv";
		 pic.className = "pic pic1";
		 pic1.className = "pic pic2";
		 colorone.className = "now colortwo";
		 colortwo.className = "now colorone";
	}else{
		  tabs[i].className="normal";
		  divs[i].className="";
		  pic.className = "pic pic3";
		  pic1.className = "pic pic4";
		  colortwo.className = "now colortwo";
		  colorone.className = "now colorone";
	 	}
	}
} 