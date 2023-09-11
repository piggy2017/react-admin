/*
 * @Author: SunLin
 * @Date: 2023-08-31 14:40:05
 * @LastEditors: SunLin
 * @LastEditTime: 2023-08-31 17:01:15
 * @Description:
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import CustomMenu from '@/components/CustomMenu'

const { Sider } = Layout

const AppAside = props => {
    let { menuToggle, menu, loginOut } = props

    return (
        <Sider className='aside' collapsed={menuToggle}>
            <div className='logo'>
                {/* <a rel='noopener noreferrer' href='https://github.com/ltadpoles' target='_blank'>
                    <Icon type='github' style={{ fontSize: '3.8rem', color: '#fff' }} />
                </a> */}
                <img
                    className='logo-icon'
                    src='https://cdn.juxuecms.com/wechat/mini/fishWater2/aijiaManage/logo.png'></img>
                <div className='logo-name'>AI爱家</div>
            </div>

            <CustomMenu menu={menu}></CustomMenu>

            <div className='loginOut_sider'>
                <span onClick={loginOut}>
                    <Icon type='logout' /> 退出登录
                </span>
            </div>
        </Sider>
    )
}

AppAside.propTypes = {
    menuToggle: PropTypes.bool,
    menu: PropTypes.array.isRequired
}

export default AppAside
