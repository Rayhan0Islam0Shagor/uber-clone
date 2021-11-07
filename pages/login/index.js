import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import GoogleButton from 'react-google-button';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../../config/firebaseConfig';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
  }, [router]);

  return (
    <Wrapper>
      <Upper>
        <LogoImage src="/assets/Uber_logo_2018.svg" />
        <Title>Login to access your account and enjoy your trip</Title>
        <PassengerLogo src="/assets/login-image.png" />
      </Upper>
      <ButtonContainer>
        <GoogleButton
          type="dark"
          onClick={() => signInWithPopup(auth, provider)}
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default Login;

const Upper = tw.section``;

const Title = tw.h1`
    text-4xl
    text-left
    text-gray-500
    font-bold pt-3
`;

const LogoImage = tw.img`
    h-8 mt-8 object-contain
`;

const PassengerLogo = tw.img`
    h-56 m-auto object-contain
`;

const ButtonContainer = tw.div`
    flex items-center pt-10 justify-center
`;

const Wrapper = tw.section`
  flex h-screen flex-col container m-auto max-w-screen-md 
  bg-gray-50 px-4
`;
