import './Header.css';
import MainText from '../components/MainText';

function Header(){
    return(
        <MainText 
        text = 'Not Clicked' 
        onBtnClick 
        />
    )
}

export default Header;