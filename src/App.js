import StopWatch from './StopWatch'
import NumberCounter from './NumberCounter'
import Popup from './Popup';
import ProductListItem from './ProductListItem';
function App() {
  return (
    <>
      {/* <StopWatch/> */}
      {/* <NumberCounter/> */}
      {/* <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1> */}
      {/* <button className="btn btn-active btn-primary">Button</button> */}
      {/* <Popup/> */}
      <div style={{display:"flex", gap:"10px"}}>
        <ProductListItem imgNo ={201} name={"MAC BOOK AIR"} productPriceFormatted = {"1,140,000"} />
        
        <ProductListItem imgNo ={1} name={"MAC BOOK PRO"} productPriceFormatted = {"1,140,000"}/>

        <ProductListItem imgNo ={2} name={"MAC BOOK PRO PLUS"} productPriceFormatted = {"1,140,000"}/>
      </div>
    </>
  );
}

export default App; 
