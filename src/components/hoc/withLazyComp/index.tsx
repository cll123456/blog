import React, { ComponentType } from 'react'
import Loading from '../../common/Loading'
/**
 * 懒加载
 * @param Comp 
 * @returns 
 */
export default function withLazyComp(Comp: ComponentType) {
  return function _withLazyComp() {
    return (
      <>
        {/* <React.Suspense fallback={<Loading />}> */}
          {/* <Loading /> */}
          <Comp />
        {/* </React.Suspense> */}
      </>
    )
  }

}


