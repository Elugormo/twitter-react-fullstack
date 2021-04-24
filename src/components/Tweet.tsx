import { Paper, Typography, IconButton, Avatar } from "@material-ui/core";
import classnames from "classnames";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RetweetIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ShareOutlined";

import React from "react";
import { useHomeStyles } from "../pages/theme";
import { Link } from "react-router-dom";

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
  classes,
}: TweetProps): React.ReactElement => {
  return (
      <Link className={classes.tweetsWrapper} to={`/home/tweet/${_id}`}>
    <Paper
      className={classnames(classes.tweet, classes.tweetsHeader)}
      variant="outlined"
    >
        <Avatar
          className={classes.tweetAvatar}
          alt={`${user.fullname}'s avatar image`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetsUserName}>@{user.username}</span>
            &nbsp;
            <span className={classes.tweetsUserName}>·</span>&nbsp;
            <span className={classes.tweetsUserName}>1 h</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetsFooter}>
            <div>
              <IconButton>
                <CommentIcon className={classes.tweetIcons} />
              </IconButton>
              <span>2</span>
            </div>
            <div>
              <IconButton>
                <RetweetIcon className={classes.tweetIcons} />
              </IconButton>
              <span>3</span>
            </div>
            <div>
              <IconButton>
                <LikeIcon className={classes.tweetIcons} />
              </IconButton>
              <span>122</span>
            </div>
            <div>
              <IconButton>
                <ShareIcon className={classes.tweetIcons} />
              </IconButton>
            </div>
          </div>
        </div>
    </Paper>
      </Link>
  );
};
