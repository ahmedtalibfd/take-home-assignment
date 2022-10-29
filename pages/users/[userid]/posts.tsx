import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from "../../../components/Post";
import createNewPost from "../../../utils/createNewPost";

export default function displayPosts() {
  const [posts, setPosts] = useState<{ id: number, body: string, title: string }[]>([])
  const [title, setTitle] =useState('')
  const [postBody, setPostBody] =useState('')
  const [isSubmitDisabled,setIsSubmitDisabled] = useState(false)
  const router = useRouter();
  const { userid }:any = router.query;
  
  useEffect(() => {
    if (userid) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
        .then(response => response.json())
        .then(posts => setPosts(posts))
    }
  }, [userid])
  const generatePosts = posts.map((post) => <Post key={post.id} {...post} />)
const onPostSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsSubmitDisabled(true)
  // making a post call
  const result = await createNewPost(title, postBody, parseInt(userid));
 // getting id from result
  const { id } =result;
  setIsSubmitDisabled(false)
  setPosts(posts => [{ id,title,body:postBody },...posts])
  // resetiing title and body to null
  setPostBody("");
  setTitle("");
  alert("post is succesfully updated")


}
  return (
    <>
      <h1>Create a new post</h1>
      <form onSubmit={onPostSubmit}>
        <label htmlFor="title">Post title:</label>
        <br/>
          <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required minLength={4} maxLength={50}/>
            <br/>
            <label htmlFor="body">Post Body:</label>
            <br/>
              <textarea id="body" name="body" value={postBody} onChange={(e)=>setPostBody(e.target.value)} rows={4} required minLength={10} maxLength={400}/>
            <br/>
                <input type="submit" value="Create Post" disabled={isSubmitDisabled}/>
        </form>
                <h1>Previous Posts</h1>
                {generatePosts}
      </>
                );
}
