import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {React} from "react";


const Planner = ()=>{
    return(
        <div className='container'>
            <div className="row">
                <div className="col-sm-4">
                    <Card>
                        <Card.Header>Stock Planner</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/stock-planner" className={'btn btn-primary'}>Plan Now</Link>
                        </Card.Body>
                    </Card>

                </div>
                <div className="col-sm-4">
                    <Card>
                        <Card.Header>Mutual Fund Planner</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/mutual-fund-planner" className={'btn btn-primary'}>Plan Now</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-4">
                    <Card>
                        <Card.Header>Mix Planner</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Link to="/mix-planner" className={'btn btn-primary'}>Plan Now</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default Planner;