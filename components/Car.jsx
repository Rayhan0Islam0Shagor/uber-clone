import tw from 'tailwind-styled-components';

const Car = ({ rideDuration, image, service, multiplier }) => {
  return (
    <Wrapper>
      <CarImage src={image} alt="car" />

      <CarDetails>
        <Service>{service}</Service>
        <Time>5 min away</Time>
      </CarDetails>
      <Price>${(rideDuration * multiplier).toFixed(2)}</Price>
    </Wrapper>
  );
};

export default Car;

const Wrapper = tw.div`
    flex space-x-3 px-2 items-center cursor-pointer
`;
const CarDetails = tw.div`
    flex-1
`;
const Service = tw.div`
    font-medium
`;
const Time = tw.div`
    text-xs text-blue-500
`;
const Price = tw.div`
    text-sm font-semibold
`;
const CarImage = tw.img`
    h-16
`;
