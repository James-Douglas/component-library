# Provider

## Installation

`yarn add @comparethemarketau/manor-provider`


## Documentation

The `ManorProvider` component must wrap your application for components to function correctly. It is responsible for
for injecting themes and managing Layer and Toast contexts.

You can pass it a theme via the `theme` prop to override styles. Additionally, you can disable the injection of global 
styles via th `disableGlobalStyles` prop.
