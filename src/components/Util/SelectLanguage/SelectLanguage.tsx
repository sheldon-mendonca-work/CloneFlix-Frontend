import React from "react"
import classes from './SelectLanguage.module.css';
import { GlobeIcon } from "../svg-icons/svg-icons";

const SelectLanguage:React.FC<{type: string}> = (props) => {
    return <div className={classes.selectLanguage}>
        <span className={classes.globeIconSpan}><GlobeIcon className={classes.globeIcon}/></span>
        <select className={classes.selectDropdown}>
            <option value={'en-IN'}>English</option>
            <option value="hi-IN" lang="hi">हिन्दी</option>
        </select>
    </div>
};

export default SelectLanguage;