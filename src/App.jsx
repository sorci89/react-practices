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


// function Post (props) {
//   return (
//     <div key={props.post.id}>
//       <h2>{props.post.title}</h2>
//       <p>{props.post.postText}</p>
//       <p>{props.post.date.toLocaleString()}</p>
//       <input type="text" placeholder='New post title' onChange={(event)=> props.setNewTitle(event.target.value)} value={props.newTitle} />
//       <input type="text" placeholder='New post text' onChange={(event)=> props.setNewText(event.target.value)} value={props.newText} />
//       <button onClick={()=> props.edit(props.post.id)}>Edit</button>
//       <button onClick={()=> props.remove(props.post.id)}>Delete</button>
//     </div>
//   )
// }
// function Post ({post, remove, edit, setNewText, setNewTitle, newText, newTitle}) {
function Post ({post, remove, edit}) {
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('')

  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.postText}</p>
      <p>{post.date.toLocaleString()}</p>
      <input type="text" placeholder='New post title' onChange={(event)=> setNewTitle(event.target.value)} value={newTitle} />
      <input type="text" placeholder='New post text' onChange={(event)=> setNewText(event.target.value)} value={newText} />
      <button onClick={()=> edit(post.id, newTitle, newText)}>Edit</button>
      <button onClick={()=> remove(post.id)}>Delete</button>
    </div>
  )
}


function App() {

  // const [posts, setPosts] = useState(dummyPosts);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [newPostText, setNewPostText] = useState('');
  // const [newTitle, setNewTitle] = useState('');
  // const [newText, setNewText] = useState('')

  
  // function add() {
  //   setPosts([...posts,{
  //     title: "Random",
  //   postText: "Szöveg4",
  //   date: "2022.02.04"
  //   }])
  // } 
  function add() {
    setPosts([...posts,{
      title: title,
      postText: newPostText,
      date: new Date(),
      id: Math.random()
    }])
    setTitle('');
    setNewPostText('')
  } 

  function remove(id) {
    // let newList = [];
    // for (let p of posts) {
    //   if(p.id !== id){
    //     newList.push(p)
    //   }
    // }
    // setPosts(newList)
    setPosts(posts.filter((post)=> post.id !== id))
  }

  function edit(id, newTitle, newText) {
    let newList = [];

    for (let p of posts) {
      if (p.id === id) {
        p.title = newTitle;
        p.postText = newText;
      }
      newList.push(p)
    }
    setPosts(newList)
  }

  return (
    <div className="App" >
      <h1>Blog Posts</h1>

      <div>
        <input type="text" placeholder="title" onChange={(event)=> setTitle(event.target.value)} value={title}/>
        <input type="text" placeholder="post" onChange={(event)=>setNewPostText(event.target.value)} value={newPostText}/>
        <button onClick={add}>New Post</button>
        <button onClick={()=> setPosts([])}>Delete All</button>
      </div>

      {posts.map((post)=> {
        return(
          // <Post post={post} key={post.id} remove={remove} edit={edit} setNewTitle={setNewTitle} setNewText={setNewText} newTitle={newTitle} newText={newText} />
          <Post post={post} key={post.id} remove={remove} edit={edit} />
        )
      })}
      {/* {posts.map((post)=> {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.postText}</p>
          <p>{post.date.toLocaleString()}</p>
          <input type="text" placeholder='New post title' onChange={(event)=> setNewTitle(event.target.value)} value={newTitle} />
          <input type="text" placeholder='New post text' onChange={(event)=> setNewText(event.target.value)} value={newText} />
          <button onClick={()=> edit(post.id)}>Edit</button>
          <button onClick={()=> remove(post.id)}>Delete</button>
        </div>
      )
      })} */}
    </div>

  );
}

export default App;
