import { createContext, useState } from 'react';
import horoscopesObj from '../data/horoscopes';

export const HoroscopeContext = createContext();

const HoroscopeProvider = props => {
    const [currentSign, setCurrentSign] = useState('Pisces');
    const sign = horoscopesObj[currentSign];
    console.log(sign);
    return (
        <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
            {props.children}
        </HoroscopeContext.Provider>
    );
};

export default HoroscopeProvider;