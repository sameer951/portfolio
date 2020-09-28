import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import './mystyle.scss';

const { Header, Content, Footer } = Layout;

const mainMenuLists = [
    { label: 'ABOUT ME', href: '' },
    { label: 'SKILLS', href: '' },
    { label: 'EXPERIENCE', href: '' },
    { label: 'EDUCATION', href: '' },
    { label: 'PORTFOLIO', href: '' },
    { label: 'CONTACT', href: '' },
]

export const LayoutComponent = (props) => {
    const breadcrum = <Breadcrumb></Breadcrumb>;
    return (<Layout theam={'dark'}>
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {mainMenuLists.map((menu, mi) => (<Menu.Item key={mi + 1}>{menu.label}</Menu.Item>))}
            </Menu>
        </Header> */}
        <Content className="site-layout" style={{ minHeight: "90vh" }}>
            {/* marginTop: 64,  */}
            <div className="site-layout-background" style={{ minHeight: 380 }}>
                {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            {/* <div className="float-right"><SocialMediaLinks /></div> */}
            Designed & Built by Jyotikanta Nadi
        </Footer>
    </Layout>)
}

const SocialMediaLinks = () => {

    return (<React.Fragment>
        <div className="social-icons">
            <a rel="me" href="mailto:jacek@jtom.me" className="button button-icon u-email" title="mail: jacek@jtom.me">
                <i className="fa fa-envelope"></i>mail
            </a>

            <a rel="me" href="https://www.linkedin.com/in/jtompl" className="button button-icon" title="linkedin: jtompl">
                <i className="fa fa-linkedin-square"></i>
            </a>

            <a rel="me" href="https://github.com/jtomaszewski" className="button button-icon" title="github: jtomaszewski">
                <i className="fa fa-github-square"></i>
            </a>

            <a rel="me" href="https://facebook.com/jtomaszewski" className="button button-icon" title="facebook: jtomaszewski">
                <i className="fa fa-facebook-square"></i>
            </a>

            <a rel="me" href="https://twitter.com/jtompl" className="button button-icon" title="twitter: @jtompl">
                <i className="fa fa-twitter-square"></i>
            </a>
        </div>
    </React.Fragment>)
}
