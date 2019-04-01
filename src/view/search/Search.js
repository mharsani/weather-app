import React, {Fragment} from 'react';

const Search = ({handleSubmite}) => (
    <Fragment>
        <form onSubmit={handleSubmite}>
            <input type="text" name="inputSearchCity"/>
        </form>
    </Fragment>
);

export default Search;