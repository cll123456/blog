import React from "react";
import { useState, useEffect } from "react";
import useTypewriter from "react-typewriter-hook";
import './index.less'


interface ITypeWriterProp {
  /**
   * 需要打印的数组
   */
  data: string[],

  /**
   * 计时器时间
   */
  duration?: number
}

let magicNameIndex = 0;

export default function TypeWriter(prop: ITypeWriterProp) {
  const [magicName, setMagicName] = useState(prop.data[0]);
  const name = useTypewriter(magicName);
  // 启动计时器，这里有副作用

  useEffect(() => {
    const timer = setTimeout(() => {
      magicNameIndex = magicNameIndex > prop.data.length - 1 ? 0 : ++magicNameIndex;
      setMagicName(prop.data[magicNameIndex]);
    }, prop.duration || 5000)
    return () => {
      clearTimeout(timer)
    }
  })


  return (
    <div className="typeWriter--container">
      <p className="cursor">{name}</p>
    </div>
  );
}

