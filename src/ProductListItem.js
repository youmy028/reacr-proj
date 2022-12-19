import React, {useState} from "react";
function ProductListItem(props){
  
  // 방법1
  // const {imgNo, name, productPriceFormatted} = props;
  // const productName = name ;

  // 방법2
  // const {imgNo, name:productName, productPriceFormatted} = props;
  
  // 방법3
  // function ProductListItem(imgNo, name:productName, productPriceFormatted)

  const {imgNo, name:productName, productPriceFormatted} = props;
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
 