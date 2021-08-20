import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, Space, Modal } from "antd";
import moment from "moment";
import { Itodo } from "components/todo/TodoService";

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}
const dateFormat = "YYYY-MM-DD";
const today = moment().format(dateFormat);
const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(today);

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  //DatePicker
  const handleDateChange = (dateObj: any): void => {
    const newDate = dateObj.format(dateFormat);
    setDate(newDate);
  };

  //Modal
  const Warning = () => {
    Modal.warning({
      title: "글 작성",
      content: "todo를 작성해 주세요",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    if (value === "") {
      Warning();
    } else {
      createTodo({
        id: nextId,
        text: value,
        done: false,
        expDate: date,
      });
      incrementNextId(); // nextId 하나 증가
      setValue(""); // input 초기화
      setOpen(false); // open 닫기
    }
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <InsertLayout>
            <Input
              autoFocus
              placeholder="What's nexed to be done?"
              onChange={handleChange}
              value={value}
            />
            <span>만료일 지정</span>
            <Space direction="vertical" size={16}>
              <DatePicker
                defaultValue={moment(date)}
                onChange={handleDateChange}
              />
            </Space>
          </InsertLayout>
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  justify-content: center;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const InsertLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > span {
    font-weight: bold;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;
