export default function type_alias() {
  /* 类型别名 */

  // 抽离联合类型
  type StatusCode = 200 | 301 | 400 | 500 | 502;
  type PossibleDataTypes = string | number | (() => unknown);
  const status: StatusCode = 502;

  // 抽离函数类型
  type Handler = (e: Event) => void;
  const clickHandler: Handler = (e) => {};
  const moveHandler: Handler = (e) => {};
  const dragHandler: Handler = (e) => {};

  // 声明对象类型
  type ObjType = {
    name: string;
    age: number;
  };

  // 工具类型
  type Factototy<T> = T | number | string;
  type FactoryWithBool = Factototy<boolean>;
  const foo: FactoryWithBool = true;

  // 泛型参数的名称（上面的 T ）也不是固定的
  type _Factory<NewType> = NewType | number | string;

  type MaybeNull<T> = T | null;
  function process(input: MaybeNull<{ handler: () => {} }>) {
    input?.handler();
  }

  type MaybeArry<T> = T | T[];
  function ensureArray<T>(input: MaybeArry<T>): T[] {
    return Array.isArray(input) ? input : [input];
  }
}
