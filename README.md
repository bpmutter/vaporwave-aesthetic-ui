# vaporwave-aesthetic-ui


[![NPM](https://img.shields.io/npm/v/vaporwave-aesthetic-ui.svg)](https://www.npmjs.com/package/vaporwave-aesthetic-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save vaporwave-aesthetic-ui
```

## Overview
Vaporwave Aesthetic UI is a React component library based on the vapor wave **a e s t h e t i c**. 

## Quick Start
To get started with Vaporwave Aesthetic UI, you need to wrap the application with the `AestheticProvider` component. This provides the theme (or aesthetic in vapor wave speak 🐬 🌴 ) to all child components. 

```jsx
import React, { Component } from 'react'

import { AestheticProvider } from 'vaporwave-aesthetic-ui'

class Example extends Component {
  render() {
    return(
      <AestheticProvider>
        <div>application here</div>
      </AestheticProvider>
    )
  }
}
```

If you are using React functional components, you can also access the theme from any point in the application with the `useAesthetic` hook. 


## Documentation & Demo
For a full overview of Vaporwave Aesthetic UI and a demo of the library in action, there'll soon be a documentation site. For now, just [check out the Github repo](https://github.com/bpmutter/vaporwave-aesthetic-ui). 

Quick links within the repo: 
* [components](https://github.com/bpmutter/vaporwave-aesthetic-ui/tree/master/src/components)
* [theme](ttps://github.com/bpmutter/vaporwave-aesthetic-ui/tree/master/src/style/https://github.com/bpmutter/vaporwave-aesthetic-ui/blob/master/src/style/theme.js)

## Styling and Extending the Library with Theme UI
Vaporwave Aesthetic UI is based on the [Theme UI](https://theme-ui.com/home/) React UI framework. The components listed below have been customized beyond the Theme UI theme object, but **all components from Theme UI** will work in this application. [A full list of Theme UI components may be found here](https://theme-ui.com/components). 

As Vaporwave Aesthetic UI is based on Theme UI, it uses Theme UI's `sx` property for styling. You can style any Vaporwave Aesthetic UI or Theme UI component using the sx property. [Read more about the sx prop here](https://theme-ui.com/sx-prop).



> Made with [create-react-library](https://www.npmjs.com/package/create-react-library)

## License

MIT © [bpmutter](https://github.com/bpmutter)
