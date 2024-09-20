// import './Header.scss'
import style from './Header.module.scss'

// const Header = () => {

//     return (
//         <header>
//             <p>Exo 05 - Communication</p>
//         </header>
//     );
// };

const Header = () => (
    <header className={style.header}>
        <p>Exo 05 - Communication</p>
    </header>
);

export default Header;