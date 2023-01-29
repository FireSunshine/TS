export default function demoAny() {
  /* 
    any 任意类型
    无拘无束的“任意类型”，它能兼容所有类型，也能够被所有类型兼容
    console.log 方法就能够接受任意类型的参数
  */

  // foo、bar 均为 any
  let foo;
  // tsconfig 中启用了 noImplicitAny 会报错
  // function func(foo, bar) {}

  // 被标记为 any 类型的变量可以拥有任意类型的值
  let anyVar: any = 'sunshine';
  anyVar = false;
  anyVar = 'sunshine';
  anyVar = {
    site: 'jeujin',
  };
  anyVar = () => {};

  // 标记为具体类型的变量也可以接受任何 any 类型的值
  const val1: string = anyVar;
  const val2: number = anyVar;
  const val3: () => {} = anyVar;
  const val4: {} = anyVar;

  // 类型推导与检查是被完全禁用的
  let anyVar1: any = null;
  // anyVar1.foo.bar.baz();
  // anyVar[0][1][2].prop1;
}
