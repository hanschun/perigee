import React from 'react'
import {useQuery} from '@apollo/client'
import gql from 'graphql-tag'
import PostItem from './Posts.Item'
import utilStyles from '../../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  list: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

export const GET_SOME_RECENT_POSTS = gql`
  query getSomeRecentPosts($limit: Int) {
    posts(order_by: {created_at: desc}, limit: $limit) {
      body
      hash
      created_at
      sender {
        name
        avatar
        hash
      }
    }
  }
`

export const PostsList = (props) => {
  const {loading, error, data} = useQuery(GET_SOME_RECENT_POSTS, {
    variables: {limit: 5},
    errorPolicy: 'all'
  })
  const classes = useStyles()


  if (loading) {
    console.log('LOADING')
    return <div>Loading...</div>
  }
  if (error) {
    console.log('ERROR: ', error)
    return <div>An error occurred</div>
  }

  return (
    <Paper className={classes.root}>
        <Typography variant="h3" component="h3" gutterBottom>
        Posts: {data.posts.length}
        </Typography>
        <List className={classes.listt}>
          {data.posts.map((post) => <PostItem post={post} />)}
        </List>
    </Paper>
  )
}
