import React from 'react';
import './Faq.css';
import { Box, Grid, Button, Container } from '@mui/material';
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
            <Container margin={1} spacing={0} maxWidth="100%">
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
                        <div>
                            <h2>Foire aux questions</h2>
                        </div>

                        <div>
                            <SeparationLine width={450}/>
                        </div>

                        <div>
                            <h2>Questions fréquentes</h2>
                        </div>
                    </Grid>
                    <Grid 
                        container
                        item
                        direction="column" 
                        justifyContent="flex-start" 
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