$(function () {
  getTitle();
  // 获取标题
  function getTitle() {
    $.ajax({
      type: 'get',
      url: 'getcoupon',
      success:function(result){
        console.log(result);
        var html = template('titleTemp',result);
        $('.yhqTitle').html(html);
      }
    })
  }

})