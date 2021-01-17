import { Planet } from 'react-planet';
import * as FaIcons from 'react-icons/fa';
export function MyPlanet() {
    return (
        <Planet
        dragablePlanet
        dragRadiusPlanet={20}
        bounce
        centerContent={
            <div
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: '50%',
                    backgroundColor: '#6f03fc',
                    alignItems: 'center',
                    color : '#ffffff'
                }}
            >
                <text style={{position: 'absolute', left: '33px', top:'37px'}}>Hello</text>
                
            </div>
        }
        open
        autoClose
    >
        <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundColor: '#9257ad',
            }}
        />
        <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundColor: '#9257ad',
            }}
        />
        <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundColor: '#9257ad',
            }}
        />
        <div
            style={{
                height: 70,
                width: 70,
                borderRadius: '50%',
                backgroundColor: '#9257ad',
            }}
        />
        </Planet>
    );
}