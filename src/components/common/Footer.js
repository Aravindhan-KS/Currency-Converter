import React from 'react';
import styled from 'styled-components';

// Styled footer container
const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid #e9ecef;
`;

// Container for content
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

// Copyright text
const Copyright = styled.p`
  color: #6c757d;
  font-size: 14px;
  margin: 0;
`;

// API credit
const ApiCredit = styled.p`
  color: #6c757d;
  font-size: 12px;
  margin-top: 5px;
`;

// Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container>
        <Copyright>
          &copy; {currentYear} Currency Converter. All Rights Reserved.
        </Copyright>
        <ApiCredit>
          Exchange rates provided by ExchangeRate-API
        </ApiCredit>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
