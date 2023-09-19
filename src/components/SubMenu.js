import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e2fc;
  justify-content: space-between;
`;
const SidebarLabel = styled.span`
  background: #252831;
`;
const DropdownLink = styled(Link)`
background: #414757;
display:flex;
align-items: center;
`
const SubMenu = ({ item }) => {
  const [children, setChildren] = useState(false);
  const showChildren = () => setChildren(!children);
  return (
    <>
      <SidebarLink to={item.url} onClick={item.children && showChildren}>
        <div>
          {item.icon}
          <SidebarLabel>{item.name}</SidebarLabel>
        </div>
        <div>
          {item.children && children
            ? item.iconOpened
            : item.children
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {children &&
        item.children.map((item, index) => {
          return (
            <DropdownLink to={item.url} key={index}>
              {item.icon}
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
       
    </>
  );
};

export default SubMenu;
