# Icon component
Basic logo component

## Usage

~~~js
<Logo 
  size={'w-64'}
  src={'https://www.comparethemarket.com.au/logo.svg'}
  srcsets={[{
    srcset: 'https://www.something.com/placeholder.svg',
    media: '(min-width: 300px'
  }]}
/>
~~~

## Props

1. `size` *(optional) string*
    * A TailwindCSS class (see tailwind.config.js) - typically a width or height class
2. `src` *(optional) string*
	* src for the image
3. `srcsets` *(optional) array*
	* Array of objects of { srcset, media }
