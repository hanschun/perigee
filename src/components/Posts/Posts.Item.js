import React from 'react'
import Date from '../date'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplyIcon from '@material-ui/icons/Reply';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailsLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  detailsRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flex: '1 0 auto',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export const PostItem = ({post}) => {
  const {hash, body, created_at, sender} = post
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <div className={classes.details}>
      <div className={classes.detailsLeft}>
        <CardHeader
          avatar={
            <Avatar
              aria-label={`avatar for ${sender.name}`}
              className={classes.avatar}
              src={sender.avatar}>
              {sender.name[0].toUpperCase()}
            </Avatar>
          }
          title={sender.name}
          subheader={`@${sender.hash}`}
        />
        {/* TODO: no Image on Post, a URI and a Title or Text */}
        {/* <CardMedia
          className={classes.media}
          image={image}
          title={imageTitle?}
        /> */}
        <CardContent className={classes.content}>
          <Typography variant="body1" color="textSecondary" component="p">
            {body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Date dateString={created_at} />
          </Typography>
        </CardContent>
      </div>
      <div className={classes.detailsRight}>
        <div className={classes.controls}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ReplyIcon />
          </IconButton>
        </div>
      </div>
      </div>
  </Card>
  );

  // return (
  //   <div className={styles.card}>
  //     <div className={styles.card}>
  //       <div className={styles.cardHeader}>
  //         <figure className={styles.avatar}>
  //           <img src={sender.avatar} />
  //         </figure>
  //         <h4 className={styles.cardHeaderTitle}>{sender.name}</h4>
  //         <h6 className={styles.cardHeader}>{sender.hash}</h6>
  //         <small><Date dateString={created_at} /></small>
  //       </div>
  //       <div className={styles.cardBody}>{body}</div>
  //       <div className={styles.bodyContent}>
  //         <IconButton color="primary">
  //           <FavoriteIcon />
  //         </IconButton>
  //         <IconButton color="secondary">
  //           <FavoriteIcon />
  //         </IconButton>
  //         <IconButton color="default">
  //           <FavoriteIcon />
  //         </IconButton>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default PostItem