import React from 'react';

const Formation = () => {
	return <FormationItem title="U" image="/pictures/me.jpg" />;
};

const FormationItem = ({title, image, date}) => (
	<div className="formation_item">
		{title && <p>{title}</p>}
		{image && <img src={image} alt="élément manquant" style={{maxWidth: '10px'}}/>}
		{date && <p>{date}</p>}
	</div>
);

export default Formation;