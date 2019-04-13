$(function () {
  //路由拦截
  var baseURL = 'http://193.112.55.79:9090/api/';
  // zepto里面的路由拦截
  $.ajaxSettings.beforeSend = function (xhr, obj) {
    obj.url = baseURL + obj.url;
  }
  //先动态扩展zepto成员,在全局使用$.getParameter方法
  $.extend($, {
    getParameter: function (url) {
      var obj = {}
      // location.search:url中?及?后面的内容
      url = url.substring(1) //cid=5&name=jack
      // 先按&拆分
      var arr = url.split('&') //['cid=5','name=jack']
      // 遍历进行第二次拆分
      for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('=') //['cid',5]
        obj[temp[0]] = temp[1] // obj['cid'] = 5
      }
      return obj
    }
  })
})