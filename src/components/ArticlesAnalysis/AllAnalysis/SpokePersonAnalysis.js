import React from "react";
import { DeleteIcon } from "../../../Icons/icons.component";

function SpokespersonAnalysis(){
    return(
        <div className="row spokeperson-analysis">
              <div className="col-md-12"><h3>Spokesperson Analysis</h3></div>
              <div className="col-md-12">
              <table class="table"><thead><th>Name</th><th>Designation</th><th>Profiling</th><th>Visibility</th><th>Action</th></thead><tbody><tr><td>Manish</td><td>CEO</td><td>Interview</td><td>Photo</td><td className="text-center"><DeleteIcon/></td></tr></tbody></table>
              </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Name
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Designation
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Profiling
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Visibility
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Views on Keyword
                  </option>
                </select>
            </div>
            <div class="col-6 mt-20">
               <input type="text" className="form-control" placeholder="Other details if any"/>
            </div>
            <div className="col-md-12 mt-10">
              <a href="#" className="addmore float-end">Add More</a>
            </div>
        </div>
    )
}
export default SpokespersonAnalysis 