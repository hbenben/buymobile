$(function () {
    console.log(2);
    $.ajax({
      type:'get',
      url:'http://193.112.55.79:9090/api/getcoupon',
      success:function (result) {
        console.log(result);
        var html = template('couponTemp',result)
        $('.couponUl').html(html)
      }
      
    })

})