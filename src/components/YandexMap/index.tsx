import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


interface YandexMapPropsType {
    mapEndpoint: [{ coords: string, name: string }]; 
    centerMap?: number[]
    startZoom?: number; 
}

interface YandexMapStateType {
    mapEndpoint: [{ coords: string, name: string }]; 
    centerMap: number[]
    startZoom?: number; 
}

const YandexMap: any = class extends Component{
    constructor(props: YandexMapPropsType ) {
        super(props);

        this.state = {
            mapEndpoint: props.mapEndpoint,
            centerMap: props.centerMap || [],
            startZoom: props.startZoom || 13,
        };

    }

    static getDerivedStateFromProps(props: YandexMapPropsType, state: YandexMapStateType) {
        if (props.centerMap !== state.centerMap) {
            let centerMap: number[];

            if (props.centerMap) {
                centerMap = props.centerMap;
            } else {
                centerMap = props.mapEndpoint[0].coords.split(',').map((item) => +item);
            }

            state.centerMap = centerMap;

            return state;
        };

        return null;
    }
 
    render() {
        const { mapEndpoint, startZoom, centerMap, }: any = this.state;

        return (
            <YMaps>
                <Map 
                    className="yandex-map"
                    state={{ center: centerMap, zoom: startZoom }}
                >
                {
                    mapEndpoint.map((item: { coords: string; name: string; }, index: number) => {
                        const coords = item.coords.split(',').map((item) => +item);
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