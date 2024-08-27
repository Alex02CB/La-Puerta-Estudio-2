import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import '/src/styles.scss'

const RelojAnalogico = () => {
    const [time, setTime] = useState(moment.tz("Europe/Madrid"));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(moment.tz("Europe/Madrid"));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Cálculo de los ángulos de rotación para cada manecilla
    const secondDegree = (time.seconds() / 60) * 360;
    const minuteDegree = (time.minutes() / 60) * 360 + (time.seconds() / 60) * 6;
    const hourDegree = ((time.hours() % 12) / 12) * 360 + (time.minutes() / 60) * 30;

    return (
        <div className="reloj-analogico">
            <div className="esfera">
                <div className="subesfera">
                    <div className="manecilla hora" style={{ transform: `rotate(${hourDegree}deg)` }} />
                    <div className="manecilla minuto" style={{ transform: `rotate(${minuteDegree}deg)` }} />
                    <div className="manecilla segundo" style={{ transform: `rotate(${secondDegree}deg)` }} />
                    <div className="centro" />
                </div>
            </div>
        </div>
    );
};

export default RelojAnalogico;

