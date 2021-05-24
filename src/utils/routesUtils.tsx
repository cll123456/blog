import React from "react";
import { lazy } from "react";
import withLazyComp from "../components/hoc/withLazyComp";

/**
 * 生成一个带有粒子效果的组件
 * @param Comp 
 * @returns 
 */
export function genParticlesRoute(Comp: React.LazyExoticComponent<() => JSX.Element>) {
  const Temp = withLazyComp(Comp)
  return () => (
    <>
      <Temp />
    </>
  )

}