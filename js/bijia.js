$(function () {
  // console.log('biji');
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  }); 

  var getTitleId;
  //发送请求数据，请求商品标题
  function getTitle() {
    $.ajax({
      type: 'get',
      url: 'getcategorytitle',
      dataType: 'json',
      success: function (result) {
        console.log(result);
        var html = template('bjTitleTemp', result);
        $('.bi_all_list').html(html);

        //获取当前元素的titleid
        $('.bi_all_list').on('tap', '.getTitleId', function () {
          // console.log(this);
          getTitleId = $(this).data('titleid');
          // console.log(getTitleId);
          getData(getTitleId)
        })
      }
    })
  }
  getTitle();
  //发送请求，获取商品内容

  function getData(titleid) {
    $.ajax({
      type: 'get',
      url: 'getcategory',
      dataType: 'json',
      data: {'titleid':titleid },
      success: function (data) {
        console.log(data);
        // console.log(data.result);
        // console.log({list:data.result});
        
        var html2 = template('listContentTemp',{list:data.result});
        // console.log(html2);
        $('.bi_all_list .listcontent').html(html2);
        $('.listcontentWrapper').html(html2);
      }
    })
  }

  //点击当前元素之后哦，回去当前元素的titleId
})