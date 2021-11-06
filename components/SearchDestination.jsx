import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const SearchDestination = () => {
  const inputRef = useRef(null);
  const [pickup, setPickup] = useState('');
  const [dropOf, setDropOf] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOfSuggestions, setDropOfSuggestions] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
    const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?country=bd&limit=10&types=address%2Cregion%2Cdistrict%2Clocality%2Cplace%2Ccountry%2Cpostcode%2Cneighborhood%2Cpoi&language=en&autocomplete=true&fuzzyMatch=true&routing=true&worldview=us&access_token=pk.eyJ1IjoicmF5aGFuLWlzbGFtIiwiYSI6ImNrdmtsY3pwdjBid3Ayb3Vwdmh1Z2N3ZHIifQ.Lg-VSGFuXFZbfWbUWbhNRQ`;
    const fetchPlaces = async () => {
      const res = await fetch(api);
      const data = await res.json();

      setPickupSuggestions(
        data?.features?.map((suggestion) => suggestion?.place_name)
      );
    };

    if (pickup.length > 0) {
      fetchPlaces();
    }
  }, [pickup]);

  useEffect(() => {
    const api = `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOf}.json?country=bd&limit=10&types=address%2Cregion%2Cdistrict%2Clocality%2Cplace%2Ccountry%2Cpostcode%2Cneighborhood%2Cpoi&language=en&autocomplete=true&fuzzyMatch=true&routing=true&worldview=us&access_token=pk.eyJ1IjoicmF5aGFuLWlzbGFtIiwiYSI6ImNrdmtsY3pwdjBid3Ayb3Vwdmh1Z2N3ZHIifQ.Lg-VSGFuXFZbfWbUWbhNRQ`;
    const fetchPlaces = async () => {
      const res = await fetch(api);
      const data = await res.json();

      setDropOfSuggestions(
        data?.features?.map((suggestion) => suggestion?.place_name)
      );
    };

    if (dropOf.length > 0) {
      fetchPlaces();
    }
  }, [dropOf]);

  const handlePickupClick = (text) => {
    setPickup(text);
    setPickupSuggestions([]);
  };

  const handleDropOfClick = (text) => {
    setDropOf(text);
    setDropOfSuggestions([]);
  };

  return (
    <>
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="/assets/left.png" alt="Back" />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="/assets/filled-circle.png" alt="circle icon" />
          <Line src="/assets/vertical-line.png" alt="vertical line" />
          <Square src="/assets/square-full.png" alt="circle icon" />
        </FromToIcons>

        <InputBoxes>
          <Location>
            <Input
              onChange={(e) => setPickup(e.target.value)}
              value={pickup}
              ref={inputRef}
              placeholder="Enter Pickup location"
            />
            <CurrentLocationBtn
              src="/assets/location.png"
              alt="Location button"
            />

            {pickupSuggestions?.length > 0 && (
              <SuggestionList>
                {pickupSuggestions?.map((suggestion) => {
                  return (
                    <Suggestion
                      onClick={() => handlePickupClick(suggestion)}
                      key={suggestion}
                    >
                      {suggestion}
                    </Suggestion>
                  );
                })}
              </SuggestionList>
            )}
          </Location>

          <Location>
            <Input
              onChange={(e) => setDropOf(e.target.value)}
              value={dropOf}
              placeholder="Where to go?"
            />

            {dropOfSuggestions?.length > 0 && (
              <SuggestionList>
                {dropOfSuggestions?.map((suggestion) => {
                  return (
                    <Suggestion
                      onClick={() => handleDropOfClick(suggestion)}
                      key={suggestion}
                    >
                      {suggestion}
                    </Suggestion>
                  );
                })}
              </SuggestionList>
            )}
          </Location>
        </InputBoxes>

        <PlusButton src="/assets/plus-math.png" alt="Button" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="/assets/star--v1.png" alt="Saved place icon" />
        Saved Places
      </SavedPlaces>

      {!pickup.length ? (
        <p className="mt-5 font-semibold text-center">
          please write down your current or pickup location and
        </p>
      ) : (
        ''
      )}

      {!dropOf.length ? (
        <p className="font-semibold text-center">your destination</p>
      ) : (
        ''
      )}

      <Link
        href={{
          pathname: '/confirm',
          query: { pickup: pickup, dropOf: dropOf },
        }}
        passHref
      >
        {pickup.length > 0 && dropOf.length > 0 ? (
          <ConfirmLocation type="button" disabled>
            Confirm Location
          </ConfirmLocation>
        ) : (
          <> </>
        )}
      </Link>
    </>
  );
};

export default SearchDestination;

const Suggestion = tw.div`
  text-xs text-semibold p-2 border-b cursor-pointer hover:bg-gray-200 
`;

const SuggestionList = tw.div`
  z-50 h-56 bg-white absolute top-12 left-0 w-full overflow-y-scroll scrollbar-hide
`;

const Location = tw.div`
  relative 
`;
const CurrentLocationBtn = tw.img`
  absolute top-2.5 right-0.5 h-9 w-9 rounded-xl bg-white p-2 cursor-pointer
`;

const ButtonContainer = tw.section`
  bg-white px-4 py-2
`;

const BackButton = tw.img`
  h-12 cursor-pointer
`;

const InputContainer = tw.div`
  bg-white flex space-x-2 px-1 items-center
`;

const FromToIcons = tw.div`
  w-10 flex flex-col items-center
`;
const Circle = tw.img`
  h-2.5
`;
const Square = tw.img`
  h-3
`;

const Line = tw.img`
  h-12
`;

const InputBoxes = tw.div`
  flex flex-col flex-1 justify-between
`;
const Input = tw.input`
  h-10 bg-gray-200 flex-1 w-full my-2 p-2 rounded-2 outline-none border-none focus:outline-none
`;

const PlusButton = tw.img`
  w-10 h-10 bg-gray-200 rounded-full cursor-pointer scale-95 transform hover:-translate-y-1 hover:scale-100 transition duration-200
`;

const SavedPlaces = tw.div`
  bg-white px-4 py-2 flex items-center text-xl font-semibold my-2 cursor-pointer
`;
const StarIcon = tw.img`
  bg-gray-400 h-10 w-10 rounded-full p-2 mr-2 hover:bg-yellow-500
`;

const ConfirmLocation = tw.div`
  h-10 bg-black text-white text-center px-4 py-2 mx-3 my-3 cursor-pointer font-semibold text-lg flex items-center justify-center
`;
