interface IRes {
  code: number;
  status: string;
  data: any;
}
// 类型更加精确
interface Res {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'failure';
  data: any;
}

export default function literal() {
  /**
   * 字面量
   */
  // 字面量类型主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型，它们可以直接作为类型标注
  const str: 'sunshine' = 'sunshine';
  const age: 24 = 24;
  const bool: true = true;

  // 字面量类型比原始类型更精确
  // const str1: 'sunshine' = 'sunshine24'; ❌ 报错
  const str2: string = 'sunshine';
  const str3: string = 'sunshine24';

  // 结合联合类型
  interface Tmp1 {
    bool: true | false;
    num: 1 | 2 | 3;
    str: 'sun' | 'sunshine';
  }

  // 联合类型 一组类型的可用集合
  interface Tmp2 {
    mixed: true | string | 24 | {} | (() => {}) | (1 | 2);
  }
  /* 
    这里有几点需要注意的：
    对于联合类型中的函数类型，需要使用括号()包裹起来
    函数类型并不存在字面量类型，因此这里的 (() => {}) 就是一个合法的函数类型
   可以在联合类型中进一步嵌套联合类型，但这些嵌套的联合类型最终都会被展平到第一级中
  */

  /**
   * 联合类型的常用场景之一是通过多个对象类型的联合，来实现手动的互斥属性
   * 即这一属性如果有字段1，那就没有字段2
   */
  interface Tmp3 {
    user:
      | {
          vip: true;
          expires: string;
        }
      | {
          vip: false;
          expires: string;
        };
  }

  var tmp: Tmp3 = {
    user: {
      vip: true,
      expires: '2023-1-1',
    },
  };

  // 类型守卫与类型控制流
  if (tmp.user.vip) {
    console.log(tmp.user.expires);
  }

  /**
   * 通过类型别名来复用一组字面量联合类型
   */
  type code = 10000 | 10001 | 50000;
  type status = 'success' | 'failure';

  /**
   * 对象字面量类型, 即：对象的值全都为字面量值
   */
  interface objTemp {
    obj: {
      name: 'sunshine';
      age: 18;
    };
  }

  const objTemp: objTemp = {
    obj: {
      name: 'sunshine',
      age: 18,
    },
  };

  /**
   * 无论是原始类型还是对象类型的字面量类型，它们的本质都是类型而不是值
   * 它们在编译时同样会被擦除，同时也是被存储在内存中的类型空间而非值空间。
   */
}
