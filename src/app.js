import  React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import BodyContainer from './components/Body';

const AppLayout = () =>{
  return (<div className="container">
    <HeaderComponent />
    <BodyContainer />
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <AppLayout />)
