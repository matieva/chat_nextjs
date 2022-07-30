import React from 'react';

import Head from 'next/head';
import styled from 'styled-components';
import Sidebar from "../components/Sidebar.js";
import Link from 'next/link';
//import { Container } from '@mui/material';



export default function Home() {
  return (
    <div>
      <Head>
        <title>CHAT</title>

      </Head>

      <Sidebar />



      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
