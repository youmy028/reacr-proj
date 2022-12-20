import React, { useState } from "react";
function FormEx2() {
  const [recordeNos, setRecordeNos] = useState([10, 20, 30]);

  const saveNo = (form) => {
    form.no.value = form.no.value.trim();
    if (form.no.value.length == 0) {
      alert("숫자를 입력해주세요.");
      form.no.focus();
      return;
    }

    setRecordeNos([...recordeNos, form.no.value]);

    form.no.value = "";
    form.no.focus();
  };

  const li = recordeNos.map((el, index) => <li key={index}>- {el}</li>);

  return (
    <>
      <h1>숫자기록</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo(e.target);
        }}
      >
        <input type="number" name="no" className="input w-full max-w-xs" />
        <button type="submit" className="btn btn-outline">
          기록
        </button>
      </form>

      <br />

      <h1>기록된 숫자 v1: {recordeNos.join(",")}</h1>

      <br />

      <h1>
        기록된 숫자 v2 : <ul>{li}</ul>
      </h1>

      <br />

      <h1>기록된 숫자 v2-1</h1>
      <ul>
        {recordeNos.map((el, index) => (
          <li key={index}>- {el}</li>
        ))}
      </ul>
    </>
  );
}

export default FormEx2;
