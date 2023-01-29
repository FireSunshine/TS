export default function demoArguments() {
  /**
   * 参数
   * 使用 ? 描述一个可选属性
   */
  // 在函数逻辑中注入可选参数默认值
  function foo1(name: string, age?: number): number {
    const inputAge = age || 18;
    return name.length + inputAge;
  }
  // 直接为可选参数声明默认值
  function foo2(name: string, age: number = 18): number {
    const inputAge = age;
    return name.length + inputAge;
  }
  /**
   * 可选参数必须位于必选参数之后。毕竟在 JavaScript 中函数的入参是按照位置（形参），而不是按照参数名（名参）进行传递。
   * 当然，我们也可以直接将可选参数与默认值合并，但此时就不能够使用 ? 了，因为既然都有默认值，那肯定是可选参数啦
   */
  function foo3(name: string, age: number = 18): number {
    const inputAge = age || 18;
    return name.length + inputAge;
  }

  /**
   * rest 参数的类型标注也比较简单，由于其实际上是一个数组
   */
  function foo4(arg1: string, ...rest: any[]) {}
  function foo5(arg1: string, ...rest: [number, boolean]) {}
  foo5('sunshine', 24, true);
}
