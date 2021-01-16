import {fetchForbes} from '../actions/actions_profile';
import {connect} from 'react-redux';
import AppComponent from '../components/App'; 
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchForbes : () => {dispatch(fetchForbes())
        }
    }
}
const App = connect(
false, mapDispatchToProps)
(AppComponent);
export default App  