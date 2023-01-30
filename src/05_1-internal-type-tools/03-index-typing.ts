export default function index_typing() {
  /*
    索引签名类型
  */
  // 快速声明一个键值类型一致的类型结构：
  interface AllStringTypes {
    [key: string]: string;
  }
  type AllStringTypes1 = {
    [key: string]: string;
  };

  type PropType1 = AllStringTypes['sunshine']; // string
  type PropType2 = AllStringTypes['24']; // string
  const foo: AllStringTypes = {
    sunshine: '24',
    [Symbol('ddd')]: 'symbol',
    // "sunshine": '24',
  };

  // 索引签名类型也可以和具体的键值对类型声明并存，但这时这些具体的键值类型也需要符合索引签名类型的声明：
  interface AllStringTypes2 {
    PropA: string;
    // 类型“string”的索引签名重复
    // [key: string]: boolean;
  }
  interface StringOrBooleanTypes {
    PropA: number;
    PropB: boolean;
    // 符合即指子类型，因此自然也包括联合类型
    [key: string]: number | boolean;
  }

  /*
    索引签名类型的一个常见场景是在重构 JavaScript 代码时，为内部属性较多的对象声明一个 any 的索引签名类型，
    以此来暂时支持对类型未明确属性的访问，并在后续一点点补全类型：
  */
  interface AnyTypeHere {
    [key: string]: any;
  }
  const foo1: AnyTypeHere['sunshine'] = 'any value';

  /* 
    索引类型查询
    keyof 的产物必定是一个联合类型
    这里并不会将数字类型的键名转换为字符串类型字面量，而是仍然保持为数字类型字面量。
  */
  interface Foo {
    sunshine: 1;
    24: 24;
  }
  type FooKeys = keyof Foo; // 'sunshine' | 24
  const name: FooKeys = 'sunshine';
  const age: FooKeys = 24;
  // type FooKeys1 = Object.keys(Foo).join(" | ");

  /* 
    索引类型访问
    访问方式与返回值均是类型
  */
  interface NumberRecord {
    [key: string]: number;
  }
  type PropType = NumberRecord[string]; // number

  interface Foo1 {
    PropA: number;
    PropB: boolean;
  }
  // 索引类型查询的本质其实就是，通过键的字面量类型（'propA'）访问这个键对应的键值类型（number）
  type PropAType = Foo1['PropA']; // number
  type PropBType = Foo1['PropB']; // boolean

  interface Foo2 {
    PropA: number;
    PropB: boolean;
    PropC: string;
  }
  type PropTypeUnion = Foo2[keyof Foo2]; // string | number | boolean

  // 类型“Foo2”没有匹配的类型“string”的索引签名。
  // type PropCtype = Foo2[string];
}
