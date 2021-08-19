import React from "react";
import styled from "styled-components";

interface DateTimeFormatOptions {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
}

const TodoHeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const date: Date = new Date();
  const options: DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  };
  const today = date.toLocaleDateString("ko-Kr", options);
  const weekday = date.toLocaleDateString("ko-Kr", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <DateText>{today}</DateText>
      <DayText>{weekday}</DayText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
