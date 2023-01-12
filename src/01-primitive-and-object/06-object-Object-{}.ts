export default function objectAndObject() {
  /*  JS原型链的顶端是 Object 以及 Function，这也就意味着所有的原始类型与对象类型最终都指向 Object，
      在 TypeScript 中就表现为 Object 包含了所有的类型
  */
  // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
  // const tmp1: Object = undefined;
  // const tmp2: Object = null;
  // const tmp3: Object = void 0;

  const tmp4: Object = 'sunshine';
  const tmp5: Object = 599;
  const tmp6: Object = { name: 'sunshine' };
  const tmp7: Object = () => {};
  const tmp8: Object = [];

  // 和 Object 类似的还有 Boolean、Number、String、Symbol，这几个装箱类型（Boxed Types）
  // 仅在关闭 strictNullChecks 时成立
  // const tmp9: String = undefined;
  // const tmp10: String = null;
  // const tmp11: String = void 0;
  // const tmp12: String = 'sunshine';

  // 以下不成立，因为不是字符串类型的拆箱类型
  // const tmp13: String = 599; // X
  // const tmp14: String = { name: 'sunshine' }; // X
  // const tmp15: String = () => {}; // X
  // const tmp16: String = []; // X

  // object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些
  // 仅在关闭 strictNullChecks 时成立
  // const tmp17: object = undefined;
  // const tmp18: object = null;
  // const tmp19: object = void 0;

  // const tmp20: object = 'sunshine'; // X 不成立，值为原始类型
  // const tmp21: object = 599; // X 不成立，值为原始类型

  const tmp22: object = { name: ' sunshine' };
  const tmp23: object = () => {};
  const tmp24: object = [];

  // {} 意味着任何非 null / undefined 的值
  // 仅在关闭 strictNullChecks 时成立
  // const tmp25: {} = undefined;
  // const tmp26: {} = null;
  // const tmp27: {} = void 0; // void 0 等价于 undefined

  const tmp28: {} = 'sunhisne';
  const tmp29: {} = 599;
  const tmp30: {} = { name: 'sunhisne' };
  const tmp31: {} = () => {};
  const tmp32: {} = [];

  // ❌ 类型“{}”上不存在属性“age”。
  // tmp30.age = 18
}
