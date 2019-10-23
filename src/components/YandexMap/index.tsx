import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


const YandexMap: any = class extends Component{
    constructor(props: { mapCoordinates: [{ coodrs: string, name: string }] }) {
        super(props);
        this.state = {
            mapCoordinates: props.mapCoordinates,
            center: props.mapCoordinates[0].coodrs.split(','),
        };
    }
 
    render() {
        const { center, mapCoordinates, }: any = this.state;


        return (
            <YMaps>
                <Map 
                    className="yandex-map"
                    defaultState={{ center, zoom: 9 }}
                >
                {
                    mapCoordinates.map((item: { coodrs: string; name: string; }, index: number) => {
                        const coords = item.coodrs.split(',').map((item) => +item);
                        const { name } = item;

                        return (
                            <Placemark 
                                key={ index }
                                geometry={ coords } 
                                properties={{ iconCaption: name }}
                            />
                        );
                    })
                }
                </Map>
            </YMaps>
        );
    }
}

export default YandexMap; 