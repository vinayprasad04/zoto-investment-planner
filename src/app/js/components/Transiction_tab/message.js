import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/common/message.scss";
import relaManger from "../../../../images/relaManger.png";

function Message({ setState }) {
  return (
    <div
      id="sendMsgLightbox"
      className="commonLightbox"
      style={{ display: "block" }}
    >
      <div
        className="lightBox_container msgLgt_box"
        style={{ marginTop: "93px" }}
      >
        <div className="lgtCloseBtn">
          <Link
            className="lightboxCloseBtn"
            onClick={() => {
              setState(() => {
                return { loginTogal: false };
              });
            }}
          >
            Close
          </Link>
        </div>

        <div className="acc_lg_head">
          <h2>Conversation</h2>
        </div>

        <section className="msgHistory">
          <article className="group">
            <div className="msgUserPic">
              <img src={relaManger} />
            </div>
            <div className="msgUserContent">
              <h6>
                <strong>Nikhil Dua</strong> to <strong>You</strong> Today,
                12:00pm
              </h6>
              <p>
                Hi Nitin, for documents you can always go to your profile and
                upload them yourself to fasten up process. Or we can arrange a
                pickup at your home or office. Just send a message or call when
                you are ready to schedule a time.{" "}
              </p>
            </div>
          </article>

          <article className="group">
            <div className="msgUserPic">
              <img src={relaManger} />{" "}
            </div>
            <div className="msgUserContent">
              <h6>
                <strong>You Replied</strong> Just Now.
              </h6>
              <p>
                Thanks. Will look at upload if it works, or will it be possible
                to schedule a visit on Monday? Example message here.{" "}
              </p>
            </div>
          </article>
        </section>

        <div className="msgTextbox group">
          <input
            type="text"
            placeholder="Write your Reply…"
            className="textField filledInput"
          />
           <Link className="fileAttachBtn">attachement</Link>
          <input
            type="submit"
            value="SEND"
            className="primary_btn_red small_btn"
          />

         
        </div>
      </div>
    </div>
  );
}

export default Message;
