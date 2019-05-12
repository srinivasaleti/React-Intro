import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './styles.css';

class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };

  render() {
    return (
      <div className='movies-section'>
        {this.getMovie(
          'Maharshi',
          '123.0k',
          'https://images.news18.com/ibnlive/uploads/2019/04/MaharShi-Mahesh-Babu.jpg'
        )}
        {this.getMovie(
          'Avengers:Endgame',
          '1m',
          'https://img.timesnownews.com/story/1546625126-Avengers_Imax_Poster.jpg?d=600x450'
        )}

        {this.getMovie(
          'Jersey',
          '189.0k',
          'https://s3.ap-south-1.amazonaws.com/hansindia-bucket/h-upload/feeds/2019/04/20/166274-jersy-2.jpg'
        )}
      </div>
    );
  }
}

export default Movies;
