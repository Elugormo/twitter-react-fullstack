import React, { useState } from 'react'
import { useHomeStyles } from '../pages/theme'
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CreateIcon from '@material-ui/icons/Create'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { AddTweetForm } from './AddTweetForm';
import { ModalBlock } from './ModalBlock'
import { Link } from 'react-router-dom';


interface SideMenuProps { 
    classes: ReturnType<typeof useHomeStyles>
}


export const SideMenu: React.FC<SideMenuProps> = ({ classes } : SideMenuProps): React.ReactElement => {
    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false); 

    const handleClickOpenAddTweet = () : void => { 
      setVisibleAddTweet(true);
    }

    const handleCloseAddTweet = () : void => { 
      setVisibleAddTweet(false)
    }

    return (
        <ul className={classes.sideMenuList}>
        <li className={classes.sideMenuListItem}>
          <Link to="/home">
          <IconButton
            className={classes.logo}
            aria-label=""
            color="primary"
          >
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography
              className={classes.sideMenuListItemLabel}
              variant="h6"
            >
              Search
            </Typography>
           </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <NotificationsNoneOutlinedIcon
              className={classes.sideMenuListItemIcon}
            />
            <Hidden smDown>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Notifications
              </Typography>
          </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
            <Hidden smDown>
          <Typography
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Messages
          </Typography>
          </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
            <BookmarkBorderOutlinedIcon
              className={classes.sideMenuListItemIcon}
            />
            <Hidden smDown>
          <Typography
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Saved
          </Typography>
          </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
            <ListAltOutlinedIcon className={classes.sideMenuListItemIcon} />
             <Hidden smDown> 
          <Typography
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            News
          </Typography>
          </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
            <div>
            <PersonOutlineOutlinedIcon
              className={classes.sideMenuListItemIcon}
            />
              <Hidden smDown>
          <Typography
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Profile
          </Typography>
          </Hidden>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <Button onClick={handleClickOpenAddTweet} variant="contained" className={classes.sideMenuTweetButton} color="primary" fullWidth>
            <Hidden smDown>
              Tweet
              </Hidden>
              <Hidden mdUp>
                <CreateIcon />
                </Hidden>
              </Button>
              <ModalBlock onClose={handleCloseAddTweet} visible={visibleAddTweet} >
                <div style={{ width: 550 }}>
                  <AddTweetForm maxRows={15} classes={classes} />
                </div>
              </ModalBlock>
              
        </li>

      </ul>
    )
}
