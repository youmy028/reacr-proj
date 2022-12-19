import React, {useState} from "react";
function NoRecord(){

  const [no, setNo] = useState(0);
  
  
  const [recordedNos, setRecordedNos] = useState([10,20,30]);
  const saveNo = () => {
    setRecordedNos([...recordedNos, no]);
  }
  const li = recordedNos.map((el, index) => <li key={index}>- {el}</li>);

  return( 
    <>
      <h1>숫자기록</h1>
      <hr/>
      <input type="number" className="input input-bordered input-warning w-full max-w-xs" value={no} onChange={(e) => setNo(e.target.valueAsNumber)} />
      <button type="button" className="btn btn-active"  onClick={saveNo}>기록</button>
      <hr />
      <h1>기록된 숫자 v1 : [{recordedNos.join(",")}]</h1>
      <hr />
      <h1>기록된 숫자 v2 : <ul>{li}</ul></h1>
      <h1>기록된 숫자 v2-2 : <ul>{recordedNos.map((el,index)=> (<li key={index}>-{el}</li>))}</ul></h1>
    </>
    );
}

export default NoRecord;
