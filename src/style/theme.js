const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Ubuntu Mono', monospace",
    monospace: 'Menlo, monospace'
  },
  fontSizes: [18, 20, 24, 32, 48, 64, 96],
  radii: ['.1em', '.25em', '.35em'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#2f2f2f',
    lightText: 'white',
    background: '#FED0EA',
    darkBackground: '#16000F',
    primary: '#BFB9FF',
    secondary: '#AFE9FE',
    muted: '#CBFFE6',
    highlight: '#F7F8B9',
    accent: '#F7F8B9',
    red: '#F70103'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      marginBottom: '.25em',
      textShadow: '2px 2px 2px #FED0EA'
    }
  },

  buttons: {
    primary: {
      fontFamily: 'heading',
      color: 'text',
      fontWeight: 'bold',
      bg: 'secondary',
      outlineColor: 'accent',
      '&:active': {
        outlineColor: 'accent'
      },
      '&:hover': {
        textShadow: `0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #afe9fe,
      0 0 350px #afe9fe, 0 0 40px #afe9fe, 0 0 50px #afe9fe, 0 0 75px #afe9fe`
      }
    },
    secondary: {
      color: 'text',
      bg: 'muted',
      fontWeight: 'bold',
      fontFamily: 'heading',
      outlineColor: 'accent',
      '&:hover': {
        textShadow: `0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #afe9fe,
      0 0 350px #afe9fe, 0 0 40px #afe9fe, 0 0 50px #afe9fe, 0 0 75px #afe9fe`
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
      backgroundColor: 'pink'
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    hr: {
      margin: '10px auto',
      width: '90%',
      border: 0,
      height: 2,
      backgroundColor: 'rgba(253, 208, 234, 0.85)',
      boxShadow: `0 0 5px #fff, 0 0 5px #fff, 0 0 7px #fff,
        0 0 10px rgba(253, 208, 234, 1), 0 0 17px rgba(253, 208, 234, 1),
        0 0 20px rgba(253, 208, 234, 1), 0 0 25px rgba(253, 208, 234, 1),
        0 0 37px rgba(253, 208, 234, 1)`
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
}

export default theme
