import * as React from 'react'
import Head from 'next/head'
import {NextPage} from 'next'
import Hero from '../components/Hero'
import './Global.scss'

const IndexPage: NextPage = () => {
  return (
    <div className='bp3-dark'>
      <Head>
        <title>The Case For Nuclear</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/normalize.css@^7.0.0" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@blueprintjs/core@^3.24.0/lib/css/blueprint.css" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@blueprintjs/icons@^3.14.0/lib/css/blueprint-icons.css" />
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 100;
            src: url('/fonts/Roboto/Roboto-Light.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 100;
            src: url('/fonts/Roboto/Roboto-LightItalic.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: url('/fonts/Roboto/Roboto-Regular.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            src: url('/fonts/Roboto/Roboto-Italic.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            src: url('/fonts/Roboto/Roboto-Medium.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 500;
            src: url('/fonts/Roboto/Roboto-MediumItalic.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            src: url('/fonts/Roboto/Roboto-Bold.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 700;
            src: url('/fonts/Roboto/Roboto-BoldItalic.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            src: url('/fonts/Roboto/Roboto-Black.ttf');
          }
          @font-face {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 900;
            src: url('/fonts/Roboto/Roboto-BlackItalic.ttf');
          }
        }`}}/>
      </Head>
      <Hero />
      <p>
        Work in progress...
      </p>
      <footer>
        <hr />
        <span>(Footer)</span>
      </footer>
    </div>
  )
}

export default IndexPage
