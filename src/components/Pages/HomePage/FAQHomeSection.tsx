import React from 'react';
import classes from './HomePage.module.css';
import RegisterEmailHome from './RegisterEmailHome';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Center,
  } from '@chakra-ui/react'

const FAQItems = [
    {
        question: "What is Netflix?",
        answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
    },
    {
        question: "How much does Netflix cost?",
        answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`
    },
    {
        question: "Where can I watch?",
        answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    },
    {
        question: "How do I cancel?",
        answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.`
    },
    {
        question: "What can I watch on Netflix?",
        answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
    },
    {
        question: "Is Netflix good for kids?",
        answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
    },
]

const FAQHomeSection = () => {

    return <section className={classes.faqHomeSection}>
        <Container maxW={'container.xl'}>
            <Center className={classes.textTitle} mb={'5'}>Frequently Asked Questions</Center>
            <Accordion allowToggle>
                { FAQItems.map(faq => (
                <AccordionItem key={faq.question}   mb={'2'} border={'none'}>
                    <AccordionButton p={'4'} bg={'#2d2d2d'} _hover={{bg:'#4e4e4e'}}>
                        <Box as='span' flex='1' textAlign='left' fontSize={'2xl'}>
                            {faq.question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel fontSize={'2xl'} p={'4'} mt={'1'} bg={'#2d2d2d'}>
                    {faq.answer}
                    </AccordionPanel>
                </AccordionItem>))}
            </Accordion>
            <RegisterEmailHome />
        </Container>
    </section>
}

export default FAQHomeSection;