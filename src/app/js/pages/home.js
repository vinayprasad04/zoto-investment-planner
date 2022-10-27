import {React, useState} from "react";
import banner from './../../static/images/invest-style.png';
import calcproc1 from './../../static/images/calcproc1.png';
import calcproc2 from './../../static/images/calcproc2.png';
import calcproc3 from './../../static/images/calcproc3.png';
import calcfundrecbg from './../../static/images/calcfundrecbg.png';
import iconDummy1 from './../../static/images/icon-dummy-1.svg';
import iconDummy2 from './../../static/images/icon-dummy-2.svg';
import iconDummy3 from './../../static/images/icon-dummy-3.svg';
import {Link} from "react-router-dom";
function Home() {
    const [open, setOpen] = useState(false);

    return (
        <div className="RiskProfiland">
            <div className="RiskProfilandBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"><img src={banner} alt=""/></div>
                        <div className="col-lg-6">
                            <h2>Invest smartly to get best returns for you</h2>
                            <p>Your investment style depends on following : </p>
                            <ul>
                                <li>Personal needs and goals</li>
                                <li>Current financial situation & investments</li>
                                <li>Investment time horizon</li>
                                <li>Level of knowledge on investment issues</li>
                            </ul>
                            <p>This decides how you should invest to achieve your investment goals.</p>
                            <p>Take this simple quiz now to know your investment style.</p>
                            <Link to="/planner" className={'btn btn-primary'}>Plan Now</Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="homeMutualContent CalcHomeBgProces">
                <div className="container">
                    <h2>Simple Investment Process</h2>
                    <div className="group">
                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc1}/></div>
                            <h3>Simple Investment Process</h3>
                            <p>Tell us your requirement<br/>with simple form</p>
                        </article>

                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc2}/></div>
                            <h3>Top Fund Recommendations</h3>
                            <p> Our machines understand your<br/>needs and recommends the<br/>best funds</p>
                        </article>

                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc3}/></div>
                            <h3>Watch Your Money Grow</h3>
                            <p>Invest quickly and Watch your<br/>money grow</p>
                        </article>
                    </div>
                </div>
            </div>

            <div className="homeMutualContent CalcHomeBgProces CalcFundRec">
                <div className="container">
                    <h2>How Are Funds Recommended?</h2>
                    <img src={calcfundrecbg} alt="How Are Funds Recommended?"/>
                </div>
            </div>

            <div className="homeMutualContent CalcHomeBgProces CalcRisk">
                <div className="container">
                    <div className="resultsurvey">
                        <h2>What’s Risk Profile?</h2>
                        <ul>
                            <li>
                                <span className="conv"></span>
                                <h4>Conservative</h4>
                                <p>Retired and other investors who need to preserve capital and earn regular income</p>
                            </li>
                            <li>
                                <span className="agg"></span>
                                <h4>Aggressive</h4>
                                <p>Investors seeking income and moderate growth</p><br/>
                                <p>Investors looking for growth and stability with moderate risk</p>
                            </li>
                            <li>
                                <span className="mod"></span>
                                <h4>Moderate</h4>
                                <p>Investors in their prime earning years and willing to take more risk</p><br/>
                                <p>Investors seeking growth over a long term</p>
                            </li>
                        </ul>
                        <a href="" className="secondary_btn_red ">Know your risk profile</a>
                    </div>

                </div>
            </div>

            <div className="homeMutualContent calcMutualCont">
                <div className="container">
                    <h2>Why Invest in Mutual Funds?</h2>

                    <div className="group">
                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={iconDummy1}/></div>
                            <h3>Subheader will appear here</h3>
                            <p> Each fund's investments are chosen and monitored by qualified professionals who use this
                                money to create a portfolio. </p>
                        </article>

                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={iconDummy2}/></div>
                            <h3>Know your investment requirement</h3>
                            <p> The objective is the goal that the fund manager sets for the mutual fund when deciding
                                which stocks and bonds should be in the fund's portfolio.</p>
                        </article>

                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={iconDummy3}/></div>
                            <h3>Example sub headline</h3>
                            <p> Investing is probably something you simply do not have the time or knowledge to get
                                involved in. You are not the only one. </p>
                        </article>
                    </div>
                </div>
            </div>

            <div className="homeMutualContent calcLeTopfunds">
                <div className="container">
                    <h2>Top Funds</h2>
                    <div className="group">
                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc1}/></div>
                            <h3>Top Debt Funds</h3>
                            <p>More than FD returns</p>
                        </article>

                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc2}/></div>
                            <h3>Top Equity Funds</h3>
                            <p>Long term investments</p>
                        </article>

                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc3}/></div>
                            <h3>Top Liquid Funds</h3>
                            <p>Better than Savings to park your surplus amount</p>

                        </article>
                        <article className="mutFundContArticle">
                            <div className="mutFundIcon"><img src={calcproc3}/></div>
                            <h3>Better Tax Saving Option</h3>
                            <p>Better Tax Saving Option</p>
                        </article>
                    </div>
                </div>
            </div>

            <footer className="footerMain">
                <div className="container">
                    <div className="group">
                        <article className="footerCols">
                            <h3>GOAL PLANNING</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Retirement Planning </a></li>
                                <li><a href="javascript:void(0);">Buying an Asset </a></li>
                                <li><a href="javascript:void(0);">Education </a></li>
                                <li><a href="javascript:void(0);">Build Wealth </a></li>
                            </ul>
                        </article>

                        <article className="footerCols">
                            <h3>PRODUCTS</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Mutual Funds </a></li>
                                <li><a href="javascript:void(0);">Life Insurance </a></li>
                                <li><a href="javascript:void(0);">Health Insurance </a></li>
                                <li><a href="javascript:void(0);">Deposits Loans </a></li>
                            </ul>
                        </article>

                        <article className="footerCols">
                            <h3>PROSPER X</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Home</a></li>
                                <li><a href="javascript:void(0);">Company </a></li>
                                <li><a href="javascript:void(0);">Our Team</a></li>
                                <li><a href="javascript:void(0);">Products</a></li>
                                <li><a href="javascript:void(0);">Work With Us</a></li>
                                <li><a href="javascript:void(0);">Contact Us</a></li>
                            </ul>
                        </article>

                        <article className="footerCols">
                            <h3>COMMUNITY</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Ask a Question </a></li>
                                <li><a href="javascript:void(0);">Browse Topics </a></li>
                                <li><a href="javascript:void(0);">Tips &amp; Resources</a></li>
                            </ul>
                        </article>

                        <article className="footerSuport">
                            <h3>&nbsp;</h3>
                            <p>Have Questions? Call us on 1-800-400-1919 <br/>
                                Or Leave us a Message at <a href="mailto:support@prosperx.com">support@prosperx.com</a>
                                <br/>Get custom Quote & Advice</p>
                        </article>
                    </div>

                    <div className="footerCopyright">
                        <ul>
                            <li>Copyright © 2016 ProsperX | All Rights Reserved</li>
                            <li><a href="javascript:void(0);">Terms of Use</a></li>
                            <li><a href="javascript:void(0);">Privacy</a></li>
                            <li><a href="javascript:void(0);">Legal</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
}
export default Home;
