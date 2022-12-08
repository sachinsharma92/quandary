import React from 'react';
import './index.scss';
import {Button} from '../../../../components/Button';

export const Decision = ({data, onSelectOpinion, selected = [], itemIndex}) => {
    const isSelected = selected === data.id;
    return (
        <div className={'decision-selector'}>
            <div>
                <img src={data.icon} />
                <span className={'label'}>{data.label}</span>
            </div>
            <p className={'decision'}>{data.decision}</p>
            <Button
                className={isSelected ? 'active' : ''}
                onClick={() => onSelectOpinion(data.id, data.id)}
                showArrow={false}
                label={isSelected ? 'Selected' : 'Select this decision'}
            />
        </div>
    );
};
