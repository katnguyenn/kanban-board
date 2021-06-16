import { connect } from "react-redux";
import List from "../Components/List";

// takes a second argument: entire state tree and ownProps which 
// are properties passed to the container when you use it
// ex: id of the list that we're looking for
const mapStateToProps = (state, ownProps) => {
    return { list: state.lists.entities[ownProps.listId] }
};

export default connect(mapStateToProps)(List);