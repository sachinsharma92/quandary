import React from 'react';
import './index.scss';
import {Button} from '../../../../components/Button';

export const Opinion = ({data, onSelectOpinion, selected = [], itemIndex}) => {
    return (
        <div className={'opinion-selector'}>
            <div>
                <img src={data.icon} />
                <span className={'label'}>{data.label}</span>
            </div>
            <p className={'opinion'}>{data.opinion}</p>
            <div className={'button-container'}>
                <Button
                    className={selected[data.id] === 'agree' ? 'active' : ''}
                    onClick={() => onSelectOpinion(data.id, 'agree')}
                    showArrow={false}
                    label={'Agree'}
                />
                <Button
                    className={selected[data.id] === 'disagree' ? 'active' : ''}
                    onClick={() => onSelectOpinion(data.id, 'disagree')}
                    showArrow={false}
                    label={'Disagree'}
                />
            </div>
        </div>
    );
};
