import React from "react";
import "../../../styles/common/detail.scss";
import relaManger from "../../../../images/relaManger.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Detail({ showtrans }) {
  const [cancel, setcancel] = useState(true);

  return (
    <>
      {cancel ? (
        <section className="accContent">
          <div className="trasactionHead group">
            <Link
              onClick={() => {
                showtrans(true);
              }}
              to="#"
              className="backtoTrans"
            >
              BACK TO TRANSACTIONS
            </Link>

            <div className="updateNowBtn">
              <Link to="#">Updated Just now</Link>
            </div>
          </div>

          <div className="tabContainer">
            <h2>Details for Order ID 282490015</h2>
            <div className="singleTransTable">
              <table>
                <tbody>
                  <tr>
                    <th>2 ITEMS</th>
                  </tr>
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr className="singleTransDetRow">
                    <td width="20%">
                      <span className="rowTitle">01</span>
                    </td>
                    <td>
                      Transaction ID <strong>6922400</strong>
                    </td>
                    <td width="35%" className="text-right">
                      Request Recieved on <strong>13/07/2016</strong>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%">
                      <span className="rowTitle"> PRODUCT INFO</span>
                    </td>
                    <td>
                      <div className="productInfo">
                        DSP BlackRock World Gold Fund
                        <br />
                        <span>SIP Amount Rs. 12,000, Monthly</span>
                      </div>
                    </td>
                    <td className="text-right">
                      <Link
                        to="#"
                        className="secondary_btn_red small_btn cancelTransBtn"
                        onClick={() => setcancel(false)}
                      >
                        CANCEL
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%">
                      <span className="rowTitle"> STATUS</span>
                    </td>
                    <td colSpan="2">
                      <div className="completedBarBox">
                        <div className="completeBarLine halfWidth"></div>
                      </div>
                      <ul className="statusInfo group">
                        <li className="complete_status">
                          <strong className="complete_status_title">
                            Request Status
                          </strong>
                          <br />
                          <span>Recieved</span>
                          <br />
                          Estimated 24th May
                        </li>
                        <li>
                          <strong className="complete_status_title">
                            Documents
                          </strong>
                          <br />
                          <span>Upcoming</span>
                          <br />
                          Estimated 24th May
                        </li>
                        <li>
                          <strong className="complete_status_title">
                            Payment
                          </strong>
                          <br />
                          <span>Upcoming</span>
                          <br />
                          Estimated 24th May
                        </li>
                        <li>
                          <strong className="complete_status_title">
                            Purchase
                          </strong>
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
                      <span className="rowTitle"> RELATIONSHIP MANAGER</span>
                    </td>
                    <td colSpan="2">
                      <div className="relationManagerPic">
                        <img src={relaManger} />
                      </div>
                      <div className="relMangInfo">
                        Nitish Rathi <br />
                        <span>
                          <em>4.3</em> Rating
                        </span>
                      </div>

                      <div className="messageLink">
                        <Link to="#">SEND A MESSAGE</Link>
                      </div>
                    </td>
                  </tr>

                  <tr className="transHelpNote">
                    <td width="20%"></td>
                    <td colSpan="2">
                      Need help with anything? Reach us on{" "}
                      <Link to="#">support@prosperx.com</Link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr className="singleTransDetRow">
                    <td width="20%">
                      <span className="rowTitle">02</span>
                    </td>
                    <td>
                      Transaction ID <strong>6922400</strong>
                    </td>
                    <td width="35%" className="text-right">
                      Request Recieved on <strong>13/07/2016</strong>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%">
                      <span className="rowTitle"> PRODUCT INFO</span>
                    </td>
                    <td>
                      <div className="productInfo">
                        Sundaram Rural India Fund - Regular Plan
                        <br />
                        <span>SIP Amount Rs. 12,000, Monthly</span>
                      </div>
                    </td>
                    <td className="text-right">
                      <Link to="#" className="secondary_btn_red small_btn cancelTransBtn" onClick={() => setcancel(false)}>
                        CANCEL
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td width="20%">
                      <span className="rowTitle"> STATUS</span>
                    </td>
                    <td colSpan="2">
                      <div className="completedBarBox">
                        <div className="completeBarLine fullWidth"></div>
                      </div>
                      <ul className="statusInfo group">
                        <li>
                          <strong className="complete_status_title">
                            Request Status
                          </strong>
                          <br />
                          <span>Recieved</span>
                          <br />
                          Estimated 24th May
                        </li>
                        <li>
                          <strong className="complete_status_title">
                            Documents
                          </strong>
                          <br />
                          <span>Upcoming</span>
                          <br />
                          Estimated 24th May
                        </li>
                        <li className="complete_status">
                          <strong className="complete_status_title">
                            Payment
                          </strong>
                          <br />
                          <span>Upcoming</span>
                          <br />
                          Estimated 24th May
                        </li>
                        <li>
                          <strong className="complete_status_title">
                            Purchase
                          </strong>
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
                      <span className="rowTitle"> RELATIONSHIP MANAGER</span>
                    </td>
                    <td colSpan="2">
                      <div className="relationManagerPic">
                        <img src={relaManger} />
                      </div>
                      <div className="relMangInfo">
                        Akshit Kumar <br />
                        <span>
                          <em>4.3</em> Rating
                        </span>
                      </div>

                      <div className="messageLink">
                        <Link href="#">2 MESSAGES</Link>
                      </div>
                    </td>
                  </tr>

                  <tr className="transHelpNote">
                    <td width="20%"></td>
                    <td colSpan="2">
                      Need help with anything? Reach us on{" "}
                      <Link to="#">support@prosperx.com</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        <div id="cancelLightbox" className="commonLightbox">
          <div className="lightBox_container">
            <div className="lgtCloseBtn">
              <Link
                className="lightboxCloseBtn"
                onClick={() => setcancel(true)}
              >
                Close
              </Link>
            </div>

            <div className="cancelLgContent text-center">
              <h4>Cancel Transaction</h4>
              <h5>DSP BlackRock World Mining Fund</h5>
              <p>
                Are you sure you want to cancel this Order? If you have any
                questions about this product or process you can{" "}
                <Link to="#">send us a message</Link>.{" "}
              </p>
            </div>

            <div className="cancelLgBtns group">
              <input
                className="cancel_lg_Button secondary_btn_red"
                onClick={() => setcancel(true)}
                type="submit"
                value="Cancel"
              />
              <input
                className="confirm_lg_Button primary_btn_red"
                type="submit"
                value="Confirm"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
