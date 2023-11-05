import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from '../../assets/api/axios';

function CreateGroup() {
    const [grade, setGrade] = useState('');   
    const [classNum, setClassNum] = useState(''); 
    const [subject, setSubject] = useState('');

    

    const handleCreateGroup = async () => { // async 키워드 추가
        try {
            const CreateGroup =await axios.post(
                `${import.meta.env.VITE_APP_SERVER_HOST}/api/group`, 
                {   grade: grade,
                    classNum: classNum,
                    subject: subject, }
            );
            
            console.log(CreateGroup);
            console.log(CreateGroup.data);

            if (CreateGroup.status === 201) {
                //그룹 생성 성공
                alert("그룹 생성이 완료되었습니다.");
                navigate("/");
            } else {
                alert("그룹 생성에 실패했습니다.");
            }

        } catch (response) {
            console.error("그룹 생성 오류:", response);
        }
    };

    useEffect(() => {
        console.log(grade);
        console.log(classNum);
        console.log(subject);
    }, [grade, classNum, subject]);

    return (
        <>
            <p>학년</p>
            <input 
                type="text" 
                value={grade} 
                placeholder="학년을 입력하세요" 
                onChange={(e) => setGrade(e.target.value)} 
            />
            <p>반</p>
            <input 
                type="text" 
                value={classNum} 
                placeholder="반을 입력하세요" 
                onChange={(e) => setClassNum(e.target.value)} 
            />
            <p>과목</p>
            <input 
                type="text" 
                value={subject} 
                placeholder="과목을 입력하세요" 
                onChange={(e) => setSubject(e.target.value)} 
            />

            <button onClick={handleCreateGroup}>그룹 생성</button>
        </>
    );
}

export default CreateGroup;
