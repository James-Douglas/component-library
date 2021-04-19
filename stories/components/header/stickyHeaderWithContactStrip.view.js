import React from 'react';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { StickyHeader } from '@comparethemarketau/manor-header';
import { CTMLogo } from '@comparethemarketau/manor-logo';
import { FluidContainer } from '@comparethemarketau/manor-grid';
import {Typography} from '@comparethemarketau/manor-typography';

const HeaderView = () => (
  <ManorProvider>
    <StickyHeader number="1800 123 456" logo={<CTMLogo />} contactStrip/>
    <FluidContainer>
      <div className="full scrollable w-auto" style={{ marginTop: '60px' }}>
        <div className="hero">
          <Typography variant="h1">Example Headline</Typography>
        </div>
        <div className="section">
          <FluidContainer>
            <Typography variant="h2">Content with Grey Background</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas sapien id tristique consequat.
              Suspendisse imperdiet, sapien vel pellentesque rhoncus, arcu odio pellentesque ligula, a aliquet eros mi
              ut eros. Nam pharetra sem id dignissim feugiat. Sed tempor vulputate nisi, ac ultrices neque accumsan
              porta. Nunc a rhoncus nisl, accumsan consequat erat. Sed vitae maximus justo. Etiam tempor felis eget
              dignissim pretium. Proin tortor ligula, luctus volutpat ligula vitae, commodo rutrum diam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit enim
              vitae quam dignissim, rhoncus condimentum felis pellentesque. Morbi scelerisque id nisi id tincidunt.
              Aliquam erat volutpat.
            </Typography>
            <Typography variant="body1">
              Curabitur magna massa, tristique non vulputate eget, elementum at enim. Morbi posuere efficitur rutrum.
              Maecenas id sapien risus. In at risus sit amet ligula gravida scelerisque. Sed gravida tincidunt ornare.
              Donec in fringilla nisi. Suspendisse metus arcu, egestas quis justo nec, condimentum bibendum justo.
              Vivamus nec ultrices libero. Vestibulum tristique tellus nunc. Ut feugiat blandit feugiat. Suspendisse
              placerat, mi eget elementum condimentum, neque magna fringilla velit, eget tempus augue sapien sit amet
              ex. Nam augue arcu, tincidunt quis accumsan quis, pellentesque eget nula. Vivamus id rutrum libero.
            </Typography>
            <Typography variant="body1">
              Nullam semper, nisl vel ornare hendrerit, urna nunc blandit ante, sollicitudin iaculis sapien eros nec
              magna. Donec consequat lacus sed laoreet suscipit. Etiam ac gravida magna. Fusce ornare nunc nec ipsum
              sollicitudin, sit amet malesuada urna scelerisque. Pellentesque vitae neque facilisis, dapibus massa ac,
              auctor ipsum. Pellentesque venenatis augue sem, dictum molestie leo interdum at. Nullam tristique dictum
              ipsum id mattis. Duis ac diam blandit arcu scelerisque iaculis quis vel metus. Duis neque nibh, egestas
              sit amet fermentum non, placerat quis enim. Integer non tempus tellus. Integer at tortor sed diam
              elementum viverra id ac urna.
            </Typography>
            <Typography variant="body1">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id
              eleifend nibh. Vestibulum nisi dui, iaculis sed pellentesque at, faucibus accumsan mauris. Vestibulum
              ultrices sed enim nec interdum. Donec auctor pretium porttitor. Nullam scelerisque odio quis risus
              pulvinar facilisis. Quisque at posuere nisi. Mauris congue hendrerit ipsum non pulvinar. Sed blandit
              sagittis ex, a bibendum risus commodo quis.
            </Typography>
            <Typography variant="body1">
              Aenean sit amet odio id erat rutrum eleifend. Fusce pellentesque ipsum nisl. Ut maximus finibus odio,
              sed suscipit ligula vulputate eu. Integer et diam quam. Aliquam consectetur, lorem quis luctus
              venenatis, lorem ligula vehicula magna, sit amet ultricies nisl diam vel libero. Fusce pretium, velit
              quis vestibulum pellentesque, nibh tortor placerat quam, vel auctor turpis leo et lectus. Suspendisse
              eget turpis ultricies, pulvinar ex et, efficitur tellus. Donec euismod, dui id vulputate placerat,
              tellus magna malesuada dolor, eget luctus velit orci vel quam. Donec viverra consectetur porta. Donec ut
              lectus lectus. Proin placerat malesuada lacus eu fringilla. Morbi at eros vitae justo pharetra euismod a
              vel velit. Quisque vel porttitor erat. Etiam non imperdiet ligula.
            </Typography>
          </FluidContainer>
        </div>
        <div className="section white-bg">
          <FluidContainer>
            <Typography variant="h2">Content with White Background</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas sapien id tristique consequat.
              Suspendisse imperdiet, sapien vel pellentesque rhoncus, arcu odio pellentesque ligula, a aliquet eros mi
              ut eros. Nam pharetra sem id dignissim feugiat. Sed tempor vulputate nisi, ac ultrices neque accumsan
              porta. Nunc a rhoncus nisl, accumsan consequat erat. Sed vitae maximus justo. Etiam tempor felis eget
              dignissim pretium. Proin tortor ligula, luctus volutpat ligula vitae, commodo rutrum diam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit enim
              vitae quam dignissim, rhoncus condimentum felis pellentesque. Morbi scelerisque id nisi id tincidunt.
              Aliquam erat volutpat.
            </Typography>
            <Typography variant="body1">
              Curabitur magna massa, tristique non vulputate eget, elementum at enim. Morbi posuere efficitur rutrum.
              Maecenas id sapien risus. In at risus sit amet ligula gravida scelerisque. Sed gravida tincidunt ornare.
              Donec in fringilla nisi. Suspendisse metus arcu, egestas quis justo nec, condimentum bibendum justo.
              Vivamus nec ultrices libero. Vestibulum tristique tellus nunc. Ut feugiat blandit feugiat. Suspendisse
              placerat, mi eget elementum condimentum, neque magna fringilla velit, eget tempus augue sapien sit amet
              ex. Nam augue arcu, tincidunt quis accumsan quis, pellentesque eget nulla. Vivamus id rutrum libero.
            </Typography>
            <Typography variant="body1">
              Nullam semper, nisl vel ornare hendrerit, urna nunc blandit ante, sollicitudin iaculis sapien eros nec
              magna. Donec consequat lacus sed laoreet suscipit. Etiam ac gravida magna. Fusce ornare nunc nec ipsum
              sollicitudin, sit amet malesuada urna scelerisque. Pellentesque vitae neque facilisis, dapibus massa ac,
              auctor ipsum. Pellentesque venenatis augue sem, dictum molestie leo interdum at. Nullam tristique dictum
              ipsum id mattis. Duis ac diam blandit arcu scelerisque iaculis quis vel metus. Duis neque nibh, egestas
              sit amet fermentum non, placerat quis enim. Integer non tempus tellus. Integer at tortor sed diam
              elementum viverra id ac urna.
            </Typography>
            <Typography variant="body1">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id
              eleifend nibh. Vestibulum nisi dui, iaculis sed pellentesque at, faucibus accumsan mauris. Vestibulum
              ultrices sed enim nec interdum. Donec auctor pretium porttitor. Nullam scelerisque odio quis risus
              pulvinar facilisis. Quisque at posuere nisi. Mauris congue hendrerit ipsum non pulvinar. Sed blandit
              sagittis ex, a bibendum risus commodo quis.
            </Typography>
            <Typography variant="body1">
              Aenean sit amet odio id erat rutrum eleifend. Fusce pellentesque ipsum nisl. Ut maximus finibus odio,
              sed suscipit ligula vulputate eu. Integer et diam quam. Aliquam consectetur, lorem quis luctus
              venenatis, lorem ligula vehicula magna, sit amet ultricies nisl diam vel libero. Fusce pretium, velit
              quis vestibulum pellentesque, nibh tortor placerat quam, vel auctor turpis leo et lectus. Suspendisse
              eget turpis ultricies, pulvinar ex et, efficitur tellus. Donec euismod, dui id vulputate placerat,
              tellus magna malesuada dolor, eget luctus velit orci vel quam. Donec viverra consectetur porta. Donec ut
              lectus lectus. Proin placerat malesuada lacus eu fringilla. Morbi at eros vitae justo pharetra euismod a
              vel velit. Quisque vel porttitor erat. Etiam non imperdiet ligula.
            </Typography>
          </FluidContainer>
        </div>
      </div>
    </FluidContainer>
  </ManorProvider>
);

export default HeaderView;
