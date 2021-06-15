import { useState } from "react";
import Footer from "../Footer/Footer";


function MainText ({
    text = 'Not Clicked' ,
    onBtnClick,
    
}){
    
    const [closed , setClosed ] = useState(true);
    function Hook(){
        setClosed(!closed)
    }
    
    return(
        <div className='Header'>
            <button className='Header_Btn' onClick ={Hook}>
                { !closed ? 'Clecked' : text }
            </button>
            <div className = {`lol ${closed ? ' ' : 'show'}`}>
                <ul className = 'list'>
                    <li>Text1</li>
                    <li>Text2</li>
                    <li>Text3</li>
                    <li>Text4</li>
                    <li>Text5</li>
                </ul>
               
            </div>
            <Footer text = { !closed ? 'Footer' : ' ' } />
        </div>

    )
}
export default MainText;
