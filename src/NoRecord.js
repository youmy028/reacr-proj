import React, {useState} from "react";
function NoRecord(){
  const [arr, setArr] = useState([1,2,3,4,5]);

  setTimeout(() =>{
    setArr([...arr, arr.length+1])
  },1000);

  const [no, setNo] = useState(0);
  
  const [recordedNo, setRecordedNo] = useState(0);
  const saveNo = () => {
    setRecordedNo(no);
  }

  return( 
    <>
      {arr.join(",")}
      {/* <h1>숫자기록</h1>
      <hr/>
      <input type="number" className="input input-bordered input-warning w-full max-w-xs" value={no} onChange={(e) => setNo(e.target.valueAsNumber)} />
      <button type="button" className="btn btn-active"  onClick={saveNo}>기록</button>
      <hr />
  기록된 숫자 : {recordedNo}*/}
    </>
    );
}

export default NoRecord;
