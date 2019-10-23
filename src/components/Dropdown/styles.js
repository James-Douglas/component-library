
import css from 'styled-jsx/css';

export default css`
.supporting-elements {
  @apply flex justify-end w-full pt-8;
  
}

/* **********************************************************************
Make elements span 100% of available space
************************************************************************* */
.manor-dropdown-wrapper {
  @apply flex;
  flex-flow: row wrap;
}

.manor-dropdown-wrapper > * {
  flex: 1 100%;
}


/* **********************************************************************
Field Label
************************************************************************* */
.manor-dropdown-label {
  @apply text-black;
}

/* **********************************************************************
Select Field
   Note: iOS Safari will zoom-in the site layout if the select's text is less than 16px (currently 1.6rem == 16px)
   TODO: SVG images to be stored as assets or vars in tailwind - will be fixed up after SVG tech spike
************************************************************************* */
.manor-dropdown {
  @apply text-black font-normal max-w-full rounded-none border border-solid border-transparent text-base bg-white shadow-none m-0 relative appearance-none w-full leading-tighter;
  height: 4.4rem;
  padding: .88rem 2.24rem 0.8rem 1.2rem;
  box-sizing: border-box;
  -moz-appearance: none;          /* unset some default browser select styling */
  -webkit-appearance: none;       /* unset some default browser select styling */

  /* First background image is the down arrow, second is a white linear gradient background, may change change the inline svg to use a URL link instead before dev is finished */
  /* linear gradient background is important to keep, because its presence actually prevents IE from recognizing the background property */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, theme('colors.white') 0%, theme('colors.white') 100%);
  background-repeat: no-repeat, repeat;                     /* no repeat for the dropdown icon, repeat for the linear gradient */

  background-position: right 1.12rem top 49%, 0 0;          /* Set the icon Position:-  background-position: right 1.12rem top 49%, 0 0; (which is 1.12rem from the right side, respectively) if the size changes, you might want to make more right padding on the button so that it does not overlap the select's text  */
  background-size: 1.04rem auto, 100%;                      /* Set the size of the Icon:-  background-size: 1.04rem auto, 100%; */
}

/* Only for use on white backgrounds */
.manor-dropdown.manor-input-border {
  @apply border border-solid border-input-border;
}

/* instructs IE11 and IE10 to hide the menu icon pseudo element, so the custom icon behind it can appear */
.manor-dropdown::-ms-expand {
  @apply hidden;
}

.manor-dropdown.manor-default-selected,
.manor-dropdown.manor-default-selected:focus,
.manor-dropdown.manor-default-selected:hover {
  @apply text-disabled-text italic;
}


/* **********************************************************************
Select Field - hover/focus state
TODO: SVG images to be stored as assets or vars in tailwind - will be fixed up after SVG tech spike
************************************************************************* */
/* linear gradient background is important to keep, because its presence actually prevents IE from recognizing the background property */
.manor-dropdown:focus,
.manor-dropdown:hover {
  @apply border border-solid border-light-blue;

  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%231780F3%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, theme('colors.white') 0%, theme('colors.white') 100%);
}

.manor-dropdown:focus {
  @apply text-black shadow-none outline-none;
}


/* **********************************************************************
Style the default Option field
************************************************************************* */

/*
Use this to style the default option once the drop-down has been expanded
 - To style the select field when the default option is currently selected (see .manor-default-selected)
*/
.manor-dropdown-option.default {
  @apply italic;
}


/* **********************************************************************
Style the Option fields - style expanded option fields here
************************************************************************* */
.manor-dropdown-option {
  @apply text-base text-black font-normal;
}


/* **********************************************************************
Disabled styles
TODO: SVG images to be stored as assets or vars in tailwind - will be fixed up after SVG tech spike
************************************************************************* */
.manor-dropdown:disabled,
.manor-dropdown[aria-disabled=true] {
  @apply opacity-50;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%23DBD9D7%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, theme('colors.white') 0%, theme('colors.white') 100%);
}

.manor-dropdown.manor-default-selected:disabled,
.manor-dropdown.manor-default-selected[aria-disabled=true] {
  @apply italic;
}

.manor-dropdown:disabled:focus,
.manor-dropdown[aria-disabled=true]:focus,
.manor-dropdown:disabled:hover,
.manor-dropdown[aria-disabled=true]:hover {
  @apply cursor-not-allowed border border-solid border-transparent;
}

.manor-dropdown.manor-input-border:disabled:focus,
.manor-dropdown.manor-input-border[aria-disabled=true]:focus,
.manor-dropdown.manor-input-border:disabled:hover,
.manor-dropdown.manor-input-border[aria-disabled=true]:hover {
  @apply border border-solid border-input-border;
}

/* color of dropdown icon (prior to opacity) #A3A2A1 */
.manor-dropdown.manor-input-border:disabled,
.manor-dropdown.manor-input-border[aria-disabled=true] {
  @apply opacity-50 bg-input-border;

  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%23A3A2A1%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, theme('colors.input-border') 0%, theme('colors.input-border') 100%);
}

/* Note: this style currently wont be applied if aria-disabled is applied externally */
.manor-bordered-field-disabled-label {
  @apply opacity-50;
}

/* This style is used to style disabled dropdown options once the dropdown has been expanded */
.manor-dropdown-option:disabled {
  @apply text-disabled-text;
}


/* **********************************************************************
invalid styles
************************************************************************* */
/* .manor-dropdown:invalid, */    /* Note: Required fields would have red around them on page load if :invalid was used */
.manor-dropdown.invalid,
.manor-dropdown[aria-invalid=true] {
  @apply border border-solid border-invalid;
}


/* **********************************************************************
Override Autocomplete styles in Chrome
and include functionality for displaying pre-filled fields
TODO: SVG images to be stored as assets or vars in tailwind - will be fixed up after SVG tech spike
************************************************************************* */
.manor-dropdown.manor-prefilled,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {

  @apply border border-solid border-prechecked-darker;

  background-color: rgba(255, 255, 255, 0);
  -webkit-text-fill-color: theme('colors.black');

  /*-webkit-box-shadow: transparent box shadow so that background images work */
  -webkit-box-shadow: 0 0 0 100rem rgba(255, 255, 255, 0) inset;

  transition: background-color 5000s ease-in-out 0s;

  /* First background image is the down arrow, second is a white linear gradient background, may change change the inline svg to use a URL link instead before dev is finished */
  /* linear gradient background is important to keep, because its presence actually prevents IE from recognizing the background property */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, theme('colors.prechecked') 0%, theme('colors.prechecked') 100%);
  background-repeat: no-repeat, repeat;                     /* no repeat for the dropdown icon, repeat for the linear gradient */

  background-position: right 1.12rem top 49%, 0 0;          /* Set the icon Position:-  background-position: right 1.12rem top 49%, 0 0; (which is 1.12rem from the right side, respectively) if the size changes, you might want to make more right padding on the button so that it does not overlap the select's text  */
  background-size: 1.04rem auto, 100%;                      /* Set the size of the Icon:-  background-size: 1.04rem auto, 100%; */
}

.manor-dropdown.manor-prefilled.manor-default-selected,
.manor-dropdown.manor-prefilled.manor-default-selected:focus,
.manor-dropdown.manor-prefilled.manor-default-selected:hover,
select.manor-default-selected:-webkit-autofill,
select.manor-default-selected:-webkit-autofill:hover,
select.manor-default-selected:-webkit-autofill:focus {
 @apply italic;
  -webkit-text-fill-color: theme('colors.disabled-text');
}

`;
