export default function demoArray() {
  // TypeScript 中有两种方式来声明一个数组类型：
  const arr1: string[] = [];
  const arr2: Array<string> = [];

  // 元组（Tuple）
  const arr3: string[] = ['s', 'u', 'n'];
  console.log(arr3[699]); // undefined
  // 如下 👇
  const arr4: [string, string, string] = ['s', 'u', 'n'];
  // console.log(arr4[699]); // 编辑器提示报错 ❌

  // 对应位置上的类型
  const arr5: [string, number, boolean] = ['sunshine', 24, true];

  // 可选
  let arr6: [string, number?, boolean?] = ['sunshine', , ,];
  arr6 = ['sunshine'];

  /* 对于标记为可选的成员，在 --strictNullCheckes 配置下会被视为一个 string | undefined 的类型 */
  type TupleLength = typeof arr6.length; // 3 | 1 | 2
  // 这个元组的长度可能为 1、2、3。

  // 具名元组
  const arr7: [name: string, age: number, male: boolean] = ['sunshine', 24, true];

  // 实际上除了显式地越界访问，还可能存在隐式地越界访问，如通过解构赋值的形式：
  const [ele1, ele2, ...rest] = arr1;
  // 如下 👇
  // 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。
  // const [name, age, male, other] = arr5; // 报错 ❌

  const arr8: readonly [string, number, boolean, string?] = ['sunshine', 24, true];
  // ❌ 类型“readonly [string, number, boolean, (string | undefined)?]”上不存在属性“push”
  // arr8.push
}
