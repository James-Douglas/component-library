<svelte:options tag='ctm-input' />
<Fieldset {label} {tooltip} {..._props.fieldsetOptions}>
  <div class:disabled={disabled} class:hidden={hidden} class='input-wrap-default'>
    <div
      class='fix-wrap'
      class:invalid={invalid}
      class:manor-prefilled-border={autofill && !disabled}
      bind:this={fixWrap}
      class:input-border={bordered}>
      {#if prefix}
        <span class='prefix' class:prefix-no-border={!bordered} class:manor-prefilled={autofill && !disabled}>{@html prefix}</span>
      {/if}

      <div class='input-close-wrap'>
        <input
          bind:this={inputField}
          on:input={setValue}
          on:click={inputFieldClicked}
          {id}
          {type}
          {placeholder}
          {disabled}
          {required}
          class='input-default'
          class:manor-prefilled={autofill && !disabled}
          {value}
          list={listId}
          {autocomplete}
        />


        {#if value.length}
          <button on:click={clearInput} id='input-close-button' tabindex='0' class:lighter={!autofill} class:darker={autofill}>
            <div class='sr-only'>Clears the {label} field.</div>
            <Icon name={'closeCircle'} size={'1.6'}></Icon>
          </button>
        {/if}
      </div>

      {#if suffix}
        <span class='suffix' class:suffix-no-border={!bordered}>{@html suffix}</span>
      {/if}
    </div>
   </div>

    <span slot="supporting-elements" class="w-full relative">
      {#if listId}
        <slot name='data-list'></slot>
      {/if}

      <div class="supporting-elements">

        <slot></slot>
        {#if !required}
          <div>
            <span class="manor-optional-indicator manor-subscript">Optional</span>
          </div>
        {/if}
      </div>
    </span>
</Fieldset>

<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import Fieldset from '../Fieldset/Fieldset.svelte';
  import Row from '../Grid/Row/Row.svelte';
  import Column from '../Grid/Column/Column.svelte';
  import Label from '../Label/Label.svelte';
  import Tooltip from '../Tooltip/Tooltip.svelte';
  import Icon from '../Icon/Icon.svelte';
  import observeProps from '../observeProps';
  import { isDesktop } from '@comparethemarketau/manor-config/utils/breakpoint';

  export let id;
  export let type = 'text';
  export let label = '';
  export let placeholder = '';
  export let bordered = true;
  export let disabled = false;
  export let required = false;
  export let invalid = false;
  export let autofill = false;
  export let prefix = '';
  export let suffix = '';
  export let value = '';
  export let listId;
  export let autocomplete = 'off';
  export let hidden = false;
  export let tooltip = {};

  const dispatch = createEventDispatcher();

  let inputField;
  let fixWrap;
  let _props;
  let enableLabelTooltip = !isDesktop();
  let inputWrapperElement;

  $: fieldsetOptions = $$props.fieldsetOptions || {};

  $: {
    _props = observeProps(
      [
        'id',
        'type',
        'label',
        'placeholder',
        'bordered',
        'disabled',
        'required',
        'invalid',
        'autofill',
        'value',
        'suffix',
        'prefix',
        'listId',
        'list',
        'tooltip'
      ], $$props);

    if (inputField) {
      Object.entries(_props).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          inputField.removeAttribute(key);
        } else {
          inputField.setAttribute(key, value);
        }
      });
    }
  }

  function inputFieldClicked(event) {
    dispatch('inputFieldClicked', event);
  }

  function setValue(event) {
    value = event.target.value;
    dispatch('setValue', value);
  }

  function clearInput() {
    value = '';
    dispatch('setValue', value);
  }

  function resizeHandler() {
    enableLabelTooltip = !isDesktop();
  }

  function focusStyle() {
    fixWrap.style.border = 'solid #1780F3 0.1rem';
  }

  function blurStyle() {
    fixWrap.style.border = '';
  }

  onMount(() => {
    window.addEventListener('resize', resizeHandler);
    inputField.addEventListener('focus', focusStyle);
    inputField.addEventListener('blur', blurStyle);
  });

  onDestroy(() => {
    window.removeEventListener('resize', resizeHandler);
    inputField.removeEventListener('focus', focusStyle);
    inputField.removeEventListener('blur', blurStyle);
  });
</script>

<style>
  .input-wrap-default {
    @apply relative w-256;
  }
  .input-default {
    @apply w-256  pl-12 block text-base border border-solid border-transparent;
    min-height: 4.4rem;
    padding-right: 3.6rem;
  }
  input:invalid {
    @apply shadow-none;
  }
  input::placeholder {
    @apply italic text-base text-grey;
  }
  .fix-wrap {
    @apply flex border border-solid border-transparent;
  }
  .fix-wrap:hover {
    @apply border border-solid border-light-blue;
  }
  .fix-wrap-focus {
    @apply border border-solid border-light-blue;
  }
  .input-border {
    @apply border border-solid border-grey-light;
  }
  .input-border-right {
    border-right-color: theme(colors.grey-light);
  }
  .input-border-left {
    border-left-color: theme(colors.grey-light);
  }
  input:focus, input:active, input:hover {
    @apply outline-none;
  }
  input[disabled] {
    @apply bg-white cursor-not-allowed;
  }
  .disabled {
    @apply opacity-50;
  }
  .lighter {
    fill: theme(colors.grey-light);
  }
  .darker {
    fill: theme(colors.grey-dark);
  }
  #input-close-button:hover {
    fill: theme(colors.light-blue);
  }
  .input-default, .input-wrap-default {
   @apply w-full;
  }
  .input-close-wrap {
    @apply relative w-full;
    min-height: 4.4rem;
  }
  #input-close-button {
    @apply absolute w-40 h-40;
    right: 0.2rem;
    top: 0.2rem;
    transition: .2s ease-in-out all;
  }
  .supporting-elements {
    @apply flex justify-end w-full pt-8;
  }
  .manor-optional-indicator {
    margin-left: 1rem;
  }
  .prefix, .suffix {
    @apply flex items-center justify-center text-base font-bold;
    padding: 0.9rem 1.4rem;
    min-height: 4.4rem;
  }
  .prefix {
    padding-right: 0.5rem;
  }
  .suffix {
    padding-left: 0.5rem;
  }
  .invalid {
    @apply border border-solid border-invalid;
  }
  .prefix-no-border {
    @apply bg-white border border-solid border-transparent;
  }
  .suffix-no-border {
    @apply bg-white border border-solid border-transparent;
  }
  /* **********************************************************************
    Override Autocomplete styles in Chrome
    and include functionality for displaying pre-filled fields
  ************************************************************************* */
  .manor-prefilled-border {
    @apply border border-solid border-prechecked-darker;
  }
  .manor-prefilled,
  .input-default:-webkit-autofill,
  .input-default:-webkit-autofill:hover,
  .input-default:-webkit-autofill:focus {
    @apply bg-prechecked;
    -webkit-text-fill-color: theme(colors.black);
  }
  ::-ms-clear {
    display: none;
  }
</style>
