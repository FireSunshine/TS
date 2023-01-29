export default function demoClass() {
  // 类声明
  class Foo {
    prop: string;

    constructor(inputProp: string) {
      this.prop = inputProp;
    }

    print(addon: string): void {
      console.log(`${this.prop} and ${addon}`);
    }

    get propA(): string {
      return `${this.prop}+A`;
    }

    set propA(value: string) {
      this.prop = `${value}+A`;
    }
  }

  // 类表达式
  const _Foo = class {
    prop: string;

    constructor(inputProp: string) {
      this.prop = inputProp;
    }

    print(addon: string): void {
      console.log(`${this.prop} and ${addon}`);
    }

    get propA(): string {
      return `${this.prop}+A`;
    }

    set propA(value: string) {
      this.prop = `${value}+A`;
    }
  };

  /**
   * 修饰符
   * public ：此类成员在类、类的实例、子类中都能被访问
   * private ：此类成员仅能在类的内部被访问
   * protected ：此类成员仅能在类与子类中被访问
   * readonly
   */
  class MofifiedFoo {
    private prop: string;

    constructor(inputProp: string) {
      this.prop = inputProp;
    }

    protected print(addon: string): void {
      console.log(`${this.prop} and ${addon}`);
    }

    public get propA(): string {
      return `${this.prop} + A`;
    }

    public set propA(value: string) {
      this.propA = `${value}+A`;
    }
  }

  class Foo2 {
    constructor(public arg1: string, private arg2: boolean) {}
  }

  /**
   * 静态成员
   */
  class Foo3 {
    // 类的内部静态成员无法通过 this 来访问，需要通过 Foo.staticHandler 这种形式进行访问
    static staticHandler() {}
    public instanceHandler() {}
  }
  /**
   * 👇
   * 静态成员直接被挂载在函数体上，而实例成员挂载在原型上，这就是二者的最重要差异：静态成员不会被实例继承，它始终只属于当前定义的这个类（以及其子类）。而原型对象上的实例成员则会沿着原型链进行传递，也就是能够被继承。
   */
  var Foo4 = /** @class */ (function () {
    function Foo() {}
    Foo.staticHandler = function () {};
    Foo.prototype.instanceHandler = function () {};
    return Foo;
  })();

  class Utils {
    public static identifier = 'sunshine';

    public static makeUHappy() {
      Utils.studyWithU();
    }

    public static studyWithU() {}
  }
}
