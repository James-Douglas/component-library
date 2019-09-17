<!-- <div class="background">

  {#each componentProps as props, i}
    <Input 
      id={`id-${i}`} 
      type={props.type} 
      label={props.label} 
      placeholder={props.placeholder} 
      value={props.value || ''}
      pattern={props.pattern ? props.pattern : ''}
      />
  {/each}
</div>

<script>
  import Input from '../../src/Input/Input.svelte';

  const componentProps = [
    {
      label: 'Your email address',
      type: 'email',
      placeholder: 'example@email.com',
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
    },
    {
      label: 'Your mobile number',
      type: 'tel',
      placeholder: '(04)x xxx xxxx',
      pattern:'[0-9]{3} [0-9]{3} [0-9]{4}'
    },
    {
      label: 'Your age',
      type: 'number',
      placeholder: 'e.g 25'
    },
    {
      label: 'This is an example of a longer question for an input type, to see how it floats on lower screen sizes',
      type: 'text',
      placeholder: 'Please answer the question'
    }
  ];

</script>

<style>
  .background {
    background: #fff;
    padding: 10em;
    height: 100vh;
    width: 100vw;
  }
</style> -->