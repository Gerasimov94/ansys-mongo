import {connect} from 'react-redux'
import Analysis from '../components/Analysis';
import {getFriqData} from '../selectors/selectors';
import {addDataRequest, getDataRequest} from '../actions/DataActions'

const mapStateToProps = (state, ownProps) => ({
    friqData: getFriqData(state),
    ...ownProps,
});

export default connect(mapStateToProps, {addDataRequest, getDataRequest})(Analysis);