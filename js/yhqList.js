$(function(){

  
  function List(){
    console.log($.getParameter(location.search).id);
    $.ajax({
      type:'get',
      dataType:'json',
      url: 'getcouponproduct',
      data: {'couponId':$.getParameter(location.search).id},
      success:function(result){
        console.log(result);
        
      }
    })
  }
  List();

})