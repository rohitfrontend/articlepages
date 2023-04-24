import React from "react";
import SentimentAnalysis from "../AllAnalysis/SentimentAnalysis";
import VisibilityAnalysis from "../AllAnalysis/VisibilityAnalysis";
import SpokespersonAnalysis from "../AllAnalysis/SpokePersonAnalysis";
import KeywordAnalysis from "../AllAnalysis/KeywordAnalysis";
import ProductAnalysis from "../AllAnalysis/ProductAnalysis";

function FormTwo(){
    return(
        <>
       
            <div className='form-details company-level'>
            <h3 className="text-center">Company Level</h3>
            <div className="row">
            <div className="col-12">
                <p className="color-blue">4 Competitors has similar articles</p>
            </div>
            <div className="col-md-12 mb-20">
                <select className="form-select">
                    <option>Select Company Name</option>
                </select>
            </div>
        </div>
            <div className="companylevel">
          <SentimentAnalysis/>
          <VisibilityAnalysis/>
          <SpokespersonAnalysis/>
          <KeywordAnalysis/>
          <ProductAnalysis/>
          </div>
          <div className="col-md-12 mt-20"><button className="btn btn-primary">Save & Next Company</button><button className="btn btn-gray float-end">Submit & Send to QC</button></div>      
                </div>
                
        
        </>
    )
}

export default FormTwo