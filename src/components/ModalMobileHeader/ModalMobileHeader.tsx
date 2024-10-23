import React from "react";

import {
  contactContainer,
  contactLink,
  Container,
  SocialContainer,
  SocialLink,
  Overlay,
  Wrapper,
  NavContainer,
  ImageContainer,
  image,
} from "./ModalMobileHeader.styled";
import { Nav, NavWrapper } from "./ModalMobileHeader.styled";

import FrauLaska from "@assets/images/fotoForModal.png";

interface IModalHeader {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMobileHeader: React.FC<IModalHeader> = ({ setIsOpen }) => {
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Overlay />
      <Wrapper>
        <Container>
          <NavContainer>
            <NavWrapper>
              <Nav
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Магазин
              </Nav>

              <Nav
                to={"https://fl.fraulaska.com/?wpm-page=start"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseClick}
              >
                Навчання
              </Nav>
              <Nav
                to={"/privacy-policy"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Договір публичної оферти
              </Nav>
              <Nav
                to={"/payment-delivery"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Доставка та оплата
              </Nav>
            </NavWrapper>
            <div css={contactContainer}>
              <a
                href="tel: +380(96)148-88-48"
                css={contactLink}
                onClick={handleCloseClick}
              >
                +380(96)148-88-48
              </a>
              <a
                href="mailto:Frau.association@gmail.com"
                css={contactLink}
                onClick={handleCloseClick}
              >
                Frau.association@gmail.com
              </a>
              <SocialContainer>
                <SocialLink
                  href="https://www.instagram.com/_frau_laska_?igsh=dnBibGR1OGY1bmlt"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseClick}
                >
                  Instagram
                </SocialLink>
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=100003581632520"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseClick}
                >
                  Facebook
                </SocialLink>
                <SocialLink
                  href="https://www.tiktok.com/@frau_laska?_t=8qdqP05iYkg&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseClick}
                >
                  TikTok
                </SocialLink>
                <SocialLink
                  href="viber://chat?number=+380971488848"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseClick}
                >
                  Viber
                </SocialLink>
                <SocialLink
                  href="https://t.me/frau_laska"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseClick}
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
      </Wrapper>
    </>
  );
};

export default ModalMobileHeader;
