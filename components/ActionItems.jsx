import { Menu } from '@headlessui/react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import DropDownMenu from './Menu';

const ActionItems = ({ user }) => {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <UberLogo src="/assets/Uber_logo_2018.svg" alt="uber logo"></UberLogo>
        <Profile>
          <Name>{user && user.name}</Name>

          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button>
                <UserImage
                  // onClick={() => signOut(auth)}
                  src={user && user.photoUrl}
                  alt="profile image"
                />
              </Menu.Button>
            </div>
            <DropDownMenu />
          </Menu>
        </Profile>
      </Header>
      {/* action buttons */}

      <ActionButtons>
        <Link href="/search" passHref>
          <ActionButton>
            <ActionButtonIcon src="/assets/uberx.png" alt="home icon" />
            Ride
          </ActionButton>
        </Link>
        <Link href="/search" passHref>
          <ActionButton>
            <ActionButtonIcon src="/assets/bike-2.png" alt="home icon" />
            2-Wheels
          </ActionButton>
        </Link>
        <Link href="/search" passHref>
          <ActionButton>
            <ActionButtonIcon src="/assets/uberschedule.png" alt="home icon" />
            Reserve
          </ActionButton>
        </Link>
      </ActionButtons>

      <Link href="/search" passHref>
        <InputButton>Where to go?</InputButton>
      </Link>
    </Wrapper>
  );
};

export default ActionItems;

const Header = tw.section`
    flex items-center justify-between my-4
`;

const UberLogo = tw.img`
    h-10 cursor-pointer
`;

const Profile = tw.div`
    flex items-center space-x-2 cursor-pointer
`;

const Name = tw.div`
    mx-4 text-md font-semibold truncate w-26
`;

const UserImage = tw.img`
    h-12 w-12 rounded-full object-cover border border-gray-200 p-px overflow-hidden
`;

const ActionButtons = tw.div`
    flex items-center space-x-4
`;

const ActionButton = tw.div`
    bg-gray-200 rounded-lg flex-1 my-1 h-32 items-center flex flex-col justify-center cursor-pointer transition duration-200 transform hover:scale-105 text-xl font-semibold
`;

const ActionButtonIcon = tw.img`
    h-3/5 
`;

const InputButton = tw.div`
    h-18 bg-gray-200 rounded-lg flex items-center cursor-pointer text-xl font-semibold p-4 my-4
`;

const Wrapper = tw.div`
    flex-1 px-2 h-1/2
`;
