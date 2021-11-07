import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Map from '../../components/Map';
import RideSelection from '../../components/RideSelection';

const Confirm = () => {
  const router = useRouter();
  const { pickup: pickupLocation, dropOf: dropOfLocation } = router.query;

  const [pickup, setPickup] = useState([0, 0]);
  const [dropOf, setDropOf] = useState([0, 0]);

  const getPickupCoordinates = (pickupLocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoicmF5aGFuLWlzbGFtIiwiYSI6ImNrdmtsY3pwdjBid3Ayb3Vwdmh1Z2N3ZHIifQ.Lg-VSGFuXFZbfWbUWbhNRQ',
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setPickup(data.features[0].center))
      .catch((e) => console.error(e));
  };

  const getDropOfCoordinates = (dropOfLocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOfLocation}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoicmF5aGFuLWlzbGFtIiwiYSI6ImNrdmtsY3pwdjBid3Ayb3Vwdmh1Z2N3ZHIifQ.Lg-VSGFuXFZbfWbUWbhNRQ',
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setDropOf(data.features[0].center))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getPickupCoordinates(pickupLocation);
    getDropOfCoordinates(dropOfLocation);
  }, [pickupLocation, dropOfLocation]);

  return (
    <Wrapper>
      <Map pickup={pickup} dropOf={dropOf} />
      <RideContainer>
        <Title>Choose a ride, or swipe up for more</Title>
        <RideSelection pickup={pickup} dropOf={dropOf} />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
      <Link href="/search" passHref>
        <BackButtonContainer>
          <BackButton src="/assets/left.png" alt="back" />
        </BackButtonContainer>
      </Link>
    </Wrapper>
  );
};

export default Confirm;

const BackButtonContainer = tw.div`
    absolute top-2 left-2 bg-gray-100 rounded-full p-2 cursor-pointer shadow-md
`;

const BackButton = tw.img`
    h-6
`;

const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b uppercase font-semibold
`;

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
    border-t-2 bg-gray-100 p-3
`;

const ConfirmButton = tw.div`
    py-2 bg-black text-white text-center cursor-pointer font-semibold text-lg
`;

const Wrapper = tw.section`
  flex flex-col h-screen container m-auto max-w-screen-md 
  bg-gray-50 relative
`;
