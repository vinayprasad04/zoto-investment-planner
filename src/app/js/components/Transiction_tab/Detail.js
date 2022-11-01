import React from "react";
import "../../../styles/common/detail.scss"

function Detail({showtrans}) {
  return (
    <section class="accContent">
      <div class="trasactionHead group">
        <a onClick={()=>{
            showtrans(true)
        }} href="javascript:void(0);" class="backtoTrans">
          BACK TO TRANSACTIONS
        </a>

        <div class="updateNowBtn">
          <a href="javascript:void(0);">Updated Just now</a>
        </div>
      </div>

      <div class="tabContainer">
        <h2>Details for Order ID 282490015</h2>
        <div class="singleTransTable">
          <table>
            <tbody>
              <tr>
                <th>2 ITEMS</th>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr class="singleTransDetRow">
                <td width="20%">
                  <span class="rowTitle">01</span>
                </td>
                <td>
                  Transaction ID <strong>6922400</strong>
                </td>
                <td width="35%" class="text-right">
                  Request Recieved on <strong>13/07/2016</strong>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <span class="rowTitle"> PRODUCT INFO</span>
                </td>
                <td>
                  <div class="productInfo">
                    DSP BlackRock World Gold Fund
                    <br />
                    <span>SIP Amount Rs. 12,000, Monthly</span>
                  </div>
                </td>
                <td class="text-right">
                  <a
                    href="javascript:void(0);"
                    class="secondary_btn_red small_btn cancelTransBtn"
                  >
                    CANCEL
                  </a>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <span class="rowTitle"> STATUS</span>
                </td>
                <td colspan="2">
                  <div class="completedBarBox">
                    <div class="completeBarLine"></div>
                  </div>
                  <ul class="statusInfo group">
                    <li class="complete_status">
                      <strong>Request Status</strong>
                      <br />
                      <span>Recieved</span>
                      <br />
                      Estimated 24th May
                    </li>
                    <li>
                      <strong>Documents</strong>
                      <br />
                      <span>Upcoming</span>
                      <br />
                      Estimated 24th May
                    </li>
                    <li>
                      <strong>Payment</strong>
                      <br />
                      <span>Upcoming</span>
                      <br />
                      Estimated 24th May
                    </li>
                    <li>
                      <strong>Purchase</strong>
                      <br />
                      <span>Upcoming</span>
                      <br />
                      Estimated 24th May
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <span class="rowTitle"> RELATIONSHIP MANAGER</span>
                </td>
                <td colspan="2">
                  <div class="relationManagerPic">
                    <img src="images/relaManger.png" />
                  </div>
                  <div class="relMangInfo">
                    Nitish Rathi <br />
                    <span>
                      <em>4.3</em> Rating
                    </span>
                  </div>

                  <div class="messageLink">
                    <a href="javascript:void(0);">SEND A MESSAGE</a>
                  </div>
                </td>
              </tr>

              <tr class="transHelpNote">
                <td width="20%"></td>
                <td colspan="2">
                  Need help with anything? Reach us on{" "}
                  <a href="javascript:void(0);">support@prosperx.com</a>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr class="singleTransDetRow">
                <td width="20%">
                  <span class="rowTitle">02</span>
                </td>
                <td>
                  Transaction ID <strong>6922400</strong>
                </td>
                <td width="35%" class="text-right">
                  Request Recieved on <strong>13/07/2016</strong>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <span class="rowTitle"> PRODUCT INFO</span>
                </td>
                <td>
                  <div class="productInfo">
                    Sundaram Rural India Fund - Regular Plan
                    <br />
                    <span>SIP Amount Rs. 12,000, Monthly</span>
                  </div>
                </td>
                <td class="text-right">
                  <a href="javascript:void(0);" class="cancelBtn disable">
                    CANCEL
                  </a>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <span class="rowTitle"> STATUS</span>
                </td>
                <td colspan="2">
                  <div class="completedBarBox">
                    <div class="completeBarLine"></div>
                  </div>
                  <ul class="statusInfo group">
                    <li>
                      <strong>Request Status</strong>
                      <br />
                      <span>Recieved</span>
                      <br />
                      Estimated 24th May
                    </li>
                    <li>
                      <strong>Documents</strong>
                      <br />
                      <span>Upcoming</span>
                      <br />
                      Estimated 24th May
                    </li>
                    <li class="complete_status">
                      <strong>Payment</strong>
                      <br />
                      <span>Upcoming</span>
                      <br />
                      Estimated 24th May
                    </li>
                    <li>
                      <strong>Purchase</strong>
                      <br />
                      <span>Upcoming</span>
                      <br />
                      Estimated 24th May
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <span class="rowTitle"> RELATIONSHIP MANAGER</span>
                </td>
                <td colspan="2">
                  <div class="relationManagerPic">
                    <img src="images/relaManger.png" />
                  </div>
                  <div class="relMangInfo">
                    Akshit Kumar <br />
                    <span>
                      <em>4.3</em> Rating
                    </span>
                  </div>

                  <div class="messageLink">
                    <a href="javascript:void(0);">2 MESSAGES</a>
                  </div>
                </td>
              </tr>

              <tr class="transHelpNote">
                <td width="20%"></td>
                <td colspan="2">
                  Need help with anything? Reach us on{" "}
                  <a href="javascript:void(0);">support@prosperx.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Detail;
