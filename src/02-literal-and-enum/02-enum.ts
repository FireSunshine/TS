export default function demoEnum() {
  enum Pageurl {
    Home_Page_Url = 'url1',
    Setting_Page_Url = 'url2',
    Share_Page_Url = 'url3',
  }

  const home = Pageurl.Home_Page_Url;

  /* 如果没有声明枚举的值，它会默认使用数字枚举，并且从 0 开始，以 1 递增： */
  enum Items {
    Foo,
    Bar,
    Baz,
  }
  console.log(Items.Foo, Items.Bar, Items.Baz); // 0 1 2

  /* 如果只为某一个成员指定了枚举值，那么之前的未赋值的成员仍然会从 0 开始递增， 之后的成员则会开始从枚举值递增 */
  enum Items1 {
    Foo, // 0
    Bar = 24,
    Baz,
  }
  console.log(Items1.Foo, Items1.Bar, Items1.Baz); // 0 24 25

  /* 延迟求值的枚举值 */
  const returnNum = () => 100 + 499;
  enum Items2 {
    Foo = returnNum(),
    Bar = 599,
    Baz,
  }
  console.log(Items2.Foo, Items2.Bar, Items2.Baz); // 599 599 600

  enum Items3 {
    Baz,
    Foo = returnNum(),
    Bar = 599,
  }
  console.log(Items3.Baz, Items3.Foo, Items3.Bar); // 0 599 599

  /* 使用字符串枚举值和数字枚举值 */
  enum Mixed {
    Num = 24,
    Str = 'sunshine',
  }

  /**
   * 枚举和对象的重要差异在于，对象是单向映射的，我们只能从键映射到键值。
   * 而枚举是双向映射的，即可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员
   */

  const fooValue = Items.Foo;
  const fooKey = Items[0];
  console.log(fooValue, fooKey); // 0 "Foo"

  /**
   * 补充：
   * let 声明，只需要推导至这个值从属的类型即可。
   * 而 const 声明的原始类型变量将不再可变，因此类型可以直接一步到位收窄到最精确的字面量类型，但对象类型变量仍可变（但同样会要求其属性值类型保持一致）
   */
  let name = 'sunshine';
  const subName = 'sunshine';

  const info = {
    name: 'sunshine',
    age: '24',
    profile: {
      job: 'fe',
    },
  };
}
