import React from "react"
import classes from './SelectLanguage.module.css';
import { GlobeIcon } from "../../Util/svg-icons/svg-icons";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SelectLanguage:React.FC<{className: string, color: string, backgroundColor: string}> = (props) => {
    const { className } = props;
    return <div className={`${classes.selectLanguage} ${className}`} style={{color: props.color, backgroundColor: props.backgroundColor}}>
        <span className={classes.globeIconSpanLeft}><GlobeIcon className={classes.globeIcon}/></span>
        <select className={classes.selectDropdown}>
            <option value={'en-IN'}>English</option>
            <option value="hi-IN" lang="hi">हिन्दी</option>
        </select>
        <span className={classes.globeIconSpanRight}><ChevronDownIcon className={classes.globeIcon}/></span>
    </div>
};

export default SelectLanguage;