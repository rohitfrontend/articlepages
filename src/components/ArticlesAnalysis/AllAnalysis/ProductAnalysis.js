import React from "react";
import { DeleteIcon } from "../../../Icons/icons.component";

function ProductAnalysis(){
    return(
        <div className="row product-analysis">
          <div className="col-md-12">
            
          </div>
              <div className="col-md-12"><h3>Product Analysis</h3></div>
              <div className="col-md-12 mt-20">
              <table class="table"><thead><th>Name</th><th>Designation</th><th>Profiling</th><th>Visibility</th><th>Action</th></thead><tbody><tr><td>Manish</td><td>CEO</td><td>Interview</td><td>Photo</td><td className="text-center"><DeleteIcon/></td></tr></tbody></table>
              </div>
            <div className='col-6 mt-10'>
                <select className='form-select'>
                  <option>
                  Name
                  </option>
                </select>

            </div>
            <div className='col-6 mt-10'>
                <select className='form-select'>
                  <option>
                  Category
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Photo
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Headline
                  </option>
                </select>
            </div>
            <div className="col-md-12 mt-10">
            <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="CheckProductAnalysis"/>
  <label class="form-check-label" for="CheckProductAnalysis">
    Indeterminate checkbox
  </label>
</div>
            </div>
            

        </div>
    )
}
export default ProductAnalysis