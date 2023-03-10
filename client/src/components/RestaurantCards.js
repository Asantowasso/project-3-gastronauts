import './styles/wheel.css';
import { useNavigate } from "react-router-dom";
import moon from '../asset/images/planet1.PNG';
import dipper from '../asset/images/dipper.PNG';
import comet from '../asset/images/comet.PNG';
import nova from '../asset/images/nova.PNG';

// import './https://fonts.googleapis.com/css?family=Open+Sans:300i,400';

const ReservationCards = () => {

  let navigate = useNavigate();

  const routeChangeMoon = () => {
    let path = `overview`;
    let index = 0;
    navigate(path);
  }

  const routeChangeDipper = () => {
    let path = `overview`;
    let index = 1;
    navigate(path);
  }

  const routeChangeComet = () => {
    let path = `overview`;
    let index = 2;
    navigate(path);
  }

  const routeChangeNova = () => {
    let path = `overview`;
    let index = 3;
    navigate(path);
  }

    return (
        <div className = "container">
            <div className="card moon">
        <h3 className="title">Maggie's Moon Pies</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
          <button className="button" onClick = {routeChangeMoon}>More Maggie's</button>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle id = "circleView" className="stroke" cx="60" cy="60" r="50"/>
          <image href = {moon} alt = "moon" />
        </svg>
        </div>
      </div>
      <div className="card">
        <h3 className="title">Far Out Bar</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
          <button className="button" onClick = {routeChangeDipper}>More Far Out</button>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="50"/>
          <image href = {dipper} />
        </svg>
        </div>
      </div>
      <div className="card">
        <h3 className="title">Estella's</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
          <button className="button" onClick = {routeChangeComet}>More Estella's</button>
        </div>
        <div className="circle">
          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="50"/>
          <image href = {comet} alt = "comet" />
        </svg>
        </div>
      </div>
      <div className="card">
        <h3 className="title">At the End of the Universe</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
          <button className="button" onClick = {routeChangeNova}>More At the End</button>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="50"/>
          <image href = {nova} />
        </svg>
        </div>
      </div>
        </div>
    )
}

export default ReservationCards;