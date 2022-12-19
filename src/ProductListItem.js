import React, {useState} from "react";
function ProductListItem(){
  const imgNo = 1;
  const productName= "MAC BOOK AIR";
  const productPriceFormatted = "4,340,000원";
  return (
    <>
      <div style={{display:"flex",gap:"10px"}}>
        <div style={{ display:"inline-flex", flexDirection:"column", gap:"10px" }}>
          <img src={`https://picsum.photos/id/${imgNo}/400/400`}/>
          <div style={{textAlign:"center", fontWeight:"bold",color:"#454545"}}>{productName}</div>
          <div style={{textAlign:"center"}}>{productPriceFormatted}</div>
        </div>
      </div>  
    </>
  );
}

export default ProductListItem;
 