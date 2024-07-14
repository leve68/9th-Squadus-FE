import React from 'react';
import MainNavigationBar from './MainNavigationBar';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  // min-height: 100%;
  flex-grow: 1;
  background-color: white;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const MainLayout = ({ children, showMainNav }) => {
  return (
    <LayoutContainer>
      <Content>
        {children}
      </Content>
      {showMainNav && <MainNavigationBar />}
    </LayoutContainer>
  );
};

export default MainLayout;