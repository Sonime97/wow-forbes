
import {connect} from 'react-redux'
import ProfileComponent from '../components/Profile'
const mapStateToProps = state => {
    return {
        forbes: state.forbes
    }
}
const Profile = connect(
mapStateToProps)
(ProfileComponent);
export default Profile  