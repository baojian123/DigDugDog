console.log('your first module');
//es6语法 模块化
const num=20;
const arr=[1,2,3,4];
const obj={//定义对象
  a:0,
  b:function(){}
}
const foo=()=>{//定义函数
  const a=0;
  const b=20;
  return a+b;
}

export default{//模块输出
  num,
  arr,
  obj,
  foo
}

export const bar=()=>{}
export const zcar=12345;
