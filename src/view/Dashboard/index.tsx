import React from 'react';
import style from './index.module.scss';

export default function Dashboard() {
    return (
        <div className={style._}>
            <h2>Dashboard</h2>
            <img alt='barcode' src={require('../../image/Empty.png')}/>
        </div>
    );
}
