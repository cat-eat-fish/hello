/**
 * Created by lenovo on 2018/3/14.
 */

    //swiper滑动插件
var swiper = new Swiper('.swiper-container');
//lozy load 懒加载插件
$('img.lazy').lazyload({
    effect:'fadeIn',	//图片加载方式
    threshold : 200,	//距离窗口多少时加载
    placeholder:'img/113.gif'	//图片未加载时，执行的图片
})

//$.ajax()方法获取数据
$('.ceathimg').click(function(e){
    var obj={};
    $('input[type=text]').each(function(index,val){
        obj[$(val).attr('name')]=$(val).val();
    });
    $.ajax({
        url:'search.php',
        type:'get',
        data:obj,
        dataType:'text',
        async:true,
        success:function(e){
            console.log(e);
        }
    })
})