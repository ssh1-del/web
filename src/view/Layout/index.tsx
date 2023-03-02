import React, {useState} from "react";
import {Layout} from "antd";
import style from './index.module.scss';
import {NavLink} from "react-router-dom";
import HtmlIcon from 'svg/html.svg';

const {Sider, Content} = Layout;
export default function () {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };
    return (
        <Layout className={style._}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <NavLink to={'/html'}><HtmlIcon/>HTML</NavLink>
                <NavLink to={'/css'}><HtmlIcon/>css</NavLink>
                <NavLink to={'/javaScript'}><HtmlIcon/>JavaScript</NavLink>
            </Sider>
            <Layout className="site-layout">
                <Content>

                </Content>
            </Layout>
        </Layout>
    );
}
