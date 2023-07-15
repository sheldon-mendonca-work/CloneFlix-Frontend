import React from 'react';
import classes from './HomePage.module.css';

const SplitHalfSection:React.FC<{title: string, content: string, image: JSX.Element, order:number}> = (props) => {
    return <section className={classes.splitHalfSection}>
        <div className={`${classes.splitHalfDiv} ${classes.splitHalfContentDiv}`}>
            <p className={classes.textTitle}>{props.title}</p>
            <p>{props.content}</p>
        </div>
        <div className={`${classes.splitHalfDiv} ${classes.splitHalfImgDiv}`} style={{order: props.order}}>
            {props.image}
        </div>
</section>
};

export default SplitHalfSection;