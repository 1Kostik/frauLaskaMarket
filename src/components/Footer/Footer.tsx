import { Link } from "react-router-dom";

import { containerStyles } from "@styles/variables";
import {
  Container,
  FooterStyled,
  Nav,
  SocialLink,
  SocialContainer,
  copyrightStyle,
  navLinkStyle,
  payContainer,
  payText,
  contactContainer,
  contactLink,
  copyrightContainer,
  StyledLogo,
  contactLinkEmail,
  legalInfoStyle,
  legalInfoContainer,
} from "./Footer.styled";

import { ReactComponent as VisaIcon } from "/src/assets/icons/visa.svg";
import { ReactComponent as MCIcon } from "/src/assets/icons/master_card.svg";

const Footer = () => {
  return (
    <FooterStyled id="footer">
      <Container css={containerStyles}>
        <StyledLogo />
        <Nav>
          <Link to="/store" css={navLinkStyle}>
            Магазин
          </Link>
          <Link
            to="https://fl.fraulaska.com/?wpm-page=start"
            target="_blank"
            rel="noopener noreferrer"
            css={navLinkStyle}
          >
            Навчання
          </Link>
          <Link to="/payment-delivery" css={navLinkStyle}>
            Доставка та оплата
          </Link>
          <Link to="/privacy-policy" css={navLinkStyle}>
            Договір публичної оферти
          </Link>
        </Nav>
        <div css={payContainer}>
          <p css={payText}>Приймаємо до оплати:</p>
          <VisaIcon />
          <MCIcon />
        </div>
        <div css={contactContainer}>
          <h2>Як зі мною звʼязатись?</h2>
          <a href="tel: +380961488848" css={contactLink}>
            +380 96 148 88 48
          </a>
          <a href="mailto:Frau.association@gmail.com" css={contactLinkEmail}>
            Frau.association@gmail.com
          </a>
          <SocialContainer>
            <SocialLink
              href="https://www.instagram.com/frau_division"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/profile.php?id=100003581632520"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </SocialLink>
            <SocialLink
              href="https://www.tiktok.com/@frau_laska?_t=8qdqP05iYkg&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </SocialLink>
            <SocialLink
              href="viber://chat?number=+380971488848"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viber
            </SocialLink>
            <SocialLink
              href="https://t.me/frau_laska"
              target="_blank"
              rel="noopener noreferrer"
            >
              telegram
            </SocialLink>
          </SocialContainer>
        </div>
        <div css={legalInfoContainer}>
          <p css={legalInfoStyle}>
            ФОП Лотоцька Лана Сергіївна<br/>ЄДРПОУ: 3196409941
          </p>
        </div>
        <div css={copyrightContainer}>
          <p css={copyrightStyle}>
            Copyright © 2025 Frau Laska Всі права захищені
          </p>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
