import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signInandsignUppage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
// const hats=()=>{

//   return(
//     <h1>Hello welcome to the hats page</h1>
    
//     );
// };


function App() {
  return (
  <div>
  <Header/>
    <switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact path='/signin' component={signInandsignUppage}/>


    </switch>
    
  </div>

    
  );
}

export default App; 



// const HomePages=(props)=>{
//   console.log(props);
//   return(
//    <div>
//     <h1>Topics</h1>
    
//   </div> 
  
//   );
// }
// const TopicList=(props)=>{
//   console.log(props);
//   return(
//    <div>
//      <Link to='/topics/sai.llo'>Topics</Link>
//     <h1>Topics</h1>
//   </div> 
  
//   );
// }
// const TopicDetails=(props)=>{
//   console.log(props);
//   return(
//    <div>  
//     <h1>Topics:{props.match.params.topicid}</h1>
//   </div> 
  
//   );
// }


// function App() {
//   return (
//   <div>
//     <Route  exact path='/' component={HomePages}/>
//     <Route exact path='/topiclist' component={TopicList}/>
//     <Route exact path='/topiclist/:topicid' component={TopicDetails}/>
//   </div>

    
//   );
// }




