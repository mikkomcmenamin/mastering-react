import React from 'react';

const ListGroup = props => {
    const {genres, onGenreChange} = props;

    return (
      <div className="list-group">
          {genres.map(genre => (
            <button key={genre._id} type="button" className="list-group-item list-group-item-action active" onClick={()=>onGenreChange}>
                {genre.name}
            </button>
            )
          )}
          <button type="button" className="list-group-item list-group-item-action active" onClick={()=>onGenreChange}>
              Cras justo odio
          </button>
      </div>
    );
};

export default ListGroup;