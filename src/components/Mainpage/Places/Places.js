import "./Places.css";
import { Card, CardDetails } from "../UI/Card";
import Rate from "../UI/Rate";

const Places = (props) => {
  return (
    <div className="places">
      <h3>Inspiration for your next adventure</h3>
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
      </div>
      
    </div>
  );
};

export default Places;
