<!-- <div class="background">
  {#each componentProps as props, i}
    <Input 
      id={`id-${i}`} 
      type={props.type} 
      label={props.label} 
      placeholder={props.placeholder} 
      value={props.value || ''}
      on:setValue={props.func[0]}
      on:clearInput={props.func[0]}
      autofill={props.autofill}
    />
  {/each}
</div>

<script>
  import Input from '../../src/Input/Input.svelte';

  const componentProps = [
    {
      label: 'Example: Change input value based on word lookup',
      type: 'text',
      placeholder: 'Type "example" into the input',
      value: '',
      func: [
        setInput0
      ],
      autofill: false
    },
    {
      label: 'Example: Change value if not a number',
      type: 'text',
      placeholder: 'Type a non numeric character',
      value: '',
      func: [
        setInput1
      ],
      autofill: false
    },
    {
      label: 'Example: Has a value provided, clears on input',
      type: 'text',
      placeholder: 'Placeholder',
      value: 'Default Value',
      func: [
        setInput2
      ],
      autofill: true
    }
  ];

  let defaultFlag = true;

  function setInput0(e) {
    if (e.detail.includes('example')) {
      componentProps[0].value = 'Value changed the setInput1 function, bound to the custom setValue custom event';
    } else {
      componentProps[0].value = e.detail
    }
  }

  function setInput1(e) {
    if (isNaN(e.detail)) {
      componentProps[1].value = 'Value is not a number, clear the input with the "x" icon';
    } else {
      componentProps[1].value = e.detail
    }
  }

  function setInput2(e) {
    componentProps[2].autofill = false;
    componentProps[2].value = e.detail;
  }

</script>

<style>
  .background {
    background: #fff;
    padding: 10em;
    height: 100vh;
    width: 100vw;
  }
</style> -->