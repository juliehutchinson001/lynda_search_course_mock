import React from 'react';

const NewCategories = ({ newPlaylist, handleCatDescription, handleCatName, handleFormSubmit }) => (

    <section className={ newPlaylist } >
        <form onSubmit={ handleFormSubmit } >
            <label>Playlist name
                <input name='category-name' type='text' onChange={ handleCatName } required />
            </label>
            <label>Description
                <input name='category-description' type='text' onChange={ handleCatDescription } />
            </label>
            <input type='submit' value='Create' />
        </form>
    </section>

);

export default NewCategories;