// 实现函数节流
throttle = (fn,wait) =>{
  var pre = Date.now();
  var context = this;
  return function(){
    var args = arguments;
    var now = Date.now();
    if(now - pre >= wait){
      fn.apply(context,args);
      pre = Date.now();
    }
  };
};