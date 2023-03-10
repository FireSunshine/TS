import * as TS01 from './01-primitive-and-object';
import * as TS02 from './02-literal-and-enum';
import * as TS03 from './03-function-and-class';
import * as TS04 from './04-any-unknown-never/';
import * as TS05 from './05_1-internal-type-tools';

/**
 * 理解原始类型与对象类型
 */
// TS01.primitive();
// TS01.demoVoid(); // void
// TS01.demoArray(); // 数组
// TS01.demoObject(); // 对象
// TS01.typeAndInterface(); // type 与 interface
// TS01.objectAndObject(); // object、Object 以及 { }

/**
 * 字面量类型与枚举
 */
// TS02.literal(); // 字面量
// TS02.demoEnum(); // 枚举

/**
 * 函数与Class类型
 */
// TS03.demoFunction(); // 函数的类型签名
// TS03.demoVoid(); // void 类型
// TS03.demoArguments(); // 可选参数与 rest 参数
// TS03.overload(); // 重载
// TS03.asyncFunc(); // 异步函数
// TS03.demoClass(); // 类
// TS03.extend_abstract_callable(); // 继承、实现、抽象类

/**
 * any-unknown-never
 */
// TS04.demoAny(); // any
// TS04.demoUnknown(); // unknown
// TS04.demoNever(); // never
// TS04.assertion(); // 断言

/**
 * 类型工具
 */
TS05.type_alias(); // 类型别名
TS05.intersection(); // 联合类型和交叉类型
TS05.index_typing(); // 索引类型
TS05.mapped_typing(); // 映射类型
