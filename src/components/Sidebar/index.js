import React from 'react';
import { Icon,CloseIcon, SidebarContainer,SidebarWrapper,SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>

               </Icon>
               <SidebarWrapper>
                   <SidebarMenu>
                      <SidebarLink to="about" onClick={toggle}>
                        About
                      </SidebarLink> 
                      <SidebarLink to="Poses" onClick={toggle}>
                        Poses
                      </SidebarLink> 
                      <SidebarLink to="services" onClick={toggle}>
                        Services
                      </SidebarLink>
                      <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                      </SidebarLink> 
                   </SidebarMenu>
                   <SideBtnWrap>
                       <SidebarRoute to='./signin' onClick={toggle}>
                           Sign In
                       </SidebarRoute>
                   </SideBtnWrap>
               </SidebarWrapper>
       </SidebarContainer>
    );
};

export default Sidebar;

