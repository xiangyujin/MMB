$(function(){

    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    
    //2.点击返回顶部
      $('.top').on("click", function () {
        mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100);//100毫秒滚动到顶
      })
     
           // 监听tap事件，解决 a标签 不能跳转页面问题!---------------------------------------
  mui('body').on('tap','a',function(){document.location.href=this.href;});



    //发送请求
     //大标题
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        dataType:"json",
        success:function(info){
        //   console.log( info );
       
          $(".category .title").html(template("tpl",info));

          

        }

    })
    
    //发送请求小标题
     
    mui(".category .title").on("tap",".btn-son",function(){
       
        // console.log( "aaa" );
        var id=$(this).data("id");
       
        // console.log( id );
        //发送小标题请求
         
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategory",
            data:{
                titleid:id,
              
            },
            dataType:"json",
            success:function(info){
              console.log( info );
              $('.mui-collapse-content').html(template('tpl2',info))

    
            }
    
        })
  
    })



})