export default function asyncFunc() {
  /**
   * 异步函数、Generator 函数、异步 Generator 函数的类型签名
   */
  async function func(): Promise<void> {}
  function* genFunc(): Iterable<void> {}
  async function* asyncGenFunc(): AsyncIterable<void> {}
}
