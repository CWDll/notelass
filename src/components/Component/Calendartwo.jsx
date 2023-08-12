// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import moment from "moment";
// import "react-calendar/dist/Calendar.css"; // css import

// export default function Calendartwo() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//       <div className="text-gray-500 mt-4">
//         {moment(value).format("YYYY년 MM월 DD일")}
//       </div>
//     </div>
//   );
// }

/**************/

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// // import Calendar from ".../node_modules/react-calendar/dist/esm";
// import moment from "moment";
// import "react-calendar/dist/Calendar.css";
// import styled from "styled-components";

// export default function Calendartwo() {
//   const [value, onChange] = useState(new Date());

//   const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     background-color: skyblue;
//     border: 1px solid yellow;
//   `;

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//       <div className="text-gray-500 mt-4">
//         {moment(value).format("YYYY년 MM월 DD일")}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  position: relative;
  gap: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
`;
const DotBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CalendarDot = styled.div`
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f87171;
`;

const CalendarBox = styled(Calendar)`
  widtth: 480px;
  height: 400px;
  background-color: white;
  color: black;
  border: 0;
  .react-calendar__tile--active {
    background-color: #dedeff !important;
    color: #4849ff !important;
    border-radius: 50%;
    font-weight: bold;
  }
`;

export default function Calendartwo({ user }) {
  const [value, onChange] = useState(new Date());
  const dateArr = ["2023. 08. 15.", "2023. 08. 17.", "2023. 09. 02."];
  return (
    <Container>
      <CalendarBox
        onChange={onChange}
        value={value}
        formatDay={(locale, date) =>
          //xx일 -> xx 으로 format 변경
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit",
          })
        }
        tileContent={({ date, view }) => {
          //
          const exist = dateArr.find(
            (oneDate) =>
              oneDate ===
              String(
                new Date(date).toLocaleDateString("ko", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              )
          );
          return (
            <>
              <DotBox>{exist && <CalendarDot />}</DotBox>
            </>
          );
        }}
      />
    </Container>
  );
}
