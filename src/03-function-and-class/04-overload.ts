export default function overload() {
  /**
   * 重载
   */
  // 在某些逻辑较复杂的情况下，函数可能有多组入参类型和返回值类型
  function func(foo: number, bar?: boolean): string | number {
    if (bar) {
      return String(foo);
    } else {
      return foo * 24;
    }
  }
  // 👆 函数重载签名
  function func1(foo: number, bar: true): string; // 重载签名一
  function func1(foo: number, bar?: false): number; // 重载签名二
  // 函数的实现签名 包含重载签名的所有可能情况ss
  function func1(foo: number, bar?: boolean): string | number {
    if (bar) {
      return String(foo);
    } else {
      return foo * 24;
    }
  }
  const res1 = func1(24); // number
  const res2 = func1(24, true); // string
  const res3 = func1(24, false); // number
}
