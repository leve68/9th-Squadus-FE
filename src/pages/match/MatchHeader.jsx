import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MatchHistory from './MatchHistory';
import MercenaryHistory from './MercenaryHistory';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
  gap: 20px;
`;

const TabBar = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  padding: 12px 4px;
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  font-size: 24px;
  font-weight: 500;
  border-bottom: ${({ $isActive, theme }) => $isActive ? `2px solid ${theme.colors.neutral[900]}` : "none"};
  cursor: pointer;
`;

const ApplicationHistoryButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;


const MatchHeader = ({ setSelectedTab }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('match');

  const [showMatchHistory, setShowMatchHistory] = useState(false);
  const [showMercenaryHistory, setShowMercenaryHistory] = useState(false);

  const handleTabClick = (path) => {
    setActiveTab(path);
    setSelectedTab(path)

    if (path === 'match') {
      navigate(`/match`);
    } else if (path === 'mercenary') {
      navigate(`/match/mercenary`);
    }
  };

  const handleApplicationClick = () => {
    if (activeTab === 'match') {
      setShowMatchHistory(true);
    } else if (activeTab === 'mercenary') {
      setShowMercenaryHistory(true);
    }
  }


  return (
    <Container>
      <TabBar>
        <TabItem onClick={() => handleTabClick('match')} $isActive={activeTab === 'match'}>매치</TabItem>
        <TabItem onClick={() => handleTabClick('mercenary')} $isActive={activeTab === 'mercenary'}>용병</TabItem>
      </TabBar>
      <ApplicationHistoryButton onClick={handleApplicationClick}>신청 내역</ApplicationHistoryButton>

      {
        showMatchHistory && 
        <MatchHistory
          closeMatchHistory={() => setShowMatchHistory(false)}
        />
      }

      {
        showMercenaryHistory && 
        <MercenaryHistory
          closeMercenaryHistory={() => setShowMercenaryHistory(false)}
        />
      }

    </Container>
  );
}

export default MatchHeader;
