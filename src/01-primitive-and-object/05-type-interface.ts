export default function typeAndInterface() {
  interface IObjectStruct {
    name: string;
    age: number;
    male: boolean;
  }

  // type（Type Alias，类型别名)
  type PossibleSource = 'juejin' | 'zhihu' | 'segmentfault';

  type Handler = () => Promise<void>;

  /* 
    推荐的方式是，interface 用来描述对象、类的结构，而类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型。
    但大部分场景下接口结构都可以被类型别名所取代，因此，只要你觉得统一使用类型别名让你觉得更整齐。
  */
}
