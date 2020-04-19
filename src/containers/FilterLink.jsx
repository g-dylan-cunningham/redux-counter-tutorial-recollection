import { connect } from 'react-redux';
import Link from '../components/Footer/Link';
import { setVisibilityFilter } from '../redux/actions';

const mapStateToProps = state => ({
    activeFilter: state.activeFilter
});


const mapDispatchToProps = dispatch => ({
    handleLinkClick: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);
