import React, { useState, useRef } from "react";

function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([10, 5, 20, 5, 30, 5]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };
  const removeNo5 = () => {
    const newRecordedNos = recordedNos.filter((el) => el != 5);
    setRecordedNos(newRecordedNos);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />
      <h1>기록된 숫자</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <button onClick={removeNo5}>숫자 5 삭제</button>
    </>
  );
}

export default RefEx;
