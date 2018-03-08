//搜索框得到失去焦点时的变化
		$("#search").mousemove(function(){
			$(this).focus();
			if(this.value.length!=0){
				this.value='';
			}
		})
		$("#search").blur(function(){
			this.value='搜“药”，体验与众不同';
		})
		
		//轮播
		$(function(){
				//初始化
				$(".car-img ul li").first().show();
				$(".car-dian ul li").first().addClass("active")
				//手动控制图片的淡入淡出
				$(".car-dian ul li").mouseover(function(){
					$(this).addClass("active").siblings("li").removeClass("active");
					var index = $(this).index();
					i=index
					$(".car-img ul li").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
				})	
				//通过时间间隔函数，控制图片的显示
				var i=0;
				var t = setInterval(move,5000);
				//动画运行核心函数
				function move(){
					i++
					if(i==2){
					   i=0;
					   }
					$(".car-dian ul li").eq(i).stop(true,true).addClass("active").siblings().removeClass("active")
					$(".car-img ul li").eq(i).stop(true,true).fadeIn().siblings().fadeOut();
				}
				//鼠标移入out元素时，停掉动画
				$(".car").hover(function(){
					clearInterval(t);
				},function(){
					t = setInterval(move,5000);
				})		
				//点击左边执行动画
				function moveL(){
					i--
					if(i==-1){
					   i=1;
					   }
					$(".car-dian ul li").eq(i).stop(true,true).addClass("active").siblings().stop(true,true).removeClass("active")
					$(".car-img ul li").eq(i).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
			
				}
				$(".car-lr .car-lr-l").click(function(){
					moveL();
					
				})
				//点击右边执行动画
				$(".car-lr .car-lr-r").click(function(){
					move();
				})		
			})