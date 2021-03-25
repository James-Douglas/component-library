# Manor component Library
Welcome to Manor, the implementation of the CTM Design System: [Bento](https://zeroheight.com/9942937b5/p/06eee5-ctm-design-system).

[Component documentation & live demonstration](https://services.dev.comparethemarket.cloud/manor/?path=/docs/welcome--page)

### Installation

#### Add ManorProvider

`yarn add @comparethemarketau/manor-provider`

ManorProvider provides a theme to all Manor components in your application's component tree. As such it needs to wrap your
application.

```
import { ManorProvider } from '@comparethemarketau/manor-provider';

const App = () => (
  <ManorProvider>
    ... your app here
  </ManorProvider>
);
```

#### Import components as required

```
import { Header } from '@comparethemarketau/manor-header';
import { Footer } from '@comparethemarketau/manor-footer';

render = () => (
  <>
    <Header />
    <Footer />
  </>
);
```

### Available Packages

#### UI Components

| Component(s) | Package | Notes |
| --- | --- | --- |
| Accordion, AccordionPanel | [Accordion](packages/Accordion/README.md) |  |
| Button | [Button](packages/Button/README.md) | |
| Card, CardGroup | [Card](packages/Card/README.md) | |
| Checkbox, CheckboxGroup | [Checkbox](packages/Checkbox/README.md) | |
| Combobox | [Combobox](packages/Combobox/README.md) | |
| SingleDatePicker, DateRangePicker | [DatePicker](packages/DatePicker/README.md) | |
| Disclaimer | [Disclaimer](packages/Disclaimer/README.md) | |
| Drawer | [Drawer](packages/Drawer/README.md) | |
| Dropdown, DropdownItem | [Dropdown](packages/Dropdown/README.md) | |
| EmptyState | [EmptyState](packages/EmptyState/README.md) | |
| FeatureList| [FeatureList](packages/FeatureList/README.md) | |
| FieldValidation | [FieldValidation](packages/FieldValidation/README.md) | Built in to all Manor form components - you probably don't need 
to import this yourself |
| Footer | [Footer](packages/Footer/README.md) | |
| Container, FluidContainer, Row, Column | [Grid](packages/Grid/README.md) | |
| Header, StickyHeader | [Header](packages/Header/README.md) | |
| Input, DateInput, CurrencyInput, ExpressiveInput | [Input](packages/Input/README.md) | |
| Label | [Label](packages/Label/README.md) | |
| Loading, Progress | [Loading](packages/Loading/README.md) | |
| Logo, CTMLogo | [Logo](packages/Logo/README.md) | |
| Modal | [Modal](packages/Modal/README.md) | |
| Notification, ToastNotification | [Notification](packages/Notification/README.md) | |
| Overlay | [Overlay](packages/Overlay/README.md) | |
| Picture | [Picture](packages/Picture/README.md) | |
| ProgressBar, StickyProgressBar, ProgressIcon, ProgressTracker, StickyProgressTracker, TrackerItem | [Progress](packages/Progress/README.md) | |
| ManorProvider | [Provider](packages/Provider/README.md) | This component should wrap your application, required by all Manor components. |
| Separator | [Separator](packages/Separator/README.md) | |
| SupportingElement | [SupportingElements](packages/SupportingElements/README.md) | Built in to all Manor form components - you probably don't need to import this yourself  |
| Table, TableBody, TableCell, TableFooter, TableHeader, TableRow | [Table](packages/Table/README.md) | |
| Tabs, TabButton, TabPanel | [Tabs](packages/Tabs/README.md) | |
| Textarea | [Textarea](packages/Textarea/README.md) | |
| BodyText, Microcopy, Overline, SROnly, Subscript, Subtitle | [Typography](packages/Typography/README.md) | |

#### Others

| Package | Description |
| --- | --- |
| [Hooks](packages/Hooks/README.md) | A variety of hooks used in Manor, published for convenience. |
| [Themes](packages/Themes/README.md) | Theme files |
| [Utils](packages/Utils/README.md) | Utilities used in Manor, published for convenience. |
| [Global](packages/Global/README.md) | Global styles component, ManorProvider injects this so you probably don't need to |  
import it yourself.

Additionally you can use various hooks by importing them the same way, where available (see the @comparethemarketau/manor-hooks package)

## Development

- `yarn storybook` - runs storybook for development
- `yarn test` - runs the tests
- `yarn tdd` - runs the tests with logs
- `yarn lint` - runs the linter
- `yarn build` - runs the build
- `yarn commit` - runs git-cz

## Merging your changes

To ensure that your feature triggers a release of the library, please format your merge commit with the following structure:

`feat(componentName): change summary/ticket number here`

You can then remove the description field, and merge your changes

Please check the [Contribution guidelines for this project](https://github.com/comparethemarketau/manor-react/blob/master/CONTRIBUTING.md) for more information

### Using your local Manor within another project

You might find yourself wanting to pull in your changes to a project using Manor without having to do release (e.g to 
validate that a fix works). This can be done via `yarn link` (or `npm link`):

1. Link `react`, `react-dom` and `styled-components` from the project using Manor, 
*(This is important because it prevents multiple copies of the above libraries being present at runtime, which causes 
things to break and can be confusing to debug)*:
    * `cd /path/to/your_project/node_modules/react && yarn link`
    * `cd /path/to/your_project/node_modules/react-dom && yarn link`
    * `cd /path/to/your_project/node_modules/styled-components && yarn link`
2. In Manor, use the linked libraries from step 1:
    * `cd /path/to/manor-react/packages/PackageToBuild`
    * `yarn link react && yarn link react-dom && yarn link styled-components`
3. Rebuild Manor Packages
    * run `yarn build` within the package you wish to test
4. Link the build package
   * Copy the packages package.json file into the lib folder (from within the `manor-react/packages/PackageToBuild` directory): `cp ./package.json ./lib/package.json`
   * `cd lib`
   * `yarn link`
5. Link the Manor package in your project
   * `cd /path/to/your_project`
   * `yarn link @comparethemarketau/manor-<YourPackageHere>`

### Setting up Private NPM Token
The variable bamboo_nexus_fe_token_password is used to authenticate with Nexus, this can be generated by performing the command `npm adduser --registry=https://nexus.comparethemarket.com.au/repository/platform-packages/` and following the prompts

Locally this can be exported as an env variable and specified in your shell: `export bamboo_nexus_fe_token_password=<YOUR_TOKEN>` where YOUR_TOKEN will look like: `1234567e-89aa-1a23-4567-ab12cd3e4fg5`
                            
### FontAwesome icons
We have access to pro icons within the font awesome library. For this, you'll need to add an env variable to your machine in the format of `NPM_FONTAWESOME_TOKEN=<YOUR_TOKEN>` where YOUR_TOKEN will look like `1234567e-89aa-1a23-4567-ab12cd3e4fg5`

UX holds the account information for [fontawesome](https://fontawesome.com), where you can log in and grab the key (Pro npm Package Token in account settings). When set up, import as usual e.g

```
  import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons';

```

Check the react package for more usage examples [here](https://github.com/FortAwesome/react-fontawesome)

## Whitelabeling
Whitelabeling can be achieved via theming and Manor has been developed with this capability. 

### Using a theme

The easiest way to theme is to import the base (CTM) theme, override variables as desired, then pass the modified theme to `ManorProvider`:

```
//app.js
import { ctmTheme as myTheme } from '@comparethemarketau/manor-themes';

myTheme.colors.primary50 = '#3deb34';
myTheme.accordion.background = 'red';
myTheme.borders.component = '2px solid yellow';

<ManorProvider theme={myTheme}>
    <App />
</ManorProvider>
```

### Personally Identifiable Information (PII) & Personal Credit Information (PCI) Compliance
A number of Manor components have a prop, `gtmPidAnonymous`, that can be used to indicate the field is used to collect personally identifiable information. When using such components, be sure to set this to `true` so that a css class is added to the component that informs tracking software that it should obfuscate its contents.
When adding new components to Manor, be sure to consider if it could potentially be used to capture PII/PCI and if so, include this functionality in it's implementation.
