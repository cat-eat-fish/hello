//点击叉号，文本框中清零
		$('.add-ch').find('i').click(function(){
			var ishave=$('input').val();
			if(ishave.length>0){
				$(this).find('input').val("");
			}
		})
		//输入框获得焦点，显示叉号
		$('input').focus(function(){
			$(this).siblings('.iconfont').css("display","block");
		})
		//输入框失去焦点，隐藏叉号 ----需要改
		$('input').blur(function(){
			$(this).siblings('.iconfont').css("display","none");
		})