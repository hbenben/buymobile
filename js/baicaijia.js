$(function () {

    groupList()
    goodtemp(0)





    function groupList() {
        $.ajax({
            type: 'get',
            url: 'http://193.112.55.79:9090/api/getbaicaijiatitle',
            dataType: 'json',
            success: function (result) {
                // console.log(result);
                var data = result.result;
                var html = template('grouptemp', { arr: data })
                $('.gorupLists').html(html)

            }
        })
    }


    

    var titid
    $('.nav_box').on('tap', '.bcj_nav', function () {
        // console.log(111);
        // console.log(this);


        titid = $(this).data('id');
        console.log(titid);
        goodtemp(titid)
    })



    function goodtemp(titid) {
        
        $.ajax({
            type: 'get',
            data: { "titleid": titid },
            url: 'http://193.112.55.79:9090/api/getbaicaijiaproduct',
            dataType: 'json',

            success: function (result) {
                console.log(result);
                var html = template('goodstemp',result);
                $('.goodsItem').html(html);


            }
        })
    }

})




