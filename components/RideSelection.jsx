import tw from 'tailwind-styled-components';
import Car from './Car';
import { carList } from '../data/carList';

const RideSelection = () => {
  return (
    <Wrapper>
      <CarList>
        {carList.map((car) => (
          <Car
            key={car.multiplier}
            image={car.imgUrl}
            service={car.service}
            multiplier={car.multiplier}
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
