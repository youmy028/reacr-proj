import ProdListItem from "./ProdListItem";
function ProdList({className}){
    return(
        <>
            <div className="className">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-[20px] gap-y-[100px]">
                    <li className="flex-grow"><ProdListItem imgNo ={201} name={"PRODUCT 1"} productPriceFormatted = {"140,000"} /></li>
                    <li className="flex-grow"><ProdListItem imgNo ={1} name={"PRODUCT 2"} productPriceFormatted = {"440,000"}/></li>
                    <li className="flex-grow"><ProdListItem imgNo ={2} name={"PRODUCT 3"} productPriceFormatted = {"320,000"}/></li>
                    <li className="flex-grow"><ProdListItem imgNo ={201} name={"PRODUCT 1"} productPriceFormatted = {"140,000"} /></li>
                    <li className="flex-grow"><ProdListItem imgNo ={1} name={"PRODUCT 2"} productPriceFormatted = {"440,000"}/></li>
                    <li className="flex-grow"><ProdListItem imgNo ={2} name={"PRODUCT 3"} productPriceFormatted = {"320,000"}/></li>
                </ul>
            </div>
        </> 
    );
}
export default ProdList;