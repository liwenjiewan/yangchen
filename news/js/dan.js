var slider_count=4;
$(".slider_p_div").hide();
$("#slider_p0").show();
$(".hi_btn").hide();
$("#hi_btn0").show();
$(".img_hover").animate({bottom:'10px'});
var slider_i=1;
var m_over=true;

function zx_slider(){
	if(m_over){
		if(slider_i<0){slider_i=slider_count;}
		//p
		$(".slider_p_div").hide();
		$("#slider_p"+slider_i).show();
		//p end
		//hi_btn
		$(".hi_btn").hide();
		$("#hi_btn"+slider_i).show();
		//hi_btn end
		//btn
		$(".btnbox img").stop(true,true);
		$(".btnbox img").removeClass("img_hover");
		$(".btnbox img").animate({bottom:'0px'},200);
		$("#btn_img"+slider_i).addClass("img_hover");
		$("#btn_img"+slider_i).animate({bottom:'10px'},200);
		//btn end
		$(".imgbox").stop();
		$(".imgbox").animate({left:'-750'*slider_i+'px'});
		if(slider_i<slider_count){
			slider_i++;	
		}else{
			slider_i=0;
		}
	}
}

$(".lbtn").click(function(){
	m_over=true;
	if(slider_i==0){slider_i=slider_count-1}else{slider_i=slider_i-2;}
	zx_slider();
	m_over=false;
});

$(".rbtn").click(function(){
	m_over=true;
	zx_slider();
	m_over=false;
});

function btn_m_over(btn_i){
	if(slider_i-1!=btn_i){
		m_over=true;
		slider_i=btn_i;
		zx_slider();
		m_over=false;
	}
}

zx_timer=setInterval("zx_slider();",5000); 
$(".zx_slider").mouseover(function(){
	m_over=false;
});
$(".zx_slider").mouseout(function(){
	m_over=true;
});