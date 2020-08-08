import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return null
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/board">Board</a>
        </Menu.Item>
      </Menu>
    )    
  }
}

export default LeftMenu;