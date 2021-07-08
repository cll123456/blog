import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { setLoginCode } from '../../store/actions/user'
import { getParamByPath } from '../../utils/pathUtil'

function Login(props: { login: (code: string) => void }) {
  // 拿到code去获取数据，然后返回上一层页面
  useEffect(() => {
    const param: { code: string } = getParamByPath(window.location.href) as any;
    props.login(param.code)
  }, [])
  return (
    <div>
      登录中……
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  login(code: string) {
    dispatch(setLoginCode(code));
  }
})

export default connect(null, mapDispatchToProps)(Login);