import React from 'react';
import Banner from './Banner'
import FilmItem from './FilmItem';
import days from './cover/365-Days-2020-romantic.jpg';
import amar from './cover/amar-2017-romantic.jpg';
import chemicalheart from './cover/chemical-heart-2020-romantic.jpg';
import awake from './cover/awake-2021-storie.jpg';
import fatherhood from './cover/fatherhood-2021-storie.jpg';
import icarealot from './cover/i-care-alot-2020-storie.jpg';
import bywatch from './cover/by-watch-2017-comedy.jpg';
import deconnected from './cover/deconnected-2021-comedy.jpg';
import holidate from './cover/holidate-2020-comedy.jpg';
import thekissingbooth from './cover/workit-2020-comedy.jpg';
import workit from './cover/awake-2021-storie.jpg';
import deathrace from './cover/death-race-2010-course.jpg';
import driven from './cover/Driven-2001-course.jpg';
import rush from './cover/Rush-2013-course.jpg';
import extraction from './cover/extraction-2015-action.jfif';
import oldguard from './cover/old-guard-2020-action.jpg';
import sansaucunremors from './cover/sans-aucun-remords-2021-action.jpg';
import './App.css';
function App() {
  const filmList = [
    {
      name: '365 Days',
      category: 'Romantic',
      stars: 3,
      desc: 'Film romantique',
      cover: days,
      year:2020,
      quality: 'HD' 
    },
    {
      name: 'AMAR',
      category: 'Romantic',
      stars: 3,
      desc: 'Film romantique',
      cover: amar,
      year:2017,
      quality: 'HD' 
    },
    {
      name: 'Chemical Heart',
      category: 'Romantic',
      stars: 4,
      desc: 'Film romantique',
      cover: chemicalheart,
      year:2020,
      quality: 'HD' 
    },
    {
      name: 'Awake',
      category: 'Storie',
      stars: 5,
      desc: 'Film de histoire',
      cover: awake,
      year:2021,
      quality: 'HD' 
    },
    {
      name: 'Father Hood',
      category: 'Storie',
      stars: 4,
      desc: 'Film de histoire',
      cover: fatherhood,
      year:2021,
      quality: 'HD' 
    },
    {
      name: 'I care a lot',
      category: 'Storie',
      stars: 4,
      desc: 'Film de histoire',
      cover: icarealot,
      year:2020,
      quality: 'HD' 
    },
    {
      name: 'Bay watch',
      category: 'Comedy',
      stars: 3,
      desc: 'Film de comedy',
      cover: bywatch,
      year:2017,
      quality: 'HD' 
    },
    {
      name: 'Deconnected',
      category: 'Comedy',
      stars: 4,
      desc: 'Film de comedy',
      cover: deconnected,
      year:2021,
      quality: 'HD' 
    },
    {
      name: 'Holidate',
      category: 'Comedy',
      stars: 3,
      desc: 'Film de comedy',
      cover: holidate,
      year:2020,
      quality: 'HD' 
    },
    {
      name: 'The kissing booth',
      category: 'Comedy',
      stars: 3,
      desc: 'Film de comedy',
      cover: thekissingbooth,
      year:2018,
      quality: 'HD' 
    },
    {
      name: 'Work it',
      category: 'Comedy',
      stars: 2,
      desc: 'Film de comedy',
      cover: workit,
      year:2020,
      quality: 'HD' 
    },
    {
      name: 'Death race',
      category: 'Course',
      stars: 4,
      desc: 'Film de course',
      cover: deathrace,
      year:2010,
      quality: 'HD' 
    },
    {
      name: 'Driven',
      category: 'Course',
      stars: 3,
      desc: 'Film de course',
      cover: driven,
      year:2001,
      quality: 'LW' 
    },
    {
      name: 'Rush',
      category: 'Course',
      stars: 2,
      desc: 'Film de course',
      cover: rush,
      year:2013,
      quality: 'LW' 
    },
    {
      name: 'Extraction',
      category: 'Action',
      stars: 3,
      desc: 'Film de action',
      cover: extraction,
      year:2015,
      quality: 'HD' 
    },
    {
      name: 'Old guard',
      category: 'Action',
      stars: 4,
      desc: 'Film de action',
      cover: oldguard,
      year:2020,
      quality: 'HD' 
    },
    {
      name: 'Sans aucun remors',
      category: 'Action',
      stars: 5,
      desc: 'Film de action',
      cover: sansaucunremors,
      year:2021,
      quality: 'HD' 
    }
  ] 
  return (
    <div className="App">
      <Banner />
      <div className='container'>
        {filmList.map(movie => (<FilmItem title={movie.title} cover={movie.cover} stars={movie.stars} quality={movie.quality} />))}
      </div>
    
    </div>
  );
}

export default App;
