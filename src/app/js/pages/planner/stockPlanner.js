import React,{useEffect, useState} from 'react';
import Filter from './common/filter';
import fundFile from './../../../static/files/funds.csv'
import {csv} from 'd3';

const CsvFileReder = ({data, currencyFormat})=>{
    console.log("data", data);
    return(
        <>
        <tbody>
        { data && data.map((item, index)=>{
            return (
                <tr key={index}>
                    <td className="InvestAm" style={{borderLeft: "1px solid #e2e7e9"}}>
                        <span className="Equity"></span>
                        <strong>{item.Name}</strong>
                        <br/>
                        <p>{item.SubSector}</p>
                    </td>
                    <td width="180px" className="InvestAm">{currencyFormat(Math.round(item.amount))}</td>
                    <td width="140px" style={{borderRight: "none"}}>{item.Y5Growth}%</td>
                    <td width="140px">{item.Alpha}%</td>
                </tr>
            )
        })}
        </tbody>
            </>
    )
}





const StockPlanner =()=>{
    const [data, setDate] = useState();
    const [filterValue, setFilterValue] = useState({
        amount:72000,
        year:10,
        age:30,
        riskProfile:"Moderate"
    })
    let amountArr = [];
    let amount = filterValue.amount;
    let first = (amount*40)/100, second = (amount*30)/100,third = (amount*10)/100,fourth = (amount*10)/100,fifth = (amount*10)/100;
    amountArr.push(first,second,third,fourth,fifth);

    function onChange(event) {
        setFilterValue(
            {
                amount: event.target.value,
                year:10,
                age:30,
                riskProfile:"Moderate"
            }
            );
        console.log("eventfilterValue", filterValue);
    }
    function currencyFormat(num) {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    function futureValue(p,mRate,year){
        let rate =mRate/12,
            time = year*12,
            amount = 0;
/*        return p * (Math.pow(1 + rate, time) - 1) / time*/
        for ( let i = 1; i <= time; i++ ) {
            amount = (amount + p) * (1 + rate);
        }
        return amount
    }
    useEffect(()=>{
        csv(fundFile).then((csvdata)=>{
            let val = csvdata.map((item)=>{
                let val = parseFloat(item.Y5Growth),
                    alpha = parseFloat(item.Alpha);
                item.Y5Growth = val;
                item.alpha = alpha;
                return item
            });
            val.sort((a, b) => {
                return b.Y5Growth - a.Y5Growth;
            });
            let sortValue = val && val.slice(0, 10);
            sortValue.sort((a,b)=>{
                return b.alpha - a.alpha
            })
            let sliceData = sortValue.slice(0, 5);
            for (let i = 0; i < sliceData.length; i++) {
                sliceData[i].amount = amountArr[i];
            }
            setDate(sliceData);
        });
    },[filterValue]);


    return(
        <div className="container">
            <div className="breadcrums">
                <a href="javascript:void(0);">Home</a> &#8250; <span>Account</span>
            </div>

            <div className="innerContainer GoalPlanPg">
                <Filter filterValue = {filterValue} onChange={onChange}/>
                <section className="goalbody">
                    <div className="row">
                        <div className="col-lg-8 lineLeft">
                            <h2>Recommended investment plan</h2>
                            <table>
                                <tr>
                                    <th style={{border:"none"}}></th>
                                    <th style={{width:"180px", border:"none"}} className="InvestAm"></th>
                                    <th style={{border:"1px solid #e2e7e9", background:"#fafafa",borderRadius:"5px 5px 0 0"}}
                                        colSpan="2" width="280px" className="text-center">Annualized Fund Returns
                                    </th>

                                </tr>
                                <tr>
                                    <th className="InvestAm"
                                        style={{borderTop:"1px solid #e2e7e9",borderLeft:"1px solid #e2e7e9", borderRadius: "5px 0 0 0"}}>Selected
                                        Funds
                                    </th>
                                    <th style={{borderTop:"1px solid #e2e7e9"}} width="180px" className="InvestAm">Investment Amount</th>
                                    <th width="140px" style={{borderRight:"none"}}>5 Year</th>
                                    <th width="140px">Alpha</th>
                                </tr>
                                <CsvFileReder data={data} currencyFormat={currencyFormat}/>
{/*                              <span className="Equity"></span>
                                    <span className="Debt"></span>
                                    <span className="Hybrid"></span>*/}
                            </table>
                            <ul>
                                <li><span className="Equity"></span> 25% Equity</li>
                                <li><span className="Debt"></span> 35% Debt</li>
                                <li><span className="Hybrid"></span> 40% Hybrid</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 lineRight">
                            <ul className="rightEditData">
                                <li>

                                    <p>Rs.{ currencyFormat(filterValue.amount *12*filterValue.year)}
                                    </p>
                                    <label>Total Amount Invested</label>
                                </li>
                                <li>
                                    <p style={{color:"#001837"}}>Rs. 450,000</p>
                                    {

                                        futureValue(filterValue.amount,data && data[0].Y5Growth, filterValue.year)

                                    }
                                    <label>Expected Amount (in {filterValue.year} years)
                                        <a href="javascript:void(0);" className="helpIcon">
                                           {/* <span className="helpTooltip">This indicates how much risk are you ready to take on your.</span>*/}
                                        </a>
                                    </label>
                                </li>


                                <li>
                                    <a href="" className="btn btn-primary">invest now</a>
                                </li>
                            </ul>

                            <div className="talktoAdv">
                                <h2>Talk to a Verified Advisor</h2>
                                <div className="lgtFormField">
                                    <input type="text" data-ng-model="mobile" placeholder="Enter your mobile number"
                                           className="ng-pristine ng-untouched ng-valid ng-empty"/>
                                        <a href="javascript:void(0);" className="btn primary_btn_red" style={{color:"white"}}>Call me</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="top5sectionGoal">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <section className="topFundSection group">
                                <div className="topFundSectionContent">
                                    <h2 className="group">Top 5 Holdings </h2>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td width="80%">HDFC Bank Limited</td>
                                            <td className="text-right"><strong>8.27%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Infosys Limited</td>
                                            <td className="text-right"><strong>7.36%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Housing Development Finance Limited</td>
                                            <td className="text-right"><strong>5.57%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Larsen &amp; Toubro Limited</td>
                                            <td className="text-right"><strong>4.99%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Zee Entertainment Enterprises Limited</td>
                                            <td className="text-right"><strong>4.85%</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>



                                <div className="topFundSectionContent frt">
                                    <h2 className="group">Top 5 Sectors </h2>

                                    <table>
                                        <tbody>
                                        <tr>
                                            <td width="80%">Bank - Private</td>
                                            <td className="text-right"><strong>8.27%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>IT - Software</td>
                                            <td className="text-right"><strong>7.36%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Pharmaceuticals and Drugs</td>
                                            <td className="text-right"><strong>5.57%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Finance - Housing</td>
                                            <td className="text-right"><strong>4.99%</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Engineering - Construction</td>
                                            <td className="text-right"><strong>4.85%</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </section>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="ContactAdvisor">
                                <h3>Looking for a personalized recommendation?</h3>
                                <div className="advisorImges"></div>
                                <p>Get portfolio recommendation from top advisors for FREE</p>
                                <a href="" className="btn btn-primary primary_btn_red">contact advisor</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="top5sectionGoal">
                    <div className="detailOuter"><h2>Why are these recommeded</h2></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="detailOuter">
                                <h4>Asset Distribution</h4>
                                <div className="details">
                                    <p>As you can see in the graph below the returns in equity go up and down
                                        (volatility) but in the long term give a much higher return than Debt which is
                                        constantly growing.</p>
                                    <p>The volatility in Mid and small caps is higher than Large caps but it outperforms
                                        large caps and debt significantly in the long term.</p>
                                    <p>Based on your term the asset allocation helps ensure you get high returns yet in
                                        case you need some mon </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="detailOuter" style={{border:"none",paddingLeft: "0px"}}>
                                <h4>Birla Sun Life Top 100 Fund - Growth</h4>
                                <p>It has been consistently amongst the top performerbased on past performance. It has a
                                    fund size above our threshold. In our poll of industry experts this has the highest
                                    recommendation to buy based on future Growth. It has also outperformed the Nifty
                                    significantly.</p>
                                <h4>Franklin India Smaller Companies Fund</h4>
                                <p>It has been given stellar performance in the past. In 5 years investments have
                                    multiplied 4.2times.The fund size and duration of funds performance are well above
                                    our threshold. In our poll of industry experts this has the highest recommendation
                                    to buy based on future Growth. It has hugely outperformed the Nifty over the
                                    period.</p>
                                <h4>Birla Sun life Gilt Fund </h4>
                                <p>The fund is the top performing fund for a long period. We expect Gilt funds to
                                    perform well in the near future as we see interest rates going down. This fund has
                                    consistently outperformed the fixed deposits by 1-2% in the last 3 years and given
                                    return of over 12%. If maintained for over 3 years this has no tax giving 12% post
                                    tax returns. </p>
                            </div>
                        </div>
                    </div>
                    <div className="detailOuter text-center"><a href="" className="btn btn-primary primary_btn_red">invest now</a></div>
                </section>

                <section className="topAdvisorNear">
                    <h3>Top advisor near you</h3>
                    <ul>
                        <li>
                            <a href="javascript:void(0)">
                                <span className="photo"></span>
                                <h4>Sudheer Kumar</h4>
                                <p>M. Com</p>
                                <p>20 years experience</p>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <span className="photo"></span>
                                <h4>Sudheer Kumar</h4>
                                <p>M. Com</p>
                                <p>20 years experience</p>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <span className="photo"></span>
                                <h4>Sudheer Kumar</h4>
                                <p>M. Com</p>
                                <p>20 years experience</p>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <span className="photo"></span>
                                <h4>Sudheer Kumar</h4>
                                <p>M. Com</p>
                                <p>20 years experience</p>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <span className="photo"></span>
                                <h4>Sudheer Kumar</h4>
                                <p>M. Com</p>
                                <p>20 years experience</p>
                            </a>
                        </li>

                    </ul>
                </section>

            </div>
        </div>
    )
}

export default StockPlanner;