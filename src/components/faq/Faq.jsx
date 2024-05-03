import React from 'react';
import './Faq.css';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
import SeparationLine from '../../assets/svg/SeparationLine';
import FaqAccordion from '../reusableComponent/questionCard/QuestionCard';

const faqQuestions = [
    { question: "Comment construire une maison ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia. " },
    { question: "Quels sont les différents tarifs ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    { question: "Est-il possible de rajouter une option dans une offre ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    { question: "Quand pourrai-je passer commande ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    { question: "Quels sont les délais de livraison ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    // Ajoutez les autres questions ici...
  ];

const Faq = () => {

    const [expanded, setExpanded] = React.useState(false);

    return (
        <>
            <Container className='faq_content_box'>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    sx={{ margin:'auto'}}
                >
                    <Grid 
                        container
                        item 
                        direction="column" 
                        justifyContent="flex-start" 
                        alignItems="flex-start"
                        sx={{ maxWidth:'90%', position:{xs:'relative', md:'absolute'}}}

                    >
                        <div className='faq_title'>
                            <Typography className="destopTextMediumSize">
                                Foire aux questions
                            </Typography>
                        </div>

                        <div className=''>
                            <SeparationLine width={400}/>
                        </div>

                        <div className='faq_text'>
                            <Typography className="destopTextBigSize">
                                Questions fréquentes
                            </Typography>
                        </div>
                    </Grid>

                    <Grid 
                        container
                        item
                        direction="column" 

                        alignItems="flex-end"
                    >
                        <Box sx={{ maxWidth:{xs:'100%', lg:'60%'}}}>
                            <FaqAccordion questions={faqQuestions} expanded={expanded} setExpanded={setExpanded} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default Faq;