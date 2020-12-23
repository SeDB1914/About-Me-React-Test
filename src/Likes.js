import React from 'react';


const Likes = () => {
const mylist= ['BBQing', 'fishing', 'time with family', 'relaxing']
const listItems = mylist.map(likesList => <li>{likesList}</li>);

return (<ul>{listItems}</ul>
)}


export default Likes;
