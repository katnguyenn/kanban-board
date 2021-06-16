import { connect } from "react-redux";
import Lists from "../Components/Lists";

const mapStateToProps = (state) => {
    return {
        lists: state.lists.id
    }
}

export default connect(mapStateToProps)(Lists);