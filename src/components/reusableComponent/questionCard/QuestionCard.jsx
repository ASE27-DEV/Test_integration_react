import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as FaqArrow } from '../../../assets/svg/FaqArrow.svg';

// Composant pour un seul item d'accordéon
const FaqAccordionItem = ({ expanded, onChange, panelId, question, answer }) => (
  <Accordion expanded={expanded === panelId} onChange={onChange(panelId)} sx={{marginBottom:'2%'}}>
    <AccordionSummary expandIcon={<FaqArrow />} aria-controls={`${panelId}d-content`} id={`${panelId}d-header`} sx={{backgroundColor:'#EAEDF0', maxWidth:'100%', overflow:'hidden'}}>
      <Typography className='textSpeechMediumSize'>{question}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{backgroundColor:'#F9FAFB', maxWidth:'100%'}}>
      <Typography className='textSpeechLowWeight' sx={{ maxWidth: { sm: '100%', md: '100%' } }}>
        {answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
);

// Composant principal qui utilise FaqAccordionItem pour chaque question
const FaqAccordion = ({ questions, expanded, setExpanded }) => {
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {questions.map((item, index) => (
        <FaqAccordionItem
          key={index}
          expanded={expanded}
          onChange={handleChange}
          panelId={`panel${index + 1}`}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;