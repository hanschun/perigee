import React from 'react'
import {useQuery} from '@apollo/client'
import gql from 'graphql-tag'
import PostItem from './Posts.Item'
import utilStyles from '../../styles/utils.module.css'

export const GET_SOME_RECENT_POSTS = gql`
  query getSomeRecentPosts($limit: Int) {
    posts(order_by: {created_at: desc}, limit: $limit) {
      body
      hash
      created_at
      sender {
        name
        avatar
      }
    }
  }
`

export const PostsList = (props) => {
  const {loading, error, data} = useQuery(GET_SOME_RECENT_POSTS, {
    variables: {limit: 5},
    errorPolicy: 'all'
  })


  if (loading) {
    console.log('LOADING')
    return <div>Loading...</div>
  }
  if (error) {
    console.log('ERROR: ', error)
    return <div>An error occurred</div>
  }

  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts: {data.posts.length}</h2>
        <ul className={utilStyles.list}>
          {data.posts.map((post) => <PostItem post={post} />)}
        </ul>
      </section>
  )
}
