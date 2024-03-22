import React from 'react';
import Parent from './Parent/Parent';
import style from './Tree.module.css';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import { WithTheme } from '../HOC';

const { THEMES } = CONSTANTS;


const Tree = (props) => {
    const classNames = cx(style.container, {
        [style.lightTheme]: props.theme === THEMES.LIGHT,
        [style.darkTheme]: props.theme === THEMES.DARK
    });

    return (
        <div className={classNames}>
            Tree
            <Parent />
        </div>
    )
}

// const TreeWithTheme = (props) => {
//     return (
//         <ThemeContext.Consumer>
//             {({theme, setTheme}) => {
//                 return <Tree theme={theme} setTheme={setTheme} />
//             }}
//         </ThemeContext.Consumer>
//     )
// }



const TreeWithTheme = WithTheme(Tree);

export default TreeWithTheme;