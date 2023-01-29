export default function demoFunction() {
  /**
   * 函数的类型
   * 就是描述了函数入参类型与函数返回值类型
   */

  // 函数声明
  function foo(name: string): number {
    return name.length;
  }
  // 表达式声明
  const foo1 = (name: string): number => {
    return name.length;
  };
  const foo2: (name: string) => number = function (name) {
    // 可读性差，不推荐
    return name.length;
  };

  /* 👆 抽离函数声明 */
  // 联合类型
  type FunFoo = (name: string) => number;
  // 使用interface
  interface FuncFooStruct {
    (name: string): number;
  }
  const foo3: FuncFooStruct = (name) => {
    return name.length;
  };
}
