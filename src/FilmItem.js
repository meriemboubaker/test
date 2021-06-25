import React from 'react';
import Stars from './Stars';

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



function FilmItem(props) {
	return (
		<div>
			<li className='lmj-film-item' >
			<span className='lmj-film-item-quality'>{props.quality}</span>
			<img className='lmj-film-item-cover' src={props.cover} alt={`${props.name} cover`} />
			
			<div>
				<Stars starsValue={props.stars} />
			</div>
		</li> 
		</div>
	)
}

export default FilmItem;