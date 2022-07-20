import React from 'react';
import './Cells.scss';
import { Cell } from '../Cell/Cell';
import { useSelector } from 'react-redux';

export const Cells: React.FC = (): JSX.Element => {
    const cell = useSelector<any,any>(state => state.start);
    const end = useSelector<any,any>(state => state.end);

    const cells = [[<Cell key='cell0' hidden={cell === 0 ? '' : 'hidden'}/>,<Cell key='cell1' hidden={cell === 1 ? '' : 'hidden'}/>,<Cell key='cell2' hidden={cell === 2 ? '' : 'hidden'}/>],
                  [<Cell key='cell10' hidden={cell === 10 ? '' : 'hidden'}/>,<Cell key='cell11' hidden={cell === 11 ? '' : 'hidden'}/>,<Cell key='cell12' hidden={cell === 12 ? '' : 'hidden'}/>],
                  [<Cell key='cell20' hidden={cell === 20 ? '' : 'hidden'}/>,<Cell key='cell21' hidden={cell === 21 ? '' : 'hidden'}/>,<Cell key='cell022' hidden={cell === 22 ? '' : 'hidden'}/>]];

    return (
        <div className='cells'>
             {cells.map(item => item.map(cell => cell))}
        </div>
    );
}
