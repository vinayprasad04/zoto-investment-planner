import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Detail from "./Detail";
import '../../../styles/common/transiction.scss'

function Tab() {
  const [tab, activetab] = useState(0);
  const [trans, showtrans] = useState(true);

  return (
    <>
      {trans ? (
        <section className="accContent">
          <div className="trasactionHead group">
            <ul className="accountTabsNav group">
              <li onClick={() => activetab(0)}>
                <Link to="#" data-title="tab_1">
                  ALL TRANSACTIONS
                </Link>
              </li>
              <li onClick={() => activetab(1)}>
                <Link to="#" data-title="tab_2" className="">
                  OPEN REQUESTS
                </Link>
              </li>
              <li onClick={() => activetab(2)}>
                <Link to="#" data-title="tab_3" className="">
                  CANCELLED
                </Link>
              </li>
            </ul>

            <div className="updateNowBtn">
              <Link to="#">Updated Just now</Link>
            </div>
          </div>

          <div className="tabContainer">
            <div className="tabContent" id="tab_1" hidden={tab != 0}>
              <h2>You have 3 total transactions</h2>
              <div className="transactionTable">
                <table>
                  <tbody>
                    <tr>
                      <th width="15%">DATE</th>
                      <th width="15%">ORDER ID</th>
                      <th width="30%">ITEMS</th>
                      <th width="20%">STATUS</th>
                      <th width="10%">&nbsp;</th>
                    </tr>
                    <tr>
                      <td>13/07/ 2016</td>
                      <td>6922400</td>
                      <td>
                        <strong>DSP BlackRock World Gold Fund</strong>
                      </td>
                      <td>Payment Recieved</td>
                      <td>
                        <Link to='#'onClick={() => showtrans(false)}>Details</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>13/07/ 2016</td>
                      <td>6922400</td>
                      <td>
                        <strong>2 Items</strong>
                      </td>
                      <td>Verifying Documents</td>
                      <td>
                      <Link to='#'onClick={() => showtrans(false)}>Details</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>13/07/ 2016</td>
                      <td>6922400</td>
                      <td>
                        <strong>Retirement Goal</strong>
                      </td>
                      <td>Cancelled</td>
                      <td>
                      <Link to='#'onClick={() => showtrans(false)}>Details</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br>
                                <br> */}
            </div>

            <div className="tabContent" id="tab_2" hidden={tab != 1}>
              <h2>OPEN REQUESTS</h2>
            </div>

            <div className="tabContent" id="tab_3" hidden={tab != 2}>
              <h2 className="group">CANCELLED</h2>
            </div>
          </div>
        </section>
      ) : (
        <Detail showtrans={showtrans} />
      )}
    </>
  );
}

export default Tab;
