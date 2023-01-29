export default function demoUnknown() {
  /* 
    unknown 类型的变量可以被任意其它类型再次赋值，
    但其只能赋值给 any 与 unknown 类型的变量
   */
  let unknownVar: unknown = 'sunshine';
  unknownVar = false;
  unknownVar = 'sunshine';
  unknownVar = {
    site: 'juejin',
  };
  unknownVar = () => {};

  // Error
  // const val1: string = unknownVar;
  // const val2: number = unknownVar;
  // const val3: () => {} = unknownVar;
  // const val4: {} = unknownVar;

  const val5: any = unknownVar;
  const val6: unknown = unknownVar;

  // unknownVar.foo() // 报错：对象类型为 unknown
  // (unknownVar as { foo: () => {} }).foo();
}
