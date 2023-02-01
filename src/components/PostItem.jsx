import React from "react";
import MyButton from "./UI/MyButton/MyButton";

function PostItem({post, remove}) {

    return (
        <div className="post">
            <div>
                <div>{post.id} {post.title}</div>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton>открыть</MyButton>
                <MyButton onClick={() => remove(post)}>удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;