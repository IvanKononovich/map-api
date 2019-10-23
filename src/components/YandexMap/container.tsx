import { connect } from 'react-redux';
import YandexMap from './index';


function mapStateToProps(state: { mapCoordinates: string[]; }) {
    return {
        mapCoordinates: state.mapCoordinates,
    };
};


export default connect(mapStateToProps)(YandexMap);