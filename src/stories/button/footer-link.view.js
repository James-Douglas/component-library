import React from 'react';
import Container from '../../components/Grid/Container/Container.component';
import Row from '../../components/Grid/Row/Row.component';
import Column from '../../components/Grid/Column/Column.component';
import Button from '../../components/Button/Button.component';
import styles from './styles';

const FooterLinkButtonView = () => (
  <>
    <style jsx>{styles}</style>
    <div className="background manor-rich-text">
      <p>On light backgrounds:</p>
      <div className="lightbg">
        <Button id="text-btn01" btnType="footer-link" content="Compare the Market" href="#" target="_blank" />
      </div>
      <p>On dark backgrounds:</p>
      <div className="darkbg-footer">
        <Button id="text-btn01" btnType="footer-link" btnMode="onDark" content="Compare the Market" href="#" target="_blank" />
      </div>
      <Container>
        <div className="darkbg-footer">
          <Row>
            <Column>
              <div className="footer-alignment">
                <Button id="button-f1" btnType="footer-link" btnMode="onDark" content="About us" href="#" target="_blank" />
                <Button id="button-f2" btnType="footer-link" btnMode="onDark" content="Testimonials" href="#" target="_blank" />
                <Button id="button-f3" btnType="footer-link" btnMode="onDark" content="Privacy policy" href="#" target="_blank" />
                <Button id="button-f4" btnType="footer-link" btnMode="onDark" content="Credit guide" href="#" target="_blank" />
              </div>
            </Column>
            <Column>
              <div className="footer-alignment">
                <Button id="button-f5" btnType="footer-link" btnMode="onDark" content="Media centre" href="#" target="_blank" />
                <Button id="button-f6" btnType="footer-link" btnMode="onDark" content="Contact us" href="#" target="_blank" />
                <Button id="button-f7" btnType="footer-link" btnMode="onDark" content="Website terms of use" href="#" target="_blank" />
                <Button id="button-f8" btnType="footer-link" btnMode="onDark" content="Competition terms and conditions" href="#" target="_blank" />
              </div>
            </Column>
            <Column>
              <div className="footer-alignment">
                <Button id="button-f5" btnType="footer-link" btnMode="onDark" content="Blog" href="#" target="_blank" />
                <Button id="button-f6" btnType="footer-link" btnMode="onDark" content="Products" href="#" target="_blank" />
                <Button id="button-f7" btnType="footer-link" btnMode="onDark" content="Careers" href="#" target="_blank" />
                <Button id="button-f8" btnType="footer-link" btnMode="onDark" content="Financial services guide" href="#" target="_blank" />
              </div>
            </Column>
            <Column>
              <div className="footer-alignment">
                <Button id="button-f5" btnType="footer-link" btnMode="onDark" content="Who we compare" href="#" target="_blank" />
                <Button id="button-f6" btnType="footer-link" btnMode="onDark" content="Sitemap" href="#" target="_blank" />
                <Button id="button-f7" btnType="footer-link" btnMode="onDark" content="Website terms of use" href="#" target="_blank" />
                <Button id="button-f8" btnType="footer-link" btnMode="onDark" content="Financial services guide - life insurance products" href="#" target="_blank" />
              </div>
            </Column>
          </Row>
        </div>
      </Container>
    </div>
  </>
);

export default FooterLinkButtonView;
