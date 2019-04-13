$(function () {

  function render(pageid) {
    $.ajax({
      type: 'get',
      url: 'getmoneyctrl',
      data: {
        "pageid":pageid
      },
      success: function (result) {
        var html = template('sqkProListTemp', result);
        $('.sqk_product_list').html(html);
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
      }
    })
  }
render(0);
})