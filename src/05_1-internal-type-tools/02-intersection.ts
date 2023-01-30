export default function intersection() {
  /* 
    联合类型与交叉类型
    按位或 |, 只需要符合成员之一
    按位与 &, 需要严格符合每一位成员
  */

  interface NameStruct {
    name: string;
  }
  interface AgeStruct {
    age: number;
  }
  // 符合这里的所有类型，才可以说实现了这个交叉类型，即 A & B，需要同时满足 A 与 B 两个类型才行。
  type ProfileStruct = NameStruct & AgeStruct;

  const profile: ProfileStruct = {
    name: 'sunshine',
    age: 24,
  };

  // 上面是对象的合并， 原始类型合并👇
  /* 
    不存在既是 string 又是 number 的类型，never根本不存在的类型
  */
  type StrAndNum = string & number; // never

  // 对于对象类型的交叉类型，其内部的同名属性类型同样会按照交叉类型进行合并
  type Struct1 = {
    primitiveProp: string;
    objectProp: {
      name: string;
    };
  };
  type Struct2 = {
    primitiveProp: number;
    objectProp: {
      age: number;
    };
  };
  type Composed = Struct1 & Struct2;
  type PrimitivePropType = Composed['primitiveProp']; // never
  type ObjectPropType = Composed['objectProp']; // { name: string; age: number; }

  type UnionIntersection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2
  type UnionIntersection2 = (string | number | symbol) & string; // string
}
