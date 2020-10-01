import React, { useState } from 'react'

const SectorItem = ({ sector, number }) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false)
    const [isBlock, setBlok] = useState(false)

    const toggleToolTip = (newValue) => {
        setBlok(newValue)
        setDirectionSwitched(number % 3 === 0);
        setToolTipShowing(newValue);              
    };
   
    const openBlock = () => {
        isBlock ? setBlok(false): setBlok(true)
    }
    
    
    return (
        <div
            className="sectors-list-item"
            onMouseEnter={() => toggleToolTip(true)}
            onMouseLeave={() => toggleToolTip(false)}
            onClick={openBlock}          
            style={{
                background: `url(${sector.imgUrl}) center no-repeat`,
                backgroundSize: 'cover'
            }}>            
            {
                <p className={`sectors-list-item-name ${isToolTipShowing
                    ? "sectors-list-item-name-switched"
                    : ""
                    }`}>
                    {sector.name}
                </p>
            }
            {
                isToolTipShowing && <p className={`sectors-list-item-tooltip ${isDirectionSwitched
                    ? "sectors-list-item-tooltip-switched"
                    : ""
                    }`}>
                    {sector.description}                    
                </p>
            }
            {
                isBlock && <div className="sectors-block" >                    
                    <div className="sectors-block-btn" onClick={openBlock}></div>
                    <div className="sector-block-title">
                    {sector.name}
                    </div>
                    <p className="sectors-block-text">{sector.description}</p>
                </div>
            }
        </div >
    );
};

export default SectorItem;
