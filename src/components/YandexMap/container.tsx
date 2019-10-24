import { connect } from 'react-redux';
import YandexMap from './index';


function mapStateToProps(state: { mapEndpoint: string[]; }) {
    return {
        mapEndpoint: state.mapEndpoint,
    };
};


export default connect(mapStateToProps)(YandexMap);