import React from 'react';
import './App.scss';
import { Carrots, Cells } from './components';
import { Button } from '@mui/material';
import './styles/buttons.scss';
import { useDispatch } from 'react-redux';
import { start } from './redux/actions/startAction';
import { random } from './utils';

const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const sec = new Date().getSeconds() / 2;
        let number = random(0,3);
        if (sec < 20 && sec >= 10) {
            number += 10;
        }
        if (sec >= 20) {
            number += 20;
        }
        dispatch(start(number));
    }

    return (
        <div className='App'>
            <div className='title'>ЛАБИРИНТ</div>
            <Cells />
            <div className='button-wrapper'>
                <Button className='start-button' variant='contained' color='primary' onClick={handleClick}>Начать</Button>
            </div>
            <Carrots />
        </div>
    );
}

export default App;
