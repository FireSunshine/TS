// 接口结构
interface IDescription {
  readonly name: string;
  age: number;
  male?: boolean; // boolean | undefined
  func?: Function; // 可选
}

export default function demoObject() {
  const obj1: IDescription = {
    name: 'sunshine',
    age: 24,
    male: true,
    // 无需实现 func 也是合法的
  };

  // ❌ 不能调用可能是“未定义”的对象
  // obj1.func();

  // 但可选属性标记不会影响对这个属性进行赋值
  obj1.male = false;
  obj1.func = () => {};

  // readonly 防止对象的属性被再次赋值
  // ❌ 无法分配到 "name" ，因为它是只读属性
  // obj1.name = 'sun'

  /* 只读 数组/元组的类型上，将不再具有 push、pop 等方法（即会修改原数组的方法） */
}
