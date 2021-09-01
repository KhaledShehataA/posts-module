import React from 'react';

const posts = (posts) => {
	return (
		<>
			{posts.map((posts) => {
				<h3>{posts.title}</h3>;
			})}
		</>
	);
};

export default posts;
