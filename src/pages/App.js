
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header'
import {PostsList} from '../components/Posts/Posts.List'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
}))

export const App = () => {
  const { logout} = useAuth0()
  const classes = useStyles()

  return (
    <div>
      <Header logoutHandler={logout} />
      <Paper className={classes.root}>
          <Typography variant="h2" component="h2" gutterBottom>
            Welcome to Perigee
          </Typography>
      </Paper>
      <PostsList />
    </div>
  )
}

export default App