export default function mapped_typing() {
  type Stringify<T> = {
    [K in keyof T]: string;
  };
  /* 
    ð
    è¿ä¸ªå·¥å·ç±»åä¼æ¥åä¸ä¸ªå¯¹è±¡ç±»åï¼åè®¾æä»¬åªä¼è¿ä¹ç¨ï¼ï¼
    ä½¿ç¨ keyof è·å¾è¿ä¸ªå¯¹è±¡ç±»åçé®åç»æå­é¢éèåç±»åï¼
    ç¶åéè¿æ å°ç±»åï¼å³è¿éç in å³é®å­ï¼å°è¿ä¸ªèåç±»åçæ¯ä¸ä¸ªæåæ å°åºæ¥ï¼å¹¶å°å¶é®å¼ç±»åè®¾ç½®ä¸º stringã
    ð
  */
  interface Foo {
    prop1: string;
    prop2: number;
    prop3: boolean;
    prop4: () => void;
  }

  type StringifiedFoo = Stringify<Foo>;

  // ð ç­ä»·äº
  interface _StringifiedFoo {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
  }

  type Clone<T> = {
    [k in keyof T]: T[k];
  };

  type CloneType = Clone<Foo>;
}
