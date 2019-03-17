import { keyframes } from '@emotion/core'

const mediaQuery = {
  mobile: `@media (max-width: 480px)`,
  tablet: `@media (max-width: 680px)`,
  desktop: `@media (max-width: 960px)`,
  extended: `@media (max-width: 1440px)`,
}

const fontbeon = `"beon", "Arial", "Helvetica", sans-serif`

const flicker = keyframes`
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
`

export { mediaQuery, fontbeon, flicker }
