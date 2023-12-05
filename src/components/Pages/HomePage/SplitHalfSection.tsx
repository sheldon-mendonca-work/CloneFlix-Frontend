import React from 'react';
import classes from './SplitHalfSection.module.css';
import { Container } from '@chakra-ui/react';

const SplitHalfSection:React.FC<{title: string, content: string, image: JSX.Element, order:number}> = (props) => {

    const fDir = (props.order === 1) ? 'row' : 'row-reverse';

    return <section className={classes.splitHalfSection}>
        <Container display={'flex'} gap={'10'} maxW={'container.xl'} flexDirection={{base: 'column', lg: fDir}}>
            <div className={`${classes.splitHalfDiv} ${classes.splitHalfContentDiv}`}>
                <p className={classes.textTitle}>{props.title}</p>
                <p className={classes.splitHalfContent}>{props.content}</p>
            </div>
            <div className={`${classes.splitHalfDiv} ${classes.splitHalfImgDiv}`}>
                {props.image}
            </div>
        </Container>
</section>
};

export default SplitHalfSection;