export default function demoNever() {
  /* 
    never 类型不携带任何的类型信息
   */
  type UnionWithNever = 'sunshine' | 599 | true | void | never;

  // 抛出错误的函数
  function justThrow(): never {
    throw new Error();
  }

  // 在类型流的分析中，一旦一个返回值类型为 never 的函数被调用，那么下方的代码都会被视为无效的代码（即无法执行到）
  function foo(input: number) {
    if (input > 1) {
      justThrow();
      // 等同于 return 语句后的代码，即 Dead Code
      // const name = "linbudu";
    }
  }
}
