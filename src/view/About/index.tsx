import React from 'react';
import style from './index.module.scss';
import Airplane from 'svg/airplane.svg';
import AlarmClock from 'svg/alarmClock.svg';
import Ballon from 'svg/ballon.svg';
import Cake from 'svg/cake.svg';
import Food from 'svg/food.svg';
import Helicopter from 'svg/helicopter.svg';
import Laps from 'svg/laps.svg';

export default function About() {
    return (
        <div className={style._}>
            <h2>About</h2>
            <div className={style.inner}>
                <Airplane/>
                <Ballon/>
                <AlarmClock/>
                <Cake/>
                <Food/>
                <Helicopter/>
                <Laps/>
            </div>
        </div>
    );
}
