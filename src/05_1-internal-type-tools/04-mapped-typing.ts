export default function mapped_typing() {
  type Stringify<T> = {
    [K in keyof T]: string;
  };
  /* 
    👆
    这个工具类型会接受一个对象类型（假设我们只会这么用），
    使用 keyof 获得这个对象类型的键名组成字面量联合类型，
    然后通过映射类型（即这里的 in 关键字）将这个联合类型的每一个成员映射出来，并将其键值类型设置为 string。
    👇
  */
  interface Foo {
    prop1: string;
    prop2: number;
    prop3: boolean;
    prop4: () => void;
  }

  type StringifiedFoo = Stringify<Foo>;

  // 👇 等价于
  interface _StringifiedFoo {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
  }

  type Clone<T> = {
    [k in keyof T]: T[k];
  };

  type CloneType = Clone<Foo>;
}
