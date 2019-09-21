<svelte:options tag="ctm-tooltip"/>
{#if title || body}
<div class="tooltip-wrapper {desktop ? 'justify-center' : 'justify-end'}">
  <div bind:this={tooltipElement} class="tooltip-icon" class:tooltip-pinned={pinned} class:tooltip-active={active && !pinned} on:click|stopPropagation={pinTooltip}>
    <span class="sr-only">{screenReaderLabel}</span>
    <div class="icon-wrapper">
      <Icon name="info" size={tooltipIconSize} />
    </div>
  </div>
</div>
{/if}

<script>
  import { onMount, onDestroy } from 'svelte';
  import screens from '@comparethemarketau/manor-config/screens.js';
  import tippy from 'tippy.js';
  import Icon from '../Icon/Icon.svelte';
  import { isDesktop } from '@comparethemarketau/manor-config/utils/breakpoint';
  import { throttle } from '@comparethemarketau/manor-config/utils/throttle';

  export let title = '';
  export let body = '';
  export let boundingElementSelector;
  export let screenReaderLabel = ''; // Icon label for screen readers

  const xsScreenWidth = parseInt(screens.xs, 10);

  let desktop;
  let placement;
  let tooltipElement;
  let tippyInstance;
  let active = false;
  let pinned = false;

  let boundingElement;
  let dynamicStyleOverrides;
  let tooltipIconSize = isDesktop() ? 2.4 : 3.5;

  let throttledIconHandler;
  let throttledSetPlacementAndDynamicStyles;

  function pinTooltip() {
    if (!tippyInstance.state.isVisible) {
      tippyInstance.show();
    }
    tippyInstance.disable();
    active = true;
    pinned = true;
    document.body.addEventListener('click', hideTooltip);
    tooltipElement.addEventListener('blur', hideTooltip);
  }

  function hideTooltip() {
    tippyInstance.enable();
    tippyInstance.hide();
    active = false;
    pinned = false;
    document.body.removeEventListener('click', hideTooltip);
    tooltipElement.removeEventListener('blur', hideTooltip);
  }

  function escapeKeyHandler(e) {
    if (e.key === 'Escape') {
      hideTooltip();
    }
  }

  function spacebarHandler(e) {
    if (e.code === 'Space' && e.target === tooltipElement) {
      e.preventDefault();
      tippyInstance.enable();
      tippyInstance.show();
      active = true;
    }
  }

  function addOnShowListeners() {
    throttledSetPlacementAndDynamicStyles = throttle(setPlacementAndDynamicStyles);
    window.addEventListener('resize', throttledSetPlacementAndDynamicStyles);
    window.addEventListener('scroll', hideTooltip);
    document.body.addEventListener('keydown', escapeKeyHandler);
    document.body.addEventListener('blur', hideTooltip);
  }

  function removeOnShowListeners() {
    window.removeEventListener('scroll', hideTooltip);
    window.removeEventListener('resize', throttledSetPlacementAndDynamicStyles);
    document.body.removeEventListener('keydown', escapeKeyHandler);
    document.body.removeEventListener('blur', hideTooltip);
  }

  /**
  * Calculates the width of the tooltip when there is a boundingElement & we're in a "small" container
  *
  * width = (end of tooltip - start of container) - (end of container - end of tooltip (even 'padding' on both sides))
  *       = (icon.right - boundingElement.left) - (boundingElement.right - icon.right)
  * @returns {number}
  */
  function calculateTooltipWidth() {
    if (tooltipElement) {
      const tooltipElementBoundingRect = tooltipElement.getBoundingClientRect();
      const boundingElementBoundingRect = boundingElement.getBoundingClientRect();
      return (tooltipElementBoundingRect.right - boundingElementBoundingRect.left) - (boundingElementBoundingRect.right - tooltipElementBoundingRect.right);
    }
  }

  function updateDynamicStyles(containerWidth) {
    // Used to dynamically override tippy styles, in particular we set a max-width property to constrain
    // it to a container when there is a boundingElement
    const styleElement = document.getElementById('tp-styles');
    if (styleElement) {
      if (styleElement.sheet.cssRules.length) {
        styleElement.sheet.deleteRule(0);
      }
      styleElement.sheet.insertRule(`.tippy-popper { margin: 0 auto; max-width: ${containerWidth}px !important; }`, 0);
    }
  }

  function setPlacementAndDynamicStyles() {
    desktop = isDesktop();
    let containerWidth = calculateTooltipWidth();

    // If in desktop or in a container over 500px, align the tooltip to the left
    if (desktop && containerWidth > 500) {
      tippyInstance.set({
        placement: 'left'
      });
    } else {
      tippyInstance.set({
        placement: 'bottom-end'
      });
    }

    updateDynamicStyles(calculateTooltipWidth());
  }

  function setIconSize() {
    const priorDesktop = desktop;
    desktop = isDesktop();
    if (priorDesktop === desktop) return;

    // If switching from desktop to mobile, the tooltip gets recreated so we need to remove onShow listeners here
    removeOnShowListeners();

    if (!desktop) {
      tooltipIconSize = 3.5;
    } else {
      tooltipIconSize = 2.4;
    }
  }

  onMount(() => {
    desktop = isDesktop();
    throttledIconHandler = window.addEventListener('resize', throttle(setIconSize));
    tooltipElement.addEventListener('keydown', spacebarHandler);

    if (!document.getElementById('tp-styles')) {
      dynamicStyleOverrides = document.createElement('style');
      dynamicStyleOverrides.setAttribute('id', 'tp-styles');
      document.head.appendChild(dynamicStyleOverrides);
    }

    let content = `
          <div class="manor-tooltip-content">
            ${title ? `<div class="manor-subtitle2">${title}</div>` : ''}
            <div class="manor-body2">${body}</div></div>
        `;

    if (boundingElementSelector) {
      boundingElement = document.querySelector(boundingElementSelector);
    } else {
      boundingElement = document.body;
    }
    updateDynamicStyles(calculateTooltipWidth());

    const options = {
      content: content,
      theme: 'manor',
      interactive: true,
      animateFill: true,
      arrow: desktop,
      distance: desktop ? 5 : 0,
      animation: 'scale',
      flip: false,
      duration: [150, 75],
      hideOnClick: false,
      appendTo: boundingElement,
      onShow: () => {
        setPlacementAndDynamicStyles();
        document.body.click();
        active = true;
        addOnShowListeners();
      },
      onHide: () => {
        active = false;
        if (pinned) {
          tooltipElement.blur();
        }
      },
      onHidden: () => {
        removeOnShowListeners();
      }
    };

    tippyInstance = tippy(tooltipElement, options);
  });

  onDestroy(() => {
    tippyInstance.destroy();
    removeOnShowListeners();
    window.removeEventListener('resize', throttledIconHandler);
    document.body.removeEventListener('click', hideTooltip);
    tooltipElement.removeEventListener('blur', hideTooltip);
  });

</script>

<style>

  .tooltip-wrapper {
    @apply flex items-center w-full;
  }

  .tooltip-icon {
    @apply flex items-center justify-center text-grey-light;
  }

  .tooltip-active {
    @apply text-light-blue;
  }

  .tooltip-pinned {
    @apply fill-current;
    color: rgba(51, 51, 51, 0.97) !important;
  }

  .icon-wrapper {
    @apply fill-current;
  }

  :global(.manor-tooltip-content) {
    @apply p-16 text-left;
  }

  /* Custom theme for tippy.js, see: https://atomiks.github.io/tippyjs/themes/ for documentation */
  @media screen and (min-width: 769px) {
    :global(.tippy-tooltip.manor-theme) {
      @apply max-w-md;
    }
  }

  :global(.tippy-tooltip.manor-theme) {
    background-color: rgba(51, 51, 51, 0.97) !important;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,.1);
  }

  :global(.tippy-tooltip.manor-theme) .tippy-content {
    @apply text-left p-12 overflow-auto;
    max-height: 32rem;
  }

  @media screen and (max-width: 768px) {
    :global(.tippy-popper) {
      @apply inset-x-0;
    }
    :global(.tippy-tooltip) {
      max-width: none !important;
    }
  }
  /* end tippy.js theme */
</style>
