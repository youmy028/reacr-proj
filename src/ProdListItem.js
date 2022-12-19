import React, {useState} from "react";
function ProdListItem(props){
  
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
      <div>
        <div className="flex flex-col gap-[10px]">
          <img src={`https://picsum.photos/id/${imgNo}/400/400`}/>
          <div className="text-center font-bold">{productName}</div>
          <div className="text-center after:content-['원']">{productPriceFormatted}</div>
        </div>
      </div>  
    </>
  );
}

export default ProdListItem;
 