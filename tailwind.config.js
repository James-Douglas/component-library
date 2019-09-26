/*

   Tailwind - The Utility-First CSS Framework

   A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
   David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

   Welcome to the Tailwind config file. This is where you can customize
   Tailwind specifically for your project. Don't be intimidated by the
   length of this file. It's really just a big JavaScript object and
   we've done our very best to explain each section.

   View the full documentation at https://tailwindcss.com.


   |-------------------------------------------------------------------------------
   | The default config
   |-------------------------------------------------------------------------------
   |
   | This variable contains the default Tailwind config. You don't have
   | to use it, but it can sometimes be helpful to have available. For
   | example, you may choose to merge your custom configuration
   | values with some of the Tailwind defaults.
   |
 */

let defaultConfig = require('tailwindcss/defaultConfig')

let screens = require('./config/screens').default;

module.exports = {

    prefix: '',
    important: false,
    separator: ':',
    theme: {

        /*
           |-----------------------------------------------------------------------------
           | Screens                      https://tailwindcss.com/docs/responsive-design
           |-----------------------------------------------------------------------------
           |
           | Screens in Tailwind are translated to CSS media queries. They define the
           | responsive breakpoints for your project. By default Tailwind takes a
           | "mobile first" approach, where each screen size represents a minimum
           | viewport width. Feel free to have as few or as many screens as you
           | want, naming them in whatever way you'd prefer for your project.
           |
           | Tailwind also allows for more complex screen definitions, which can be
           | useful in certain situations. Be sure to see the full responsive
           | documentation for a complete list of options.
           |
           | Class name: .{screen}:{utility}
           |
         */

        screens: screens,


        /*
           |-----------------------------------------------------------------------------
           | Colors                                  https://tailwindcss.com/docs/colors
           |-----------------------------------------------------------------------------
           |
           | The color palette defined above is also assigned to the "colors" key of
           | your Tailwind config. This makes it easy to access them in your CSS
           | using Tailwind's config helper. For example:
           |
           | .error { color: theme('colors.red')}
           |
         */

        colors: {
            transparent: 'transparent',

            white: '#fff',
            'off-white': '#F4F9FE',
            'grey-darkest': '#333333',
            'grey-darker': '#666666',
            'grey-dark': '#999999',
            'grey': '#aaaaaa',
            'grey-light': '#dddddd',
            'grey-lighter': '#F8F8F8',
            'grey-lightest': '#fcfcfc',    /* Not currently used */

            'blue': '#1C3E94',             /* Not currently used */
            'dark-blue': '#001443',
            'blue-aa': '#001442',
            'blue-aa-hover': '#136ED2',
            'blue-aa-dark-hover': '#7A98FF',

            'green': '#0DB14B',
            'green-aa': '#36A93F',
            'green-hover-aa': '#319639',

            'aqua': '#008284',
            'yellow': '#F49E1E',             /* Not currently used */
            'orange': '#EF5123',             /* Not currently used */
            'pink': '#EF425E',               /* Not currently used */

            'primary': '#1c3e94',
            'secondary': '#0db14b',
            'success': '#008284',            /* Not currently used */
            'info': '#B5D7FF',               /* Not currently used */
            'warning': '#F49E1E',

            'invalid': '#EF425E',
            'disabled': '#CCCCCC',
            'link': '#164AD9',
            'disabled-text': '#B6B2AF',
            'placeholder-text': '#787673',

            /* primary colour pallet */
            'midnight-blue': '#001545',                                          /* active */
            'light-blue': '#1780F3',                                             /* Hover and focus */
            'green-button': '#0EC228',                                           /* button colour */
            black: '#000',                                                       /* label or links */

            /* background colour pallet */
            'input-border': '#E0DBD9',                                           /* Toggle border on white */
            'grey-lighter': '#f3f3f3',                                           /* journey background */

            /* prepopulated fields pallet */
            'prechecked': '#F0E599',                                             /* info / background */
            'prechecked-icon': '#DEBA00',                                        /* info/icon */
            'prechecked-darker': '#C39600',                                      /* info / border */
            'combo-link': '#ECF0F8',                                              /* link in a combo field*/
            /* error validation colour pallet */
            'validation-text': '#EE415D',                                        /* validation / text*/
            'validation-background': '#FDE8EB',                                  /* validation /  background */
        },


        spacing: {
            px: '0.1rem',          //   1px
            '0': '0',
            '4': '0.4rem',
            '8': '0.8rem',
            '12': '1.2rem',
            '16': '1.6rem',        // 16px (just move the decimal place to the right one place)
            '20': '2rem',
            '24': '2.4rem',
            '32': '3.2rem',
            '36': '3.6rem',
            '40': '4rem',
            '42': '4.2rem',
            '48': '4.8rem',
            '52': '5.2rem',
            '54': '5.4rem',
            '64': '6.4rem',
            '68': '6.8rem',
            '74': '7.4rem',
            '80': '8rem',
            '84': '8.4rem',
            '96': '9.6rem',
            '128': '12.8rem',
            '160': '16rem',
            '192': '19.2rem',
            '224': '22.4rem',
            '256': '25.6rem',
        },


        /*
           |-----------------------------------------------------------------------------
           | Background colors             https://tailwindcss.com/docs/background-color
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your background colors. By default these use
           | the color palette we defined above, however you're welcome to set
           | these independently if that makes sense for your project.
           |
           | Class name: .bg-{color}
           | CSS property: background-color
           |
         */

        backgroundColor: theme => theme('colors'),


        /*
           |-----------------------------------------------------------------------------
           | Background sizes               https://tailwindcss.com/docs/background-size
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your background sizes. We provide some common
           | values that are useful in most projects, but feel free to add other sizes
           | that are specific to your project here as well.
           |
           | Class name: .bg-{size}
           | CSS property: background-size
           |
         */

        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },


        /*
           |-----------------------------------------------------------------------------
           | Border colors                     https://tailwindcss.com/docs/border-color
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your border colors. By default these use the
           | color palette we defined above, however you're welcome to set these
           | independently if that makes sense for your project.
           |
           | Take note that border colors require a special "default" value set
           | as well. This is the color that will be used when you do not
           | specify a border color.
           |
           | Class name: .border-{color}
           | CSS property: border-color
           |
         */

        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.grey-light'),
        }),


        /*
           |-----------------------------------------------------------------------------
           | Border radius                    https://tailwindcss.com/docs/border-radius
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your border radius values. If a `default` radius
           | is provided, it will be made available as the non-suffixed `.rounded`
           | utility.
           |
           | If your scale includes a `0` value to reset already rounded corners, it's
           | a good idea to put it first so other values are able to override it.
           |
           | Class name: .rounded{-side?}{-size?}
           | CSS property: border-radius
           |
         */

        borderRadius: {
            none: '0',
            sm: '0.2rem',          //    2x
            default: '0.4rem',     //    4px
            lg: '0.8rem',          //    8px
            full: '999.9rem',      // 9999px
        },


        /*
           |-----------------------------------------------------------------------------
           | Border widths                     https://tailwindcss.com/docs/border-width
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your border widths. Take note that border
           | widths require a special "default" value set as well. This is the
           | width that will be used when you do not specify a border width.
           |
           | Class name: .border{-side?}{-width?}
           | CSS property: border-width
           |
         */

        borderWidth: {
            default: '0.1rem',   // 1px
            '0': '0',            // 0px
            '2': '0.2rem',       // 2px
            '4': '0.4rem',       // 4px
            '8': '0.8rem',       // 8px
        },


        /*
           |-----------------------------------------------------------------------------
           | Box shadow                          https://tailwindcss.com/docs/box-shadow/
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your shadow utilities. As you can see from
           | the defaults we provide, it's possible to apply multiple shadows
           | per utility using comma separation.
           |
           | If a `default` shadow is provided, it will be made available as the non-
           | suffixed `.shadow` utility.
           |
           | Class name: .shadow-{size?}
           | CSS property: box-shadow
           |
         */

        boxShadow: {
            default: 'rgba(0, 0, 0, 0.1) 0 1rem 4rem 0',
            sm: '0 0.5rem 0.5rem 0 rgba(0,0,0,.1)',
            md: '0 0.4rem 0.8rem 0 rgba(0,0,0,0.12), 0 0.2rem 0.4rem 0 rgba(0,0,0,0.08)',
            lg: '0 1.5rem 3rem 0 rgba(0,0,0,0.11), 0 0.5rem 1.5rem 0 rgba(0,0,0,0.08)',
            inner: 'inset 0 0.2rem 0.4rem 0 rgba(0,0,0,0.06)',
            outline: '0 0 0 0.3rem rgba(52,144,220,0.5)',
            none: 'none',
            progress: '0 0.2rem 0.4rem 0 #DDDBDB'
        },


        /*
           |-----------------------------------------------------------------------------
           | SVG fill                                  https://tailwindcss.com/docs/fill/
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your SVG fill colors. By default we just provide
           | `fill-current` which sets the fill to the current text color. This lets you
           | specify a fill color using existing text color utilities and helps keep the
           | generated CSS file size down.
           |
           | Class name: .fill-{name}
           | CSS property: fill
           |
         */

        fill: {
            current: 'currentColor',
        },


        /*
           |-----------------------------------------------------------------------------
           | fontFamily                         https://tailwindcss.com/docs/font-family/
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your project's font stack, or font families.
           | Keep in mind that Tailwind doesn't actually load any fonts for you.
           | If you're using custom fonts you'll need to import them prior to
           | defining them here.
           |
           | By default we provide a native font stack that works remarkably well on
           | any device or OS you're using, since it just uses the default fonts
           | provided by the platform.
           |
           | Class name: .font-{name}
           | CSS property: font-family
           |
         */

        fontFamily: {
            body: [
                'SourceSansPro',
                'Arial',
                'sans-serif',
            ],
            titles: [
                'TheSansB',
                'Helvetica',
                'Arial',
                'sans-serif',
            ],
            'sans': [                       /* strip the following font family stuff? */
                'system-ui',
                'BlinkMacSystemFont',
                '-apple-system',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            'serif': [
                'Constantia',
                'Lucida Bright',
                'Lucidabright',
                'Lucida Serif',
                'Lucida',
                'DejaVu Serif',
                'Bitstream Vera Serif',
                'Liberation Serif',
                'Georgia',
                'serif',
            ],
            'mono': [
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ],
        },


        /*
           |-----------------------------------------------------------------------------
           | font size                            https://tailwindcss.com/docs/font-size/
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your text sizes. Name these in whatever way
           | makes the most sense to you. We use size names by default, but
           | you're welcome to use a numeric scale or even something else
           | entirely.
           |
           | By default Tailwind uses the "rem" unit type for most measurements.
           | This allows you to set a root font size which all other sizes are
           | then based on. That said, you are free to use whatever units you
           | prefer, be it rems, ems, pixels or other.
           |
           | Class name: .text-{size}
           | CSS property: font-size
           |
         */

        fontSize: {
            '2xs': '1rem',        // 10px
            xs: '1.2rem',         // 12px
            sm: '1.4rem',         // 14px
            base: '1.6rem',       // 16px
            lg: '1.8rem',         // 18px
            xl: '2rem',           // 20px
            '2xl': '2.4rem',      // 24px
            '3xl': '3rem',        // 30px         /* 3xl currently unused  */
            '4xl': '3.4rem',      // 34px
            '5xl': '4.2rem',      // 42px
            '6xl': '6rem',        // 60px
        },


        /*
           |-----------------------------------------------------------------------------
           | Font weight                       https://tailwindcss.com/docs/font-weight
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your font weights. We've provided a list of
           | common font weight names with their respective numeric scale values
           | to get you started. It's unlikely that your project will require
           | all of these, so we recommend removing those you don't need.
           |
           | Class name: .font-{weight}
           | CSS property: font-weight
           |
         */

        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },


        /*
           |-----------------------------------------------------------------------------
           | Height                                  https://tailwindcss.com/docs/height
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your height utility sizes. These can be
           | percentage based, pixels, rems, or any other units. By default
           | we provide a sensible rem based numeric scale plus some other
           | common use-cases. You can, of course, modify these values as
           | needed.
           |
           | Class name: .h-{size}
           | CSS property: height
           |
         */

        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),


        /*
           |-----------------------------------------------------------------------------
           | letter spacing                   https://tailwindcss.com/docs/letter-spacing
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your letter spacing values.
           |
           | Class name: .tracking-{size}
           | CSS property: letter-spacing
           |
         */

        letterSpacing: {
            tight: '-0.08rem',
            normal: '0',
            wide: '0.08rem',      // 0.8px
            widest: '0.15rem',    // 1.5px
        },


        /*
           |-----------------------------------------------------------------------------
           | line height                         https://tailwindcss.com/docs/line-height
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your line height values.
           |
           | Class name: .leading-{size}
           | CSS property: line-height
           |
         */

        lineHeight: {
            none: '1',
            tighter: '1.2',
            tight: '1.25',
            snug: '1.4',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },


        /*
           |-----------------------------------------------------------------------------
           | Margin                                  https://tailwindcss.com/docs/margin
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your margin utility sizes. These can be
           | percentage based, pixels, rems, or any other units. By default we
           | provide a sensible rem based numeric scale plus a couple other
           | common use-cases like "1px". You can, of course, modify these
           | values as needed.
           |
           | Class name: .m{side?}-{size}
           | CSS property: margin
           |
         */
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),


        /*
            |-----------------------------------------------------------------------------
            | Maximum height                      https://tailwindcss.com/docs/max-height
            |-----------------------------------------------------------------------------
            |
            | Here is where you define your maximum height utility sizes. These can
            | be percentage based, pixels, rems, or any other units. We provide a
            | couple common use-cases by default. You can, of course, modify
            | these values as needed.
            |
            | Class name: .max-h-{size}
            | CSS property: max-height
            |
          */

        maxHeight: {
            full: '100%',
            screen: '100vh',
        },

        /*
           |-----------------------------------------------------------------------------
           | Maximum width                        https://tailwindcss.com/docs/max-width
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your maximum width utility sizes. These can
           | be percentage based, pixels, rems, or any other units. By default
           | we provide a sensible rem based scale and a "full width" size,
           | which is basically a reset utility. You can, of course,
           | modify these values as needed.
           |
           | Class name: .max-w-{size}
           | CSS property: max-width
           |
         */

        maxWidth: {
            xs: '32rem',        //  320px
            sm: '48rem',        //  480px
            md: '64rem',        //  640px
            lg: '80rem',        //  800px
            xl: '96rem',        //  960px
            '2xl': '112rem',    // 1120px
            '3xl': '128rem',    // 1280px
            '4xl': '144rem',    // 1440px
            '5xl': '160rem',    // 1600px
            '6xl': '190rem',    // 1900px
            full: '100%',
        },


        /*
           |-----------------------------------------------------------------------------
           | Minimum height                      https://tailwindcss.com/docs/min-height
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your minimum height utility sizes. These can
           | be percentage based, pixels, rems, or any other units. We provide a
           | few common use-cases by default. You can, of course, modify these
           | values as needed.
           |
           | Class name: .min-h-{size}
           | CSS property: min-height
           |
         */

        minHeight: {
            '0': '0',
            full: '100%',
            screen: '100vh',
        },


        /*
           |-----------------------------------------------------------------------------
           | Minimum width                        https://tailwindcss.com/docs/min-width
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your minimum width utility sizes. These can
           | be percentage based, pixels, rems, or any other units. We provide a
           | couple common use-cases by default. You can, of course, modify
           | these values as needed.
           |
           | Class name: .min-w-{size}
           | CSS property: min-width
           |
         */

        minWidth: {
            '0': '0',
            full: '100%',
        },


        /*
           |-----------------------------------------------------------------------------
           | Opacity                                https://tailwindcss.com/docs/opacity
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your opacity utility values. By default we
           | provide a sensible numeric scale. You can, of course, modify these
           | values as needed.
           |
           | Class name: .opacity-{name}
           | CSS property: opacity
           |
         */

        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1',
        },

        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
        },


        /*
           |-----------------------------------------------------------------------------
           | Padding                                https://tailwindcss.com/docs/padding
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your padding utility sizes. These can be
           | percentage based, pixels, rems, or any other units. By default we
           | provide a sensible rem based numeric scale plus a couple other
           | common use-cases like "1px". You can, of course, modify these
           | values as needed.
           |
           | Class name: .p{side?}-{size}
           | CSS property: padding
           |
         */

        padding: theme => theme('spacing'),


        /*
           |-----------------------------------------------------------------------------
           | SVG stroke                               https://tailwindcss.com/docs/stroke
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your SVG stroke colors. By default we just provide
           | `stroke-current` which sets the stroke to the current text color. This lets
           | you specify a stroke color using existing text color utilities and helps
           | keep the generated CSS file size down.
           |
           | Class name: .stroke-{name}
           | CSS property: stroke
           |
         */

        stroke: {
            current: 'currentColor',
        },


        /*
           |-----------------------------------------------------------------------------
           | Text colors                         https://tailwindcss.com/docs/text-color
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your text colors. By default these use the
           | color palette we defined above, however you're welcome to set these
           | independently if that makes sense for your project.
           |
           | Class name: .text-{color}
           | CSS property: color
           |
         */

        textColor: theme => theme('colors'),

        /*
           |-----------------------------------------------------------------------------
           | Text Indent
           |-----------------------------------------------------------------------------
           |
           | This was added as part of the typography plugin installation
           |
         */
        textIndent: { // defaults to {}
            '1': '0.25rem',
            '2': '0.5rem',
        },

        /*
           |-----------------------------------------------------------------------------
           | Text Shadow
           |-----------------------------------------------------------------------------
           |
           | This was added as part of the typography plugin installation
           |
         */
        textShadow: { // defaults to {}
            'default': '0 0.2rem 0.5rem rgba(0, 0, 0, 0.5)',
            'lg': '0 0.2rem 1rem rgba(0, 0, 0, 0.5)',
        },

        /*
           |-----------------------------------------------------------------------------
           | Text Styles - Typography styles that respond to screen size
           |-----------------------------------------------------------------------------
           |
           | There are two ways to use styles from textStyles below:
           | 1. Use the 'manor-' prefix followed by the style you wish to use eg.. class="manor-h1"
           | 2. If the style is applied to a relevant element apply the class .manor-rich-text to an ancestor element
           |    that wraps around the elements that you wish to style - to see which elements are supported see the
           |    richText section below.
           |
         */
        textStyles: theme => ({ // defaults to {}


            /*
               |-----------------------------------------------------------------------------
               | body
               |-----------------------------------------------------------------------------
               |
               | Used for button text
               |
               | Class name: .manor-body1
               |   Use case: Tooltips, input fields, drop downs, combo fields, Text fields
               |
               | Class name: .manor-body3
               |   Use case: Secondary text (extra information) e.g. tooltips
               |
             */
            body: {
                output: false, // this means there won't be a "subtitle" component in the CSS, but it can be extended
                fontWeight: theme('fontWeight.normal'),
                lineHeight: theme('lineHeight.snug'),
                fontFamily: theme('fontFamily.body'),
            },
            // Use case: Tooltips, input fields, drop downs, combo fields, Text fields
            body1: {
                extends: 'body', // this means all the styles in "body" will be copied here; "extends" can also be an array to extend multiple text styles
                fontSize: theme('fontSize.base'),
            },
            // Use case: Secondary text (extra information) e.g. tooltips
            body2: {
                extends: 'body',
                fontSize: theme('fontSize.sm'),
            },

            /*
               |-----------------------------------------------------------------------------
               | Buttons
               |-----------------------------------------------------------------------------
               |
               | Used for button text
               |
               | Class name: .manor-button1
               |   Use case: CTA (red routes)
               |
               | Class name: .manor-button2
               |   Use case: other Buttons
               |
             */
            button: {
                output: false, // this means there won't be a "button" component in the CSS, but it can be extended
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.snug'),
                fontFamily: theme('fontFamily.body'),
            },
            // Use case: CTA (red routes)
            button1: {
                extends: 'button', // this means all the styles in "subtitle" will be copied here; "extends" can also be an array to extend multiple text styles
                fontSize: theme('fontSize.base'),
            },
            //Use case: other Buttons
            button2: {
                extends: 'button',
                fontSize: theme('fontSize.sm'),
            },


            /*
               |-----------------------------------------------------------------------------
               | Headings
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-h1
               |   Use case: Homepage
               |
               | Class name: .manor-h2
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-h3
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-h4
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-h5
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-h6
               |   Use case: Homepage, Landing pages, Journey Headings
               |
             */
            heading: {
                output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
                fontWeight: theme('fontWeight.normal'),
                lineHeight: theme('lineHeight.tighter'),
                fontFamily: theme('fontFamily.body'),
            },
            // Use case: Homepage
            h1: {
                extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
                fontSize: theme('fontSize.4xl'),
                '@screen sm': {
                    fontSize: theme('fontSize.5xl'),
                },
                '@screen md': {
                    fontSize: theme('fontSize.6xl'),
                },

            },

            // Use case: Homepage, Landing pages, Journey Headings
            h2: {
                extends: 'heading',
                fontSize: theme('fontSize.4xl'),
                '@screen md': {
                    fontSize: theme('fontSize.5xl'),
                },
            },
            h3: {
                extends: 'heading',
                fontSize: theme('fontSize.2xl'),
                '@screen md': {
                    fontSize: theme('fontSize.4xl'),
                },
            },
            h4: {
                extends: 'heading',
                fontSize: theme('fontSize.lg'),
                lineHeight: theme('lineHeight.snug'),
                '@screen sm': {
                    fontSize: theme('fontSize.xl'),
                    lineHeight: theme('lineHeight.tighter'),
                },
                '@screen md': {
                    fontSize: theme('fontSize.2xl'),
                },
            },
            h5: {
                extends: 'heading',
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.snug'),
                '@screen sm': {
                    fontSize: theme('fontSize.lg'),
                },
                '@screen md': {
                    lineHeight: theme('lineHeight.tighter'),
                    fontSize: theme('fontSize.xl'),
                },
            },
            h6: {
                extends: 'heading',
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.snug'),
                fontWeight: theme('fontWeight.bold'),
                '@screen md': {
                    lineHeight: theme('lineHeight.tighter'),
                    fontSize: theme('fontSize.lg'),
                },
            },

            /*
               |-----------------------------------------------------------------------------
               | Link (anchor)
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-link
               |   Use case: Anchor tags
               |
             */
            link: {
                fontWeight: theme('fontWeight.bold'),
                fontSize: theme('fontSize.base'),
                textDecoration: 'underline',
                '&:focus': {
                    color: theme('colors.blue-aa-hover'),
                },
                '&:hover': {
                    color: theme('colors.blue-aa-hover'),
                },
                '&:active': {
                    color: 'inherit',
                },
                '&:visited': {
                    color: 'inherit',
                },
            },


            /*
               |-----------------------------------------------------------------------------
               | Lists
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-ul
               |   Use case: Unordered list - uses round bullets
               |
               | Class name: .manor-ol
               |   Use case: Ordered list
               |
               | Class name: .manor-li
               |   Use case: List items - adds margin after each item
               |
             */
            list: {
                output: false, // this means there won't be a "list" component in the CSS, but it can be extended
                padding: theme('padding.16'),
                fontWeight: theme('fontWeight.normal'),
                lineHeight: theme('lineHeight.tighter'),
                fontFamily: theme('fontFamily.body'),
                fontSize: theme('fontSize.sm'),
            },
            ul: {
                extends: 'list', // this means all the styles in "list" will be copied here; "extends" can also be an array to extend multiple text styles
                listStyleType: theme('listStyleType.disc'),
            },
            ol: {
                extends: 'list',
                listStyleType: theme('listStyleType.decimal'),
            },

            li: {
                marginBottom: theme('spacing.12'),
            },

            liLastChild: {
                marginBottom: theme('spacing.0'),
            },

            nestedList: {
                paddingBottom: theme('spacing.0'),
            },


            /*
               |-----------------------------------------------------------------------------
               | Microcopy
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-microcopy
               |   Use case: Captions, terms and conditions
               |
             */
            microcopy: {
                fontFamily: theme('fontFamily.body'),
                fontWeight: theme('fontWeight.normal'),
                fontSize: theme('fontSize.xs'),
                lineHeight: theme('lineHeight.snug'),
            },


            /*
               |-----------------------------------------------------------------------------
               | Overline / Subscript
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-overline
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-subscript
               |   Use case:  e.g. field requirement 'Optional'  - NOTE: this is described as underline
               |              in the typography confluence page but that name conflicts too much
               |
             */
            overlineSubscript: {
                output: false, // this means there won't be a "overlineSubscript" component in the CSS, but it can be extended
                lineHeight: theme('lineHeight.snug'),
                fontFamily: theme('fontFamily.body'),
                fontSize: theme('fontSize.2xs'),
                letterSpacing: theme('letterSpacing.widest'),
                fontWeight: theme('fontWeight.normal'),
                textTransform: 'uppercase',
            },
            // Use case: some additional text supplied above a field (not the label)
            overline: {
                extends: 'overlineSubscript', // this means all the styles in "overlineSubscript" will be copied here; "extends" can also be an array to extend multiple text styles
                color: theme('colors.placeholder-text'),
                fontWeight: theme('fontWeight.semibold'),
            },
            subscript: {
                extends: 'overlineSubscript',
                color: theme('colors.grey-darkest'),
            },

            /*
               |-----------------------------------------------------------------------------
               | placeholder
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-placeholder
               |   Use case: placeholder information form-fields
               |
             */
            // Use case: placeholder information form-fields
            placeholder: {
                fontFamily: theme('fontFamily.body'),
                fontWeight: theme('fontWeight.normal'),
                fontStyle: 'italic',
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.snug'),
            },


            /*
               |-----------------------------------------------------------------------------
               | Spacing
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-header-spacing
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-heading-spacing
               |   Use case:
               |
               | Class name: .manor-label-spacing
               |   Use case:
               |
               | Class name: .manor-toggle-to-toggle
               |   Use case:
               |
               | Class name: .manor-p-to-p
               |   Use case: paragraph spacing   TODO!! - also see related spacing within richText
               |
             */
            /* todo - screen widths to be confirmed (they don't match what is specified elsewhere) */
            headerSpacing: {
                paddingTop: theme('spacing.32'),            //  32px
                '@screen md': {
                    paddingTop: theme('spacing.36'),        //  36px
                },
                '@screen lg': {
                    paddingTop: theme('spacing.48'),        //  48px
                },
                '@screen xl': {
                    paddingTop: theme('spacing.52'),        //  52px
                },
            },

            /* todo - ensure that style is configured for other breakpoints if required */
            headingSpacing: {
                marginBottom: theme('spacing.24'),
            },


            /* todo - ensure that style is configured for other breakpoints if required */
            labelSpacing: {
                marginBottom: theme('spacing.8'),           //  8px
            },

            toggleToToggle: {
                marginBottom: theme('spacing.16'),          //  16px
            },


            /* todo these names will be changed - still working through spacing with nina */
            spacing24: {
                marginBottom: theme('spacing.24'),          //  24px
            },
            spacing36: {
                marginBottom: theme('spacing.36'),          //  36px
            },
            spacing48: {
                marginBottom: theme('spacing.48'),          //  48px
            },



            /*
               |-----------------------------------------------------------------------------
               | Subtitle
               |-----------------------------------------------------------------------------
               |
               | Class name: .manor-subtitle1
               |   Use case: Homepage, Landing pages, Journey Headings
               |
               | Class name: .manor-subtitle2
               |   Use case: Homepage, Landing pages, Journey Headings
               |
             */
            subtitle: {
                output: false, // this means there won't be a "subtitle" component in the CSS, but it can be extended
                fontWeight: theme('fontWeight.normal'),
                lineHeight: theme('lineHeight.snug'),
                fontFamily: theme('fontFamily.body'),
                fontSize: theme('fontSize.base'),
            },
            // Use case: Homepage, Landing pages, Journey Headings
            subtitle1: {
                extends: 'subtitle', // this means all the styles in "subtitle" will be copied here; "extends" can also be an array to extend multiple text styles
                '@screen md': {
                    fontSize: theme('fontSize.lg'),
                },
            },
            subtitle2: {
                extends: 'subtitle',
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.sm')
            },


            /*
               |-----------------------------------------------------------------------------
               | Rich Text
               |-----------------------------------------------------------------------------
               |
               | Apply the class .manor-rich-text to an ancestor element that wraps around the
               | elements that you wish to style - to see which elements are supported see the
               | section below.
               |
               | Class name: .manor-rich-text
               |
             */
            richText: {
                fontWeight: theme('fontWeight.normal'),
                fontSize: theme('fontSize.base'),
                lineHeight: theme('lineHeight.relaxed'),       /*  TODO  - verify with nina */
                '> * + *': {
                    marginTop: '1.6rem',                          /*  TODO  - verify with nina - part of the spacing ticket  */
                },
                'h1': {
                    extends: 'h1',
                },
                'h2': {
                    extends: 'h2',
                },
                'h3': {
                    extends: 'h3',
                },
                'h4': {
                    extends: 'h4',
                },
                'h5': {
                    extends: 'h5',
                },
                'h6': {
                    extends: 'h6',
                },
                'ul': {
                    extends: 'ul',
                },
                'ol': {
                    extends: 'ol',
                },

                'ol > li, ul > li': {
                    extends: 'li',
                },

                'ol > li:last-child, ul > li:last-child, li > ul, li > ol': {
                    extends: 'liLastChild',
                },
                'li > ul, li > ol': {
                    extends: 'nestedList',
                },

                'a': {
                    extends: 'link',
                },
                'b, strong': {
                    fontWeight: theme('fontWeight.bold'),
                },
                'i, em': {
                    fontStyle: 'italic',
                },
                'p': {
                    fontSize: theme('fontSize.base'),
                },
            },
            /*
               |-----------------------------------------------------------------------------
               | Tooltip Content
               |-----------------------------------------------------------------------------
               |
               | Applied to the content of the manor Tooltip component, this allows use of
               | classes from the supported section below within the body of a tooltip.
               |
               | Class name: .manor-tooltip-content
               |
             */
            tooltipContent: {
                extends: 'richText',
                fontSize: theme('fontSize.sm'),
                lineHeight: theme('lineHeight.snug'),
                '> * + *': {
                    marginTop: '1.2rem',
                },
                'p': {
                    fontSize: theme('fontSize.sm'),
                    marginBottom: '8px',
                },
                'b, strong': {
                    fontWeight: theme('fontWeight.semibold')
                }
            },
        }),

        /*
           |-----------------------------------------------------------------------------
           | Width                                    https://tailwindcss.com/docs/width
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your width utility sizes. These can be
           | percentage based, pixels, rems, or any other units. By default
           | we provide a sensible rem based numeric scale, a percentage
           | based fraction scale, plus some other common use-cases. You
           | can, of course, modify these values as needed.
           |
           |
           | It's also worth mentioning that Tailwind automatically escapes
           | invalid CSS class name characters, which allows you to have
           | awesome classes like .w-2/3.
           |
           | Class name: .w-{size}
           | CSS property: width
           |
         */

        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',               // It's called half brainiac
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',        // It's called a third brainiac
            '3/6': '50%',               // It's called half brainiac
            '4/6': '66.666667%',        // It's called two thirds brainiac
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',       // It's called a sixth brainiac
            '3/12': '25%',              // It's called a quarter brainiac
            '4/12': '33.333333%',       // It's called a third brainiac
            '5/12': '41.666667%',
            '6/12': '50%',              // It's called half brainiac
            '7/12': '58.333333%',
            '8/12': '66.666667%',       // It's called two thirds brainiac
            '9/12': '75%',              // It's called three quarters brainiac
            '10/12': '83.333333%',      // It's called five sixths brainiac
            '11/12': '91.666667%',
            '1/8': '12.5%',
            '1/9': '11.11111%',
            full: '100%',
            screen: '100vw',
        }),


        /*
           |-----------------------------------------------------------------------------
           | Z-index                                https://tailwindcss.com/docs/z-index
           |-----------------------------------------------------------------------------
           |
           | Here is where you define your z-index utility values. By default we
           | provide a sensible numeric scale. You can, of course, modify these
           | values as needed.
           |
           | Class name: .z-{index}
           | CSS property: z-index
           |
         */

        zIndex: {
            auto: 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },

    },


  /*
     |-----------------------------------------------------------------------------
     | variants                  https://tailwindcss.com/docs/configuration#modules
     |-----------------------------------------------------------------------------
     |
     | this section of the config is purely about configuring variants for core plugins.
     |
     | Currently supported variants:
     |   - responsive
     |   - hover
     |   - focus
     |   - focus-within
     |   - active
     |   - group-hover
     |
     | To disable a plugin you need remove it from the variants section and set it to false in the corePlugins section
     |
   */

  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    ellipsis: ['responsive'],                           /* This was added as part of the typography plugin installation */
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    hyphens: ['responsive'],                            /* This was added as part of the typography plugin installation */
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textIndent: ['responsive'],                         /* This was added as part of the typography plugin installation */
    textTransform: ['responsive'],
    textShadow: ['responsive'],                         /* This was added as part of the typography plugin installation */
    textUnset: ['responsive'],                          /* This was added as part of the typography plugin installation */
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
     |-----------------------------------------------------------------------------
     | Plugins                                https://tailwindcss.com/docs/plugins
     |-----------------------------------------------------------------------------
     |
     | Here is where you can register any plugins you'd like to use in your
     | project. Tailwind's built-in `container` plugin is enabled by default to
     | give you a Bootstrap-style responsive container component out of the box.
     |
     | Be sure to view the complete plugin documentation to learn more about how
     | the plugin system works.
     |
   */

  corePlugins: {
    objectFit: false,
    objectPosition: false,
    container: false,
  },
  plugins: [
      require('tailwindcss-typography')({
          ellipsis: true,             // defaults to true
          hyphens: true,              // defaults to true
          textUnset: true,            // defaults to true
          componentPrefix: 'manor-',  // prefix for typography text styles
      }),
  ],

}
