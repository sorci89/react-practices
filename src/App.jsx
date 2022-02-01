import './App.css';
import {useState} from "react"


// const dummyPosts = [
//   {
//     title: "Cím1",
//     postText: "Szöveg1",
//     date: "2022.02.01"
//   },
//   {
//     title: "Cím2",
//     postText: "Szöveg2",
//     date: "2022.02.02"
//   },

//   {
//     title: "Cím3",
//     postText: "Szöveg3",
//     date: "2022.02.03"
//   },
//   {
//     title: "Cím4",
//     postText: "Szöveg4",
//     date: "2022.02.04"
//   }
// ];


function App() {

  // const [posts, setPosts] = useState(dummyPosts);
  const [posts, setPosts] = useState([]);
  
  function add() {
    setPosts([...posts,{
      title: "Random",
    postText: "Szöveg4",
    date: "2022.02.04"
    }])

  } 

  return (
    <div className="App" >
      <h1>Blog Posts</h1>

      <div>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="post"/>
        <button onClick={add}>New Post</button>
        <button onClick={()=> setPosts([])}>Delete All</button>
      </div>
      {posts.map((post)=> {
      return (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.postText}</p>
          <p>{post.date}</p>
          <input type="text" placeholder='New post title' />
          <input type="text" placeholder='New post text' />
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )
      })}
    </div>

  );
}

export default App;
