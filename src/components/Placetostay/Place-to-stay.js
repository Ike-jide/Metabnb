import React  from "react";
import "./Place-to-stay.css";
import Navbar from "../Mainpage/Navbar/Navbar";
import { Card, CardDetails } from "../Mainpage/UI/Card";
import Rate from "../Mainpage/UI/Rate";
import Footer from "../Mainpage/Footer/Footer";
function Placetostay(props){
    return(
        <div>
          <Navbar/>
        <nav className="nav-place">
            <ul>
                <li>Resturant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantasy</li>
                <li>beach</li>
                <li>Carbin</li>
                <li>Off-grid</li>
                <li>Farm</li>
              
              
                <input
             className="place-input"
              type="text"
              placeholder={"Location"}
              />
             
            </ul>
            
        </nav>
        <div>
        <div className="grid">
        <Card>
          <div>
            <img src={props.metas[0].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[0].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[0].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[0].distance}</p>
              <p>{props.metas[0].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[1].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[1].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[1].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[1].distance}</p>
              <p>{props.metas[1].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[2].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[2].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[2].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[2].distance}</p>
              <p>{props.metas[2].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[3].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[3].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[3].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[3].distance}</p>
              <p>{props.metas[3].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[4].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[4].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[4].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[4].distance}</p>
              <p>{props.metas[4].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[5].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[5].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[5].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[5].distance}</p>
              <p>{props.metas[5].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[6].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[6].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[6].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[6].distance}</p>
              <p>{props.metas[6].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[7].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[7].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[7].distance}</p>
              <p>{props.metas[7].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[8].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[8].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[8].distance}</p>
              <p>{props.metas[8].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[9].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[9].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[9].distance}</p>
              <p>{props.metas[9].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[10].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[10].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[10].distance}</p>
              <p>{props.metas[10].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[11].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[11].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[11].distance}</p>
              <p>{props.metas[11].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[12].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[12].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[12].distance}</p>
              <p>{props.metas[12].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[13].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[13].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[13].distance}</p>
              <p>{props.metas[13].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[14].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[14].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[14].distance}</p>
              <p>{props.metas[14].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
        <Card>
          <div>
            <img src={props.metas[15].image} alt="" className="card-img" />
            <CardDetails>
              <p>{props.metas[15].title}</p>
              <p style={{fontWeight:"bold"}}>{props.metas[7].space}</p>
              </CardDetails>
              <CardDetails>
              <p>{props.metas[15].distance}</p>
              <p>{props.metas[15].availability}</p>
              </CardDetails>
              <Rate></Rate>
          </div>
        </Card>
      </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Placetostay;