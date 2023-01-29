export default function assertion() {
  /* 
    断言
    as NewType
  */
  function foo(union: string | number) {
    if ((union as string).includes('sunshine')) {
    }

    if ((union as number).toFixed() === '599') {
    }
  }

  /* 
    非空断言 
    !.
  */
}
