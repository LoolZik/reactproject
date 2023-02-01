import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''})

    const createPost = (e) => {
        e.preventDefault()

        create({...post, id: Date.now()})
        setPost({title: '', body: ''})
    }

    return (
        <form className="postForm" onSubmit={createPost}>
            <h1>Напиши свой пост</h1>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <MyButton>
                добавить пост
            </MyButton>
        </form>
    )
}

export default PostForm