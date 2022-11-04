import React from "react";
import "../../../styles/common/detail.scss";
import relaManger from "../../../../images/relaManger.png";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { detailbody } from "./trans_const";
import Message from "./message";
import Cancel from "./Cancel";

function Detail({ showtrans }) {
  const [cancel, setcancel] = useState(true);
  const [state,setState]= useState({messagetoggle: false,canceltoggle:false});
  return (
    <>
        <section className="accContent">
          <div className="trasactionHead group">
            <Link
              onClick={() => 
                showtrans(true)}
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
                  {detailbody.map((val ,index) => {
                    return (
                      <>
                        <tr className="singleTransDetRow">
                          <td width="20%">
                            <span className="rowTitle">{val.trans_no}</span>
                          </td>
                          <td>
                            Transaction ID <strong>{val.trans_ID}</strong>
                          </td>
                          <td width="35%" className="text-right">
                            Request Recieved on <strong>{val.date}</strong>
                          </td>
                        </tr>

                        <tr>
                          <td width="20%">
                            <span className="rowTitle"> PRODUCT INFO</span>
                          </td>
                          <td>
                            <div className="productInfo">
                              {val.ITEMS}
                              <br />
                              <span>{val.sip_amt}</span>
                            </div>
                          </td>
                          <td className="text-right">
                            <Link
                              to="#"
                              className="secondary_btn_red small_btn cancelTransBtn"
                              onClick={() => setState({...state,canceltoggle:!state.canceltoggle})}
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
                              <div
                                className={`completeBarLine ${
                                  val.width ? "halfWidth" : "fullWidth"
                                }`}
                              ></div>
                            </div>
                            <ul className="statusInfo group">
                              {val.status_info.map((status) => {
                                return (
                                  <>
                                    <li
                                      className={
                                        status.active && "complete_status"
                                      }
                                    >
                                      <strong className="complete_status_title">
                                        {status.title}
                                      </strong>
                                      <br />
                                      <span>{status.progress}</span>
                                      <br />
                                      {status.date}{" "}
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td width="20%">
                            <span className="rowTitle">
                              {" "}
                              RELATIONSHIP MANAGER
                            </span>
                          </td>
                          <td colSpan="2">
                            <div className="relationManagerPic">
                              <img src={relaManger} />
                            </div>
                            <div className="relMangInfo">
                              {val.manager_name} <br />
                              <span>
                                <em>{val.manage_rating}</em> Rating
                              </span>
                            </div>

                            <div className="messageLink">
                              <Link to="#" onClick={()=> setState({...state,messagetoggle:!state.messagetoggle})}>{val.message}</Link>
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
                        </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
                      
        </section>
        {state.messagetoggle && <Message state={state} setState={setState} />}
      {state.canceltoggle && <Cancel state={state} setState={setState} />}
    </>
  );
}

export default Detail;
