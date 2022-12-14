import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterContainer,
  FooterContainerStyled,
  LinksContainer,
  LinksContainerStyled,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className='links'>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          Términos de Uso
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          Trabajá con Nosotros
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          Soporte
        </Link>
      </LinksContainerStyled>
      <p>
        ©CoderNery 2022 <span>  Dalmasso Hnos </span>
      </p>
    </FooterContainerStyled>
  );
};

export default Footer;
