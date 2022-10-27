import {React} from "react";

const Filter = ({filterValue, onChange})=>{
   let {amount,year,age,riskProfile}= filterValue;
    return(
        <section className="goalPlanHeader">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="editData">
                        <li>
                            <label>Age</label>
                            <small><em><input type="text" name="age" value={age} placeholder={age}/>Years</em></small>
                        </li>
                        <li>
                            <label>Monthly Investment</label>
                            <small>Rs.<em> <input onChange={onChange} name={"amount"} style={{width:"100px"}} value={amount} placeholder={amount}/></em></small>
                        </li>
                        <li>
                            <label>Investment Term</label>
                            <small><em><input type="text" name="year" value={year} placeholder={year}/>Years</em></small>
                        </li>
                        <li>
                            <label>Risk Profile</label>
                            <small><em>
                                <select>
                                    <option value={'Moderate'}>Moderate</option>
                                    <option value={'High'}>High</option>
                                    <option value={'Low'}>Low</option>
                                </select>
                            </em></small>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default  Filter;