import React from 'react';
import ListContainer from "../containers/ListContainer";

const Lists = ({ lists = [] }) => {
    return (
        <section className="Lists">
            {lists.map((listId) => (
                <ListContainer key={listId} listd={listId} />
            ))}
        </section>
    );
};

export default Lists;