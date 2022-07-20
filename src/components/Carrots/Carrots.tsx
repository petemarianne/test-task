import React, { useState, useEffect } from 'react';
import './Carrots.scss';
import { Carrot } from '../Carrot/Carrot';
import { useDispatch, useSelector } from 'react-redux';
import { random, randomNext } from '../../utils';
import { end } from "../../redux/actions/endAction";

export const Carrots: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const start = useSelector<any, any>(state => state.start);

    const carrots = [];
    for (let i = 0; i < 10; i++) {
        carrots.push({
            key: `key${i}`,
            hidden: 'hidden',
            angle: 0
        })
    }

    const [cur, setCur] = useState<number>(-1);
    const [carrotsInfo, setCarrotsInfo] = useState({carrots, index: 0});

    useEffect(() => {
        if (start && cur === -1) setCur(start);
        if ((cur !== -1 || start === 0) && carrotsInfo.index < 11) {
            let next = 0;
            const first = start === 0 ? 0 : Math.trunc(cur / 10);
            const last = start === 0 ? 0 : cur % 10;
            switch (first) {
                case 0:
                    switch (last) {
                        case 0: next += randomNext(random(0,2),1); break;
                        case 1: next += randomNext(random(0,3),1); break;
                        case 2: next += randomNext(random(0,2),2); break;
                    }
                    break;
                case 1:
                    switch (last) {
                        case 0: next += randomNext(random(0,3),0); break;
                        case 1: next += randomNext(random(0,4),0); break;
                        case 2: next += randomNext(random(0,3),2); break;
                    }
                    break;
                case 2:
                    switch (last) {
                        case 0: next += randomNext(random(0,2),0); break;
                        case 1: next += randomNext(random(0,3),3); break;
                        case 2: next += randomNext(random(0,2),3); break;
                    }
                    break;
            }
            const newCarrots = [...carrotsInfo.carrots];
            if (carrotsInfo.index !== 10) {
                let angle;
                switch (next) {
                    case 10: angle = 90; break;
                    case -1: angle = 180; break;
                    case -10: angle = 270; break;
                    default: angle = 0;
                }
                newCarrots[carrotsInfo.index].hidden = '';
                newCarrots[carrotsInfo.index].angle = angle;
            }
            setCarrotsInfo(prevState => ({carrots: newCarrots, index: prevState.index + 1}));
            setTimeout(() => setCur(prevState => prevState + next), 1000);
        }
        if (carrotsInfo.index === 10) dispatch(end(cur));
    }, [cur, start])

    return (
        <div className='carrots'>
            {carrots.map((carrot, index) => <Carrot key={carrot.key} hidden={carrotsInfo.carrots[index].hidden} angle={carrotsInfo.carrots[index].angle}/>)}
        </div>
    );
}