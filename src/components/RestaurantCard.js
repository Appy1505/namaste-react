import { CDN_URL } from '../utils/constants';

const ResCard = (props) =>{
    const {resList} = props;
    const res = resList.info;
    return (<div className="res-card">
      <img className="foodLogo" src={CDN_URL+res.cloudinaryImageId} />
      <h3>{res.name}</h3>
      <h3>{res.cuisines.join(', ')}</h3>
      <h3> {res.avgRating} Stars</h3>
      <h3>{res.deliveryTime} minutes</h3>
    </div>)
  }
  export default ResCard;