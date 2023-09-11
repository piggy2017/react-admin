/*
 * @Author: SunLin
 * @Date: 2023-08-31 14:54:45
 * @LastEditors: SunLin
 * @LastEditTime: 2023-09-01 15:19:59
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './App'

moment.locale('zh-cn')

ReactDOM.render(<App />, document.getElementById('root'))
