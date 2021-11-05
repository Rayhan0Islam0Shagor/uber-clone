import { useRef, useEffect } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const SearchDestination = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <Link href="/" passHref>
        <ButtonContainer>
          <BackButton src="/assets/left.png" alt="Back" />
        </ButtonContainer>
      </Link>

      <InputContainer>
        <FromToIcons>
          <Circle src="/assets/filled-circle.png" alt="circle icon" />
          <Line src="/assets/vertical-line.png" alt="vertical line" />
          <Square src="/assets/square-full.png" alt="circle icon" />
        </FromToIcons>

        <InputBoxes>
          <Input ref={inputRef} placeholder="Enter Pickup location" />
          <Input placeholder="Where to go?" />
        </InputBoxes>

        <PlusButton src="/assets/plus-math.png" alt="Button" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="/assets/star--v1.png" alt="Saved place icon" />
        Saved Places
      </SavedPlaces>

      <ConfirmLocation>Confirm Location</ConfirmLocation>
    </Wrapper>
  );
};

export default SearchDestination;

const Wrapper = tw.div``;

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
  h-10 bg-gray-200 flex-1 my-2 p-2 rounded-2 outline-none border-none focus:outline-none
`;

const PlusButton = tw.img`
  w-10 h-10 bg-gray-200 rounded-full cursor-pointer scale-95 transform hover:-translate-y-1 hover:scale-100 transition duration-200
`;

const SavedPlaces = tw.div`
  bg-white px-4 py-2 flex items-center text-xl font-semibold my-2
`;
const StarIcon = tw.img`
  bg-gray-400 h-10 w-10 rounded-full p-2 mr-2
`;

const ConfirmLocation = tw.div`
  h-10 bg-black text-white text-center px-4 py-2 mx-3 my-3 cursor-pointer font-semibold text-lg flex items-center justify-center
`;
