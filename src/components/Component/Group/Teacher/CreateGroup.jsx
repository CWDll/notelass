import React from 'react';
import styled from 'styled-components';
import exit from '../../../assets/exit.svg';


const SmallContainer = styled.div`
  width: 480px;
  height: 544px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 40px;
  text-align: left;

  flex-shrink: 0;
`;

const TextBox = styled.input`
  display: flex;
  width: 400px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 40px;

  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;

  color: var(--cool-grayscale-line, #c9cdd2);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

const Button2 = styled.button`
  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 40px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

const Exit = styled.img`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 432px;
  width: 24px;
`;

const Code = styled.p`
  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  margin-top: 32px;
  margin-left: 20px;
  margin-bottom: 140px;
`;

const Title2 = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 126px;
  margin-left: 184px;

  flex-shrink: 0;
`;


const CreateGroup = () => {
    const [showSmallContainer, setShowSmallContainer] = useState(false);
    // const [content, setContent] = useState("form");
    const [groupCode, setGroupCode] = useState("");
    const [grade, setGrade] = useState("");
    const [classNum, setClassNum] = useState("");
    const [subject, setSubject] = useState("");
    const [groupList, setGroupList] = useState([])


    // 그룹 생성 POST 함수
  const generateGroup = async () => {
    if (!grade || !classNum || !subject) {
      document.getElementById("Button2").style.backgroundColor = "gray";
      return;
    }

    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    setGroupCode(code);

    const requestBody = {
      grade: parseInt(grade),
      classNum: parseInt(classNum),
      subject: subject,
    };

    console.log(
      "grade: " + grade + ", type: " + `Type: ${typeof parseInt(grade)}`
    );
    console.log(
      "grade: " + classNum + ", type: " + `Type: ${typeof parseInt(classNum)}`
    );
    console.log("grade: " + subject + ", type: " + `Type: ${typeof subject}`);
    console.log(requestBody);
    try {
      const response = await instance.post("/api/group", requestBody);

      // 응답이 성공적이면 groupCode 상태 업데이트
      if (response.status === 201) {
        setGroupCode(response.data.result);
        setContent("code");
        await fetchGroups();
      } else {
        console.error(
          "서버로부터 예상치 못한 응답을 받았습니다:",
          response.data
        );
      }
    } catch (error) {
      console.error("그룹 생성 중 오류가 발생했습니다:", error);
    }
  };


    return (
        <div>
            <SmallContainer>
      <Exit
        src={exit}
        alt="exit"
        onClick={() => setShowSmallContainer(!showSmallContainer)}
      ></Exit>
      {content === "form" ? (
        <>
          <Title>대상 학년 선택</Title>
          <TextBox
            type="text"
            value={grade}
            placeholder="숫자만 적으세요 ex) 1"
            onChange={(e) => setGrade(e.target.value)}
          ></TextBox>
          <Title>대상 반 선택</Title>
          <TextBox
            type="text"
            value={classNum}
            placeholder="숫자만 적으세요 ex) 1"
            onChange={(e) => setClassNum(e.target.value)}
          ></TextBox>
          <Title>과목 선택</Title>
          <TextBox
            type="text"
            value={subject}
            placeholder="담당하시는 과목을 입력해 주세요"
            onChange={(e) => setSubject(e.target.value)}
          ></TextBox>
          <Button2
            onClick={generateGroup}
            style={{
              // 대상 필드 중 하나라도 비어 있다면 배경색을 회색(Gray)으로 변경
              backgroundColor:
                !grade || !classNum || !subject
                  ? "#E6E8EE"
                  : "var(--primary-cobalt, #4849ff)",
            }}
          >
            다음
          </Button2>
        </>
      ) : (
        <>
          <Title2>그룹 입장 코드</Title2>
          <Code>{groupCode}</Code>
          <Button2 >
            완료
          </Button2>
        </>
      )}
    </SmallContainer>
        </div>
    );
};

export default CreateGroup;