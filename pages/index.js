import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import tw from 'tailwind-styled-components';
import Map from '../components/Map';
import ActionItems from '../components/ActionItems';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uber</title>
        <meta name="description" content="the clone site of uber" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Map />
        <ActionItems />
      </Wrapper>
    </div>
  );
}

const Wrapper = tw.section`
  flex flex-col h-screen container m-auto max-w-screen-md 
  bg-gray-50
`;
