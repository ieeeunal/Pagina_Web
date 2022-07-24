// Cards List 
import { React, useState} from 'react'; 
import '../Styles/CardsList.sass'; 

import { MemberCard } from './MemberCard.jsx'; 
import membersList from './utils/Members.json'; 

export const CardsList = () => {

	const getCard = () => {
		// console.log(membersList); 
		const members = membersList.map(e => {
			let photo; 
			try{
				photo = require(`../Assets/team/${e.id}.jpg`);
			}catch(error){
				try{
					photo = require(`../Assets/team/${e.id}.jpeg`);
				}catch(error){
					try{
						photo = require(`../Assets/team/${e.id}.png`);
					}catch(error){
						photo = require(`../Assets/team/base.jpg`);
					}
				}
			}
		return (<MemberCard name = {e.name} role = {e.role} img = {photo} />)
		})
		return members; 
	}
	return (
		<>
			<div className = "card-list d-flex justify-content-center flex-wrap transition-short">
				{ getCard() }
			</div>
		</> 
		)

}