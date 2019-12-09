import React from 'react';
import Footer from '../../components/Footer/Footer.component';
import StickyHeader from '../../components/Header/StickyHeader.component';
import FluidContainer from '../../components/Grid/Container/Fluid.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';

const disclaimerText = `Exchange rates displayed are updated daily at approximately 4:15 pm (AEST) and consequently are 
  indicative only. If you decide to proceed with this provider, they will provide you with a final rate at the point of 
  transaction. The Compare The Market website and trading name are owned by Compare The Market Pty Ltd ACN 117 323 378 
  AFSL 422926. Although we cover a range of providers and services we don’t cover every provider or service available 
  in the market so there may be other options available to you. At times, not all brands on our website may be available. 
  If you decide to use our services and those of a participating provider using a link on this website, you will be taken 
  to that provider’s website to make your application. Compare the Market is not making any suggestion or recommendation 
  to you about a particular product or service. Before acting on any information, evaluate your needs, objectives and 
  situation to ensure which product or service is suitable for you. We will take all reasonable steps to ensure that the 
  information on this site is current and accurate but you should confirm any information that is important to your 
  decision to proceed with the provider and read the information they provide before making a final decision. For more 
  information about the range of providers, products and services compared, how the service works, and how Compare the 
  Market is remunerated (remembering that the service is free for you to use), click here and read our Website Terms 
  of Use.
`;

const FooterView = () => {
  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';
  document.querySelector('#root').style.height = '100%';
  return (
    <div style={{ height: '100%' }}>
      <StickyHeader number="1800 123 456" />
      <FluidContainer>
        <Row>
          <Column md={12} xl={10} offsetXl={1}>
            <div className="manor-rich-text scrollable w-auto" style={{ marginTop: '60px' }}>
              <h1 className="manor-h1">Example Headline</h1>
              <h2 className="manor-h2">Content with White Background</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas sapien id tristique consequat.
                Suspendisse imperdiet, sapien vel pellentesque rhoncus, arcu odio pellentesque ligula, a aliquet eros mi
                ut eros. Nam pharetra sem id dignissim feugiat. Sed tempor vulputate nisi, ac ultrices neque accumsan
                porta. Nunc a rhoncus nisl, accumsan consequat erat. Sed vitae maximus justo. Etiam tempor felis eget
                dignissim pretium. Proin tortor ligula, luctus volutpat ligula vitae, commodo rutrum diam. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit enim
                vitae quam dignissim, rhoncus condimentum felis pellentesque. Morbi scelerisque id nisi id tincidunt.
                Aliquam erat volutpat.
              </p>
              <p>
                Curabitur magna massa, tristique non vulputate eget, elementum at enim. Morbi posuere efficitur rutrum.
                Maecenas id sapien risus. In at risus sit amet ligula gravida scelerisque. Sed gravida tincidunt ornare.
                Donec in fringilla nisi. Suspendisse metus arcu, egestas quis justo nec, condimentum bibendum justo.
                Vivamus nec ultrices libero. Vestibulum tristique tellus nunc. Ut feugiat blandit feugiat. Suspendisse
                placerat, mi eget elementum condimentum, neque magna fringilla velit, eget tempus augue sapien sit amet
                ex. Nam augue arcu, tincidunt quis accumsan quis, pellentesque eget nulla. Vivamus id rutrum libero.
              </p>
              <p>
                Nullam semper, nisl vel ornare hendrerit, urna nunc blandit ante, sollicitudin iaculis sapien eros nec
                magna. Donec consequat lacus sed laoreet suscipit. Etiam ac gravida magna. Fusce ornare nunc nec ipsum
                sollicitudin, sit amet malesuada urna scelerisque. Pellentesque vitae neque facilisis, dapibus massa ac,
                auctor ipsum. Pellentesque venenatis augue sem, dictum molestie leo interdum at. Nullam tristique dictum
                ipsum id mattis. Duis ac diam blandit arcu scelerisque iaculis quis vel metus. Duis neque nibh, egestas
                sit amet fermentum non, placerat quis enim. Integer non tempus tellus. Integer at tortor sed diam
                elementum viverra id ac urna.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id
                eleifend nibh. Vestibulum nisi dui, iaculis sed pellentesque at, faucibus accumsan mauris. Vestibulum
                ultrices sed enim nec interdum. Donec auctor pretium porttitor. Nullam scelerisque odio quis risus
                pulvinar facilisis. Quisque at posuere nisi. Mauris congue hendrerit ipsum non pulvinar. Sed blandit
                sagittis ex, a bibendum risus commodo quis.
              </p>
              <p>
                Aenean sit amet odio id erat rutrum eleifend. Fusce pellentesque ipsum nisl. Ut maximus finibus odio,
                sed suscipit ligula vulputate eu. Integer et diam quam. Aliquam consectetur, lorem quis luctus
                venenatis, lorem ligula vehicula magna, sit amet ultricies nisl diam vel libero. Fusce pretium, velit
                quis vestibulum pellentesque, nibh tortor placerat quam, vel auctor turpis leo et lectus. Suspendisse
                eget turpis ultricies, pulvinar ex et, efficitur tellus. Donec euismod, dui id vulputate placerat,
                tellus magna malesuada dolor, eget luctus velit orci vel quam. Donec viverra consectetur porta. Donec ut
                lectus lectus. Proin placerat malesuada lacus eu fringilla. Morbi at eros vitae justo pharetra euismod a
                vel velit. Quisque vel porttitor erat. Etiam non imperdiet ligula.
              </p>
              <p>
                Aenean sit amet odio id erat rutrum eleifend. Fusce pellentesque ipsum nisl. Ut maximus finibus odio,
                sed suscipit ligula vulputate eu. Integer et diam quam. Aliquam consectetur, lorem quis luctus
                venenatis, lorem ligula vehicula magna, sit amet ultricies nisl diam vel libero. Fusce pretium, velit
                quis vestibulum pellentesque, nibh tortor placerat quam, vel auctor turpis leo et lectus. Suspendisse
                eget turpis ultricies, pulvinar ex et, efficitur tellus. Donec euismod, dui id vulputate placerat,
                tellus magna malesuada dolor, eget luctus velit orci vel quam. Donec viverra consectetur porta. Donec ut
                lectus lectus. Proin placerat malesuada lacus eu fringilla. Morbi at eros vitae justo pharetra euismod a
                vel velit. Quisque vel porttitor erat. Etiam non imperdiet ligula.
              </p>
              <p>
                Aenean sit amet odio id erat rutrum eleifend. Fusce pellentesque ipsum nisl. Ut maximus finibus odio,
                sed suscipit ligula vulputate eu. Integer et diam quam. Aliquam consectetur, lorem quis luctus
                venenatis, lorem ligula vehicula magna, sit amet ultricies nisl diam vel libero. Fusce pretium, velit
                quis vestibulum pellentesque, nibh tortor placerat quam, vel auctor turpis leo et lectus. Suspendisse
                eget turpis ultricies, pulvinar ex et, efficitur tellus. Donec euismod, dui id vulputate placerat,
                tellus magna malesuada dolor, eget luctus velit orci vel quam. Donec viverra consectetur porta. Donec ut
                lectus lectus. Proin placerat malesuada lacus eu fringilla. Morbi at eros vitae justo pharetra euismod a
                vel velit. Quisque vel porttitor erat. Etiam non imperdiet ligula.
              </p>
              <p>
                Aenean sit amet odio id erat rutrum eleifend. Fusce pellentesque ipsum nisl. Ut maximus finibus odio,
                sed suscipit ligula vulputate eu. Integer et diam quam. Aliquam consectetur, lorem quis luctus
                venenatis, lorem ligula vehicula magna, sit amet ultricies nisl diam vel libero. Fusce pretium, velit
                quis vestibulum pellentesque, nibh tortor placerat quam, vel auctor turpis leo et lectus. Suspendisse
                eget turpis ultricies, pulvinar ex et, efficitur tellus. Donec euismod, dui id vulputate placerat,
                tellus magna malesuada dolor, eget luctus velit orci vel quam. Donec viverra consectetur porta. Donec ut
                lectus lectus. Proin placerat malesuada lacus eu fringilla. Morbi at eros vitae justo pharetra euismod a
                vel velit. Quisque vel porttitor erat. Etiam non imperdiet ligula.
              </p>
            </div>
          </Column>
        </Row>
      </FluidContainer>
      <Footer disclaimer={disclaimerText} />
    </div>
  );
};


export default FooterView;
