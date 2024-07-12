import type { NextPage } from "next";
import Nav from "../components/Nav"

const DahsboardPADLineZonaNo: NextPage = () => {
  return (
    <>
    <Nav></Nav>
    <div>
    {/* Heading*/}

 <div className="font-sans p-5">
    <h1 className="flex justify-center mb-8">Xlarge Paragraph / P</h1>
     <div className='flex justify-between pb-5'>
       <div className="text-sm flex gap-9">
         <div>
          <p className="text-sm font-normal">Font size: text-sm</p>
          <p className="text-sm font-normal">sm: text-sm</p>
          <p className="text-base font-normal">md: text-base</p>
          <p className="text-base font-normal">mayor a lg: text-base</p>
         </div>
         <p className="text-sm">leading-normal</p>
         <p>font-normal</p>
       </div>
   </div>
 </div>

 <div className="border-t-4 border-black "></div>

 <div className="font-sans p-5">
    <h1 className="flex justify-center mb-8">Regular Paragraph / P</h1>
     <div className='flex justify-between pb-5'>
       <div className="text-sm flex gap-9">
         <div>
          <p className="text-xs font-normal">Font size: text-sm</p>
          <p className="text-xs font-normal">sm: text-sm</p>
          <p className="text-sm font-normal">md: text-base</p>
          <p className="text-sm font-normal">mayor a lg: text-base</p>
         </div>
         <p className="text-sm">leading-normal</p>
         <p>font-normal</p>
       </div>
   </div>
 </div>

 <div className="border-t-4 border-black "></div>

 </div>

 
 </>
  );
};

export default DahsboardPADLineZonaNo;
