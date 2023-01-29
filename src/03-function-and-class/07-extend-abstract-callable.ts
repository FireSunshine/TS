export default function extend_abstract_callable() {
  /**
   * 继承
   */
  class Base {
    print() {}
  }

  class Derived extends Base {
    print() {
      super.print();
      // ...
    }
  }

  /**
   * 抽象类 abstract
   */
  abstract class AbsFoo {
    abstract absProp: string;
    abstract get absGetter(): string;
    abstract absMethod(name: string): string;
  }
  class Foo implements AbsFoo {
    absProp: string = 'sunshine';

    get absGetter() {
      return 'sunshine';
    }

    absMethod(name: string) {
      return name;
    }
  }
  interface FooStruct {
    absProp: string;
    get absGetter(): string;
    absMethod(input: string): string;
  }

  class Foo1 implements FooStruct {
    absProp: string = 'sunshine';

    get absGetter(): string {
      return 'sunshine';
    }
    absMethod(name: string): string {
      return name;
    }
  }
}
