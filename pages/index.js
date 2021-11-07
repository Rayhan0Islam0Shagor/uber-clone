import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import tw from 'tailwind-styled-components';
import Map from '../components/Map';
import ActionItems from '../components/ActionItems';
import { auth } from '../config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser({
            name: user.displayName,
            photoUrl: user.photoURL,
          });
        } else {
          setUser(null);
          router.push('/login');
        }
      }),
    [router]
  );

  return (
    <div>
      <Head>
        <title>Uber</title>
        <meta name="description" content="the clone site of uber" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Map />
        <ActionItems user={user} />
      </Wrapper>
    </div>
  );
}

const Wrapper = tw.section`
  flex flex-col h-screen container m-auto max-w-screen-md 
  bg-gray-50
`;
