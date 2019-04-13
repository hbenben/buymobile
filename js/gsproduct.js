$(function () {
  //初始化区域滚动
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005,
    indicators: false
  });

  // 给导航栏添加点击事件
  var index;
  $('.filter >ul>li').on('tap',function(e){
    $(this).addClass('active').siblings().removeClass("active");

    e.preventDefault();
    index = $('.filter >ul>li').index(this)

    // $('.popbox').eq(index).show().siblings().hide()

    $('.popbox').eq(index).toggleClass('active').siblings().removeClass('active')

    // $('.popbox').toggle()
  })

//  设置全局变量
  var shopid=0
  var areaid=0

  //  动态渲染
      render()

  $('#shop > ul > li > a').on('tap',function () {
     shopid = $(this).data("shopid");
    console.log(shopid);
    var shopName = $(this).html();
    $('.filter > ul >li').eq(0).find('a').html(shopName + "<i></i>");

    render()
    $('.popbox').eq(index).toggleClass('active')

  })

  $('#area > ul > li > a').on('tap',function () {
    areaid = $(this).data('areaid')
    console.log(areaid);
    var areaName = $(this).html();
    console.log(areaName)
    $('.filter > ul >li').eq(1).find('a').html(areaName.split("（")[0]);

    render()
    $('.popbox').eq(index).toggleClass('active')
  })



function render(){
  $.ajax({
    type:'get',
    url:'http://193.112.55.79:9090/api/getgsproduct?shopid='+shopid+'&areaid='+areaid+'',
    success:function (result) {
      var html = template('goodsTemp',result)
      $('.good_list').html(html)
    }
  })
}






})