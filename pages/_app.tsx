import { AppProps } from "next/app";
import { CacheProvider, Global, css } from "@emotion/react";
import { cache } from "@emotion/css";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
        font-size: 62.5%;
        font-weight: 400;
      }
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      p {
        margin: 0;
      }
      a {
        text-decoration: none;
      }

      .ReactModal__Overlay {
        width: 100%;
        background-color: rgba(38, 43, 45, 0.5) !important;
      }

      .ReactModal__Content {
        width: 80%;
        margin: 0 auto;
        padding: 0 !important;
        border: none !important;
      }

      @media screen and (min-width: 64em) {
        .ReactModal__Content {
          width: 980px;
          height: 563px;
        }
      }

      .youtube_video {
        width: 100%;
        height: 100%;
      }
      .youtube_video_container {
        width: 100%;
        height: 100%;
      }
    `}
  />
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      {globalStyles}

      <Component {...pageProps} />
    </CacheProvider>
  );
}
