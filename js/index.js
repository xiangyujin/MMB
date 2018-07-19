$(function(){

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 ,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false, //是否显示滚动条
        deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
      });

     
    //   菜单栏,渲染

    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getindexmenu",
      dataType:"json",
      success:function(info){
        // console.log( info );
        $(".nav ul").html(template("tpl",info));
        // n=0,1,2..9和以后,隐藏
        $(".nav li:nth-child(n+9)").addClass("hidden");

        $(".nav li:nth-child(8)").on("click",function(e){
              
            //    console.log( "aa" );
            $(".nav li:nth-child(n+9)").toggleClass("hidden");
        })
        
      }

    })

   
    // 推荐的内容
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        dataType:"json",
        success:function(info){
          console.log( info );
       
          $(".info").html(template("tpl2",info));

          

        }


    })
   
    // 回到顶部
     
    $(".top").on("click",function(){

        mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
    })

})