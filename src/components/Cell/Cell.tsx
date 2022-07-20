import React from 'react';
import './Cell.scss';
// @ts-ignore
import bunny from '../../assets/images/bunny.png';

interface CellProps {
    hidden: string
}

export const Cell: React.FC<CellProps> = (props): JSX.Element => {
    return (
        <div className='cell'>
            <img className={`bunny ${props.hidden}`} src={bunny} alt='bunny' />
        </div>
    );
}
