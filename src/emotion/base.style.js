import { css } from '@emotion/core'
import mediaQuery from './utils.style'

const base = css`
  @font-face {
    font-family: 'beon';
    src: url('../assets/fonts/beon-webfont.eot');
    src: url('../assets/fonts/beon-webfont.woff') format('woff'),
      url('../assets/fonts/beon-webfont.ttf') format('truetype'),
      url('../assets/fonts/beon-webfont.svg#beon-webfont') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    color: $colour-copy;
    font-size: 100%;
    line-height: 100%;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div {
    margin: 0;
    padding: 0;
    font-weight: normal;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  h1 {
    font-size: 48px;
    text-transform: uppercase;
    line-height: 0.9em;
    font-weight: bold;
    color: #333333;

    ${mediaQuery.tablet} {
      font-size: 65px;
    }
  }

  h2 {
    font-size: 48px;
    margin: 10px 0;
    color: #333333;
    line-height: 0.9;
  }

  h3 {
    font-size: 24px;
    color: #333333;
    line-height: 0.9;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    padding: 20px 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-weight: 600;
  }

  small {
    font-size: 14px;
  }

  i {
    display: inline-block;
    background-repeat: no-repeat;
  }

  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }

  section {
    padding: 100px 0;
  }

  .flicker {
    @include animation(flicker 5s linear infinite alternate);
  }

  @include keyframes(flicker) {
    0% {
      opacity: 1;
    }

    49% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    51% {
      opacity: 0.7;
    }

    52% {
      opacity: 0;
    }

    53% {
      opacity: 0.7;
    }

    54% {
      opacity: 0;
    }

    55% {
      opacity: 0.7;
    }

    79% {
      opacity: 0.7;
    }

    79.5% {
      opacity: 0;
    }

    80% {
      opacity: 1;
    }

    80.5% {
      opacity: 0;
    }

    81% {
      opacity: 1;
    }
  }
`

export default base
