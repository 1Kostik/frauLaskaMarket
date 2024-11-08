import React from "react";

import {
  contactContainer,
  contactLink,
  Container,
  SocialContainer,
  SocialLink,
  Overlay,
  NavContainer,
  ImageContainer,
  image,
  wrapperStyle,
} from "./ModalMobileHeader.styled";
import { Nav, NavWrapper } from "./ModalMobileHeader.styled";

import FrauLaska from "@assets/images/fotoForModal.png";

interface IModalHeader {
  setIsOpen: () => void;
  isBurgerHide: boolean;
}

const ModalMobileHeader: React.FC<IModalHeader> = ({
  setIsOpen,
  isBurgerHide,
}) => {
  return (
    <>
      <Overlay />
      <div css={wrapperStyle(isBurgerHide)}>
        <Container>
          <NavContainer>
            <NavWrapper>
              <Nav
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={setIsOpen}
              >
                Магазин
              </Nav>

              <Nav
                to={"/privacy-policy"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={setIsOpen}
              >
                Договір публичної оферти
              </Nav>
              <Nav
                to={"/payment-delivery"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={setIsOpen}
              >
                Доставка та оплата
              </Nav>
            </NavWrapper>
            <div css={contactContainer}>
              <a
                href="tel: +380(96)148-88-48"
                css={contactLink}
                onClick={setIsOpen}
              >
                +380(96)148-88-48
              </a>
              <a
                href="mailto:Frau.association@gmail.com"
                css={contactLink}
                onClick={setIsOpen}
              >
                Frau.association@gmail.com
              </a>
              <SocialContainer>
                <SocialLink
                  href="https://www.instagram.com/_frau_laska_?igsh=dnBibGR1OGY1bmlt"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={setIsOpen}
                >
                  Instagram
                </SocialLink>
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=100003581632520"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={setIsOpen}
                >
                  Facebook
                </SocialLink>
                <SocialLink
                  href="https://www.tiktok.com/@frau_laska?_t=8qdqP05iYkg&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={setIsOpen}
                >
                  TikTok
                </SocialLink>
                <SocialLink
                  href="viber://chat?number=+380971488848"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={setIsOpen}
                >
                  Viber
                </SocialLink>
                <SocialLink
                  href="https://t.me/frau_laska"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={setIsOpen}
                >
                  telegram
                </SocialLink>
              </SocialContainer>
            </div>
          </NavContainer>
          <ImageContainer>
            <img src={FrauLaska} alt="FrauLaska" css={image} />
          </ImageContainer>
        </Container>
      </div>
    </>
  );
};

export default ModalMobileHeader;
