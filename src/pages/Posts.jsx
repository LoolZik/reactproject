import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostService from '../API/PostService';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Loader from '../components/UI/Loader/Loader';
import MyButton from '../components/UI/MyButton/MyButton';
import MyInput from '../components/UI/MyInput/MyInput';
import MyModal from '../components/UI/MyModal/MyModal';
import MySelect from '../components/UI/MySelect/MySelect';
import { useFetching } from '../hooks/useFetching';
import { useSortedAndSearchedPosts } from '../hooks/usePosts';
import '../styles/App.css'
import { getArrayPages, getTotalPages } from '../utils/pages';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [showDialog, setShowDialog] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = useSortedAndSearchedPosts(filter.sort, filter.query, posts)
  const lastElement = useRef()
  const observer = useRef()
  // let arrayPages = getArrayPages(totalPages)


  const [fetching, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getByPosts(limit, page)
    const totalCount = response.headers['x-total-count'];
    setPosts([...posts, ...response.data])
    setTotalPages(getTotalPages(totalCount, limit))
  })

  const createPost = (post) => {
    setPosts([...posts, post])
    setShowDialog(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // const changePages = (page) => {
  //   setPage(page)
  //   fetching(limit, page);
  // }

  useEffect(() => {
    if (isPostLoading) return;
    if (observer.current) observer.current.disconnect()
    const callback = function(entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1)
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [isPostLoading])

  useEffect(() => {
    fetching();
  }, [page])

  return (
    <div>
      <MyButton onClick={() => setShowDialog(true)}>создать пост</MyButton>
      <div className="query">
          <MyInput
            value={filter.query}
            onChange={(e) => setFilter({...filter, query: e.target.value})}
          />
      </div>
      
      <MySelect
        filter={filter.sort}
        setFilter={(sort) => setFilter({...filter, sort: sort})}
        options={[
          {value: 'title', text: 'по названию'},
          {value: 'body', text: 'по описанию'},
        ]}
      />
      <MyModal showDialog={showDialog} hideDialog={setShowDialog}>
        <PostForm
          create={createPost}
        />
      </MyModal>
      <hr style={{margin:20}}/>
      <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
      {isPostLoading && <Loader/>}
      {/* <div className='pages'>
        {arrayPages.map(p => 
            <div 
                key={p}
                onClick={(e) => changePages(p)}
                className='pages__number'
            >
                {p}
            </div>
        )}
      </div> */}
      <div ref={lastElement}></div>
    </div>
  );
}

export default Posts;
