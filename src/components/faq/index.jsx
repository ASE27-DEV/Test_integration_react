import React, { useContext } from 'react';
import './Faq.css';
import ScreenContext from '../reusableComponent/screenContext';
import { Box, Grid, Typography } from '@mui/material';
import SeparationLine from '../../assets/svg/SeparationLine';
import FaqAccordion from '../reusableComponent/questionCard';

const faqQuestions = [
    { question: "Comment construire une maison ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia. " },
    { question: "Quels sont les différents tarifs ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    { question: "Est-il possible de rajouter une option dans une offre ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    { question: "Quand pourrai-je passer commande ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    { question: "Quels sont les délais de livraison ?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, repellat id autem facilis officia totam iusto, quia cumque voluptatibus quam voluptate nesciunt numquam voluptatem? Iusto  ipsa soluta maiores repellat totam harum corporis quis! Dolorem repudiandae, accusantium distinctio explicabo obcaecati amet? Dolorum ratione maxime fugiat quod laboriosam deserunt, minima ab esse quam, iusto ex et officia." },
    // Add other questions here...
];

const Faq = () => {

    const [expanded, setExpanded] = React.useState(false); // Used to display the answer of the question
    const { isMobile } = useContext(ScreenContext)

    return (
        <>
            <Box className='faq_content_box'>
                <Grid
                    container
                    direction="row"
                    sx={{
                        margin: 'auto',
                        justifyContent: { xs: 'center', lg: 'flex-start' }
                    }}
                >
                    <Grid
                        container
                        item
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{
                            maxWidth: { xs: '100%', lg: '90%' },
                            position: { xs: 'relative', lg: 'absolute' },
                            alignItems: { xs: 'center', lg: 'flex-start' },
                            marginBottom: '5%',
                        }}

                    >
                        <Box className='faq_title'>
                            <Typography className={isMobile ? 'mobileTextMediumSize' : 'destopTextMediumSize'}>
                                Foire aux questions
                            </Typography>
                        </Box>

                        <Box className='faq_separationLine_box'>
                            <SeparationLine width={400} />
                        </Box>

                        <Box className='faq_text'>
                            <Typography className={isMobile ? 'mobileTextBigSize' : 'destopTextBigSize'}>
                                Questions fréquentes
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        container
                        item
                        direction="column"
                        alignItems="flex-end"
                    >
                        <Box sx={{ maxWidth: { xs: '100%', lg: '60%' } }}>
                            <FaqAccordion
                                questions={faqQuestions}
                                expanded={expanded}
                                setExpanded={setExpanded}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default Faq;