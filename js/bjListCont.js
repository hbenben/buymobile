$(function () {

  //先接受url拼接过来的参数


  //API需要传入 参数categoryid，pageid
  // var data = {
  //   'categoryid': 0,
  //   // 'pageid': 1
  // }
console.log($.getParameter(location.search).id);

 
  $.ajax({
    type: 'get',
    url: 'getproductlist',
    data: {
      'categoryid': $.getParameter(location.search).id
    },
    success: function (result) {
      console.log(result);
      var html = template('proListTemp', result);
      $('.produce_wrapper').html(html);
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    }
  })
})