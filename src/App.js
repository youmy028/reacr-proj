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
        <ProductListItem/>
        
        <ProductListItem/>
        
        <ProductListItem/>
      </div>
    </>
  );
}

export default App; 
