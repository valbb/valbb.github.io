
		$(function(){
		let feild = $('.feild');
		let wrap2 = $('.wrap2');
		let wrap = $('.wrap');
		let btn = $('.btn');
		let cont = $('.cont');
		feild.addClass('addfeild');
		wrap2.addClass('addwrap2');
		wrap.addClass('addwrap');
		cont.addClass('addcont');
		btn.each(function(i)
		{
		btn.eq(i).on("tap",frr);
		});
		function frr(i){
			feild.removeClass('addfeild');
			wrap2.removeClass('addwrap2');
			wrap.removeClass('addwrap');
			cont.removeClass('addcont');
				for(var h=-4;h<4;h++)
					{
						if(h==0){h++;}
						cont.eq(i+h).hide();
						btn.eq(i+h).removeClass('changecolor');	
					}
		}
			
			btn.each(function(i)
			{
				btn.eq(i).click(function(){
					cont.eq(i).show();
					btn.eq(i).addClass('changecolor');
					for(var h=-4;h<4;h++)
					{
						if(h==0){h++;}
						cont.eq(i+h).hide();
						btn.eq(i+h).removeClass('changecolor');	
					}
				});
			});
			if($(window).width()<=768){
				btn.each(function(i)
			{
				cont.eq(i).on("swipeleft",function(){
					if(i==4){return false;}
					else if(i<4){
					cont.eq(i+1).show(300);
					btn.eq(i+1).addClass('changecolor');
					for(var g=-2;g<3;g++)
					{
						if(g==1)g++;
						cont.eq(i+g).hide(300);
						btn.eq(i+g).removeClass('changecolor');

					}
					}					
				});
			});
				btn.each(function(i)
			{
				cont.eq(i).on("swiperight",function(){
					if(i==1){return false;}
					else if(i>1){
					cont.eq(i-1).show(300);
					btn.eq(i-1).addClass('changecolor');
					for(var g=-2;g<3;g++)
					{
						if(g==-1)g++;
						cont.eq(i+g).hide(300);
						btn.eq(i+g).removeClass('changecolor');
					}	
					}
				});
			});	
		}	
		if($(window).width()>=768){
			$('.t').hide();
			$('.bigword').css('width','100%');
			$('.lorem').css('display','block');
			$('.bigword').each(function(i){
				$('.bigword').eq(i).click(function(){

				$('.bigword').eq(i).css('width','40%');
				$('.lorem').eq(i).css('display','flex');
				$('.t').eq(i).show(1000);	
			});
			});
		}
	});
