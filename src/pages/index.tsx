import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../Components/Hero";
import { Flex } from "@chakra-ui/react";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>FragStack Hybrid</title>
        <meta name="FRAG Hybrid" content="FragStack Simple Dapp" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Flex
        direction="column"
        align="center"
        bgImage='url("https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg")'
        bgRepeat="no-repeat"
        bgAttachment="fixed"
      >
        <Hero />
      </Flex>
    </>
  );
};

export default Home;
