$(function () {
  // 初始化区域滚动
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false //是否显示滚动条，默认为True

  });

  $('.more').on('tap', function () {
    $('.mmy_nav ul').toggleClass('toggle')
  })

  $.ajax({
    type: 'get',
    url: 'http://193.112.55.79:9090/api/getmoneyctrl',
    success: function (result) {
      console.log(result);
      var html = template('proListTemp', result)
      $('.productList').html(html)
    }
  })



})