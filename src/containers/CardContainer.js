import { connect } from "react-redux";
import Card from "../Components/Card";

const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cards.entities[ownProps.cardId]
    }
}

export default connect(mapStateToProps)(Card);