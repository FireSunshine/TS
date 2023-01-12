export default function primitive() {
  const name: string = 'sunshine';
  const age: number = 24;
  const male: boolean = true;
  const unde: undefined = undefined;
  const nul: null = null;
  const obj: object = { name, age, male };
  const bigintVar1: bigint = 9007199254740991n;
  const bigintVar2: bigint = BigInt(9007199254740991);
  const symbolVar: symbol = Symbol('unique');

  const tmp1: null = null;
  const tmp2: undefined = undefined;

  // null 与 undefined 在没有开启 strictNullChecks 检查的情况下，
  // 会被视作其他类型的子类型，比如 string 类型会被认为包含了 null 与 undefined 类型
  //  "strictNullChecks": false,

  /* const tmp3: string = null;
  const tmp4: string = undefined; */
}
