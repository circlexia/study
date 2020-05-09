// 把一个多参数的函数,转化为但参数函数
// 好处
// 代码复用，减少维护成本
// 尽可能的函数化，便于阅读
function add(...args){
  return args.reduce((a,b)=>a+b)
}
function currying(fn){
  let args = [];
  return function _c(...newArgs){
    if(newArgs.length){
      args = [...args,...newArgs]
      return _c
    }else{
      return fn.apply(this,args)
    }
  }
}
let addCurry = currying(add);
addCurry(1)(2)(4,5)();