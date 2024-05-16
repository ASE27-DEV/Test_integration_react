import React, { useContext } from 'react';
import ScreenContext from '../screenContext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box } from '@mui/material';
import { ReactComponent as FaqArrow } from '../../../assets/svg/FaqArrow.svg';

// Component for a single accordion item
const FaqAccordionItem = ({ expanded, onChange, panelId, question, answer, isMobile }) => (
  <Accordion
    expanded={expanded === panelId}
    onChange={onChange(panelId)}
    sx={{
      marginBottom: { xs: '5%', md: '2%' }
    }}
  >
    <AccordionSummary
      expandIcon={<FaqArrow />}
      aria-controls={`${panelId}d-content`}
      id={`${panelId}d-header`}
      sx={{
        backgroundColor: '#EAEDF0',
        maxWidth: '100%',
        overflow: 'hidden',
        maxHeight: '42px'
      }}
    >
      <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}>
        {question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: '#F9FAFB', maxWidth: '100%' }}>
      <Typography className={isMobile ? 'mobileTextLowWeight' : 'destopTextLowWeight'}>
        {answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
);

// Main component that uses FaqAccordionItem for each question
const FaqAccordion = ({ questions, expanded, setExpanded }) => {

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { isMobile } = useContext(ScreenContext);

  return (
    <Box>
      {questions.map((item, index) => (
        <FaqAccordionItem
          key={index}
          expanded={expanded}
          onChange={handleChange}
          panelId={`panel${index + 1}`}
          question={item.question}
          answer={item.answer}
          isMobile={isMobile}
        />
      ))}
    </Box>
  );
};

export default FaqAccordion;