import React from 'react';
import './UniversalButton.scss'; // Assuming you have styles defined here


const UniversalButton = ({ type = 'button', size, color, onClick, children }) => {
    return (
        <button className={`universal-button ${size} ${color}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default UniversalButton;
/*
How to use: instead [] place your params or functions
const [count,setCount] = useState(0)

<UniversalButton size="[size_name]" color="[color_name]" onClick={() =>[your_function]}>
        [Button Text]
</UniversalButton>


example
const [count, setCount] = useState(0)
<UniversalButton size="large" color="primary" onClick={() => setCount((count) => count+1)}>
         count {count}
        </UniversalButton>

*/