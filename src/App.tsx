import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Map from './components/YandexMap/container';


class App extends Component {
    state = {
        centerMap: null,
    };

    render() {
        const { mapEndpoint }: any = this.props;
        const { centerMap }: any = this.state;

        const mapConfig: { startZoom?: number; centerMap?: number[]; } = {};
        mapConfig.startZoom = 15;

        if (centerMap) {
            mapConfig.centerMap = centerMap;
            mapConfig.startZoom = 25;
        };

        return (
            <Grid container>
                <Grid item xs={ 8 }>
                    <Map { ...mapConfig }/>
                </Grid>
                <Grid item xs={ 4 }>
                    {
                        mapEndpoint.map((item: { coords: string; name: string; }, index: number) => {
                            const { coords, name } = item;
                            return (
                                <Button 
                                    key={ index }
                                    variant="contained" 
                                    onClick={ 
                                        () => {
                                            this.setState({ 
                                                centerMap: coords.split(',').map((item) => +item),
                                            });
                                        }
                                    }
                                >
                                  { name }
                                </Button>
                            )
                        })
                    }
                    
                </Grid>
            </Grid>
        );
    }
}


function mapStateToProps(state: { mapEndpoint: string[]; }) {
    return {
        mapEndpoint: state.mapEndpoint,
    };
};


export default connect(mapStateToProps)(App);