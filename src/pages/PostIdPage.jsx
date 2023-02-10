import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPage() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const {id} = useParams()

    const [fetchPostById, isPostLoading, erroe] = useFetching(async () => {
        const response = await PostService.getByPost(id)
        setPost(response.data)
    })

    const [fetchCommById, isCommLoading, erroeComm] = useFetching(async () => {
        const response = await PostService.getByComm(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(id)
        fetchCommById(id)
    }, [])

    return (
        <div>
            <div>{post.title}</div>
            <div>
                {comments.map((comm) => 
                    <div style={{marginTop: 20}}>
                        <div>{comm.email}</div>
                        <div>{comm.body}</div>
                    </div>
                )}
            </div>
            {isCommLoading && <Loader/>}
        </div>
    );
    }

export default PostIdPage;
