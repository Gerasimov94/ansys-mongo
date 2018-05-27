import {connect} from 'react-redux'
import DataTableRow from '../components/DataTableRow';
import {removeDataRequest} from '../actions/DataActions';

const mapStateToProps = (state, ownProps) => ({...ownProps})

export default connect(mapStateToProps, {removeDataRequest})(DataTableRow);