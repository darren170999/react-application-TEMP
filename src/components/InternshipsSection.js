import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const internships = [
  {
    title: "JP Morgan Chase",
    description:
      "Software Engineer Intern",
    getImageSrc: () => require("../images/image1.jpg"),
  },
  {
    title: "VISA",
    description:
      "Software Engineer Intern",
    getImageSrc: () => require("../images/image2.jpg"),
  },
  {
    title: "DSTA",
    description:
      "Software Engineer Intern",
    getImageSrc: () => require("../images/image3.jpg"),
  },
  {
    title: "Discovermarket",
    description:
      "Software Engineer Intern",
    getImageSrc: () => require("../images/image4.jpg"),
  },
];

const InternshipsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#F7B600"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="internships-section" color="#1a1f71">
        Featured Internships
      </Heading>
      <Box
        color={"#1a1f71"}
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {internships.map((internship) => (
          <Card
            key={internship.title}
            title={internship.title}
            description={internship.description}
            imageSrc={internship.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default InternshipsSection;
