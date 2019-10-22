import { connect } from 'react-redux';
import Header from './index';


function mapStateToProps(state: { title: string; }) {
    return {
        title: state.title,
    };
};


export default connect(mapStateToProps)(Header);
