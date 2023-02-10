import React from "react";
import { Link } from "react-router-dom";
import MyButton from "./UI/MyButton/MyButton";

function PostItem({post, remove}) {

    return (
        <div className="post">
            <div>
                <div className="post__id">{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <Link className="post__comm" to={`/post/${post.id}`}>комментарии</Link>
                <MyButton onClick={() => remove(post)}>удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;