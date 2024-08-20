import styled from "styled-components";
import arrowdown_icon from "../../../assets/icons/group/arrow_down.svg";
import run_emoji from "../../../assets/icons/group/run_emoji.svg";
import GroupSelectList from "./GroupSelectList";

import { ReactComponent as ModiInfoIcon } from "../../../assets/group/ModiInfoIcon.svg";
import { ReactComponent as AlarmIcon } from "../../../assets/group/AlarmIcon.svg";
import ModifyInfo from "../basicinfo/ModifyInfo";

import React, { useState, useEffect, useContext } from "react";
import { GroupContext } from "../Group";

function GroupHeader() {
  const [showGroupSelectList, setShowGroupSelectList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { Loading, chooseClubId, groupData } = useContext(GroupContext);

  useEffect(() => {
    console.log(Loading);
    console.log(groupData.length);
    console.log(groupData[chooseClubId]);
  }, []);
  return (
    <Container>
      <Wrapper>
        <RunEmoji />
        <Title>
          {Loading && groupData && groupData[chooseClubId]
            ? groupData[chooseClubId].clubName
            : "Loading..."}
        </Title>
        <ArrowDown
          onClick={(e) => {
            setShowGroupSelectList(!showGroupSelectList);
          }}
        />
        {showGroupSelectList && <GroupSelectList groupData={groupData} />}
      </Wrapper>
      <IconWrapper>
        <ModiInfoIcon onClick={toggleModal} />
        <AlarmIcon />
      </IconWrapper>
      <ModifyInfo isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
}

export default GroupHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RunEmoji = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${run_emoji});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ArrowDown = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrowdown_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
