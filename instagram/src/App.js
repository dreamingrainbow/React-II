import React from 'react';
import './App.css';
import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

const App = () => (
      <div className="PageContainer">
        <SearchBar links={['<a href="#">Test</a>']}/>
        {dummyData.map((post, i) => <PostContainer key={i} post={post} />)}
      </div>
    );

export default App;
