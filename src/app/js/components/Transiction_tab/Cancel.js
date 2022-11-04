import React from 'react'
import { Link } from 'react-router-dom'

function Cancel({state , setState}) {
  return (
    <div id="cancelLightbox" className="commonLightbox">
          <div className="lightBox_container">
            <div className="lgtCloseBtn">
              <Link
                className="lightboxCloseBtn"
                onClick={() => setState({...state,canceltoggle:false})}
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
                onClick={() => setState({...state,canceltoggle:false})}
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
  )
}

export default Cancel