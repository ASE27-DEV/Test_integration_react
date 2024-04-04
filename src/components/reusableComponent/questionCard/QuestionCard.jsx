import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as FaqArrow } from '../../../assets/svg/FaqArrow.svg';

// Composant pour un seul item d'accordéon
const FaqAccordionItem = ({ expanded, onChange, panelId, question, answer }) => (
  <Accordion expanded={expanded === panelId} onChange={onChange(panelId)}>
    <AccordionSummary expandIcon={<FaqArrow />} aria-controls={`${panelId}d-content`} id={`${panelId}d-header`} sx={{backgroundColor:'#EAEDF0', marginBottom:'1%', maxWidth:'100%'}}>
      <Typography component="h3" variant="subtitle2">{question}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{backgroundColor:'#F9FAFB', marginTop:'-1%',border: '1px solid red', maxWidth:'100%'}}>
      <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '100%' } }}>
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