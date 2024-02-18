import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function NoticeDetail() {
  const { groupId, noticeId } = useParams(); // groupId 매개변수 받기

  return <div>NoticeDetail</div>;
}

export default NoticeDetail;
