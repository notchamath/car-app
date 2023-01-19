import { useDispatch, useSelector } from 'react-redux';
import {changeName, changeCost, addCar} from '../store/index';

export default function CarForm() {

  const dispatch = useDispatch();

  const {name, cost} = useSelector(state => {
    return state.form;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  }
  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCar({name, cost}));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">

        <form onSubmit={handleSubmit}>

          <div className="field-group">
            <div className="field">
              <label className="label">Name</label>
              <input 
                type="text" 
                className="input is-expanded" 
                value={name} 
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="field">
              <label className="label">Cost</label>
              <input 
                type="number" 
                className="input is-expanded" 
                value={cost || ''} 
                onChange={handleCostChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <button className="button is-link">Submit</button>
          </div>

        </form>

      </h4>
    </div>
  )
}
