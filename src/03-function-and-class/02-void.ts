export default function demoVoid() {
  /**
   * 没有返回值（即没有调用 return 语句）的函数，其返回类型应当被标记为 void 而不是 undefined，即使它实际的值是 undefined
   */
  // 没有调用 return 语句
  function foo(): void {}

  // 调用了 return 语句， 但没有返回值
  function bar(): void {
    return undefined; // return
  }

  /**
   * 在 TypeScript 中，undefined 类型是一个实际的、有意义的类型值，而 void 才代表着空的、没有意义的类型值
   */
}
