import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>KD</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        {/* <Link href="#experiences">
          <NavLink>Experiences</NavLink>
        </Link> */}
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Kash2000" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/kashish-dewnani-340a71177/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:kashishgdewnani@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
