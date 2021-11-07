import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Car from './Car';
import { carList } from '../data/carList';

const RideSelection = ({ pickup, dropOf }) => {
  const [rideDuration, setRideDuration] = useState(0);

  console.log(pickup, dropOf);

  useEffect(() => {
    const getDuration = async () => {
      const res = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${
          pickup && pickup[0]
        },${pickup && pickup[1]}; ${dropOf && dropOf[0]},${
          dropOf && dropOf[1]
        }?access_token=pk.eyJ1IjoicmF5aGFuLWlzbGFtIiwiYSI6ImNrdmtsY3pwdjBid3Ayb3Vwdmh1Z2N3ZHIifQ.Lg-VSGFuXFZbfWbUWbhNRQ`
      );
      const data = await res.json();

      if (data) {
        setRideDuration(data?.routes[0]?.distance / 100);
      }
    };

    getDuration();
  }, [pickup, dropOf]);

  return (
    <Wrapper>
      <CarList>
        {carList.map((car) => (
          <Car
            key={car.multiplier}
            image={car.imgUrl}
            service={car.service}
            multiplier={car.multiplier}
            rideDuration={rideDuration}
          />
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelection;

const CarList = tw.div`

`;

const Wrapper = tw.div`
    flex-1  overflow-y-scroll scrollbar-hide
`;
