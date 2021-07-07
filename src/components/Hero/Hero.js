import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I am Kashish Dewnani
        </SectionTitle>
        <SectionText>
          I am a senior at the University of Rochester majoring in Computer
          Science and Business interested in Software Development.
        </SectionText>
        <Button onClick={() => (window.location = "#about")}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
