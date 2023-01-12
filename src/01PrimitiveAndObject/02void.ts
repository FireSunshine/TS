export default function demoVoid() {
  // void 用于描述一个内部没有 return 语句，或者没有显式 return 一个值的函数的返回值

  function func1() {}
  function func2(): void {
    return;
  }
  function func3(): void {
    return undefined;
  }
  function func4(): void {
    // return 'str' 报错 ❌
  }

  const voidVar1: void = undefined;
  // const voidVar2: void = null;  // 需要关闭 strictNullChecks
}
