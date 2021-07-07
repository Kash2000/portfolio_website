import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            kashishgdewnani@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Designed by Kashish Dewnani using React.js & Next.js</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Kash2000">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kashish-dewnani-340a71177/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
