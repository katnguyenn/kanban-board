import { cards as defaultCards } from "../normalize-state";

const cardsReducer = (cards = defaultCards, action) => {
    return cards;
};

export default cardsReducer;