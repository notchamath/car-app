import { useSelector } from 'react-redux';

export default function CarValue() {

  const totalCost = useSelector(({cars: {data, searchTerm}}) => {
    return data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase())
    }).reduce((total, car) => total + car.cost, 0);
  });

  return (
    <div className='car-value'>
      Total Cost: ${totalCost}
    </div>
  )
}
