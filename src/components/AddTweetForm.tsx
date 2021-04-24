import React, { useState } from 'react'
import classNames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import ImageOutlined from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import { useHomeStyles } from '../pages/theme'
import img from '../123.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddTweet } from '../store/ducks/tweets/actionCreators'
import { selectAddFormState } from '../store/ducks/tweets/selectors'
import { Alert } from '@material-ui/lab';
import { AddFormState } from '../store/ducks/tweets/contracts/state'

interface AddTweetFormProps { 
    classes: ReturnType<typeof useHomeStyles>, 
    maxRows?: number
}

const MAX_LENGTH = 280

export const AddTweetForm : React.FC<AddTweetFormProps> = ({classes, maxRows} : AddTweetFormProps) : React.ReactElement => {
    const [text, setText] = useState<string>('')
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length; 
    const addFormState = useSelector(selectAddFormState);
    const dispatch = useDispatch();

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) : void => { 
        if(e.currentTarget) { 
            setText(e.currentTarget.value);
        }
    }

    
    
    const handleClickAddTweet = () : void => { 
      dispatch(fetchAddTweet(text));
      setText('');
    }


    return (
        <div> 
                <div className={classes.addFormBody}>
                  <Avatar className={classes.tweetAvatar} alt={`Avatar of user UserAVATAR`} src={img} />
                  <TextareaAutosize rowsMax={maxRows} onChange={handleChangeTextarea} value={text} className={classes.addFormTextarea} placeholder="Wtf is happening?" />
                </div>
                <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetsFooter, classes.addFormBottomActions)}>
                        <IconButton color="primary">
                            <ImageOutlined style={{ fontSize: 26 }} />
                        </IconButton>
                        <IconButton color="primary">
                          <EmojiIcon style={{ fontSize: 26 }} />
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                      <span>{textCount}</span>
                      <div className={classes.addFormCircleProgress}>
                        <CircularProgress variant="static" size={20} thickness={5} 
                        value={text.length >= MAX_LENGTH ? 100 : textLimitPercent} 
                        style={text.length >= MAX_LENGTH + 1 ? { color: 'red'} : undefined} />
                        <CircularProgress style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                        variant="static"
                        size={20}
                        thickness={4}
                        value={100} 
                        />
                      </div>
                      <Button onClick={handleClickAddTweet} disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH + 1} color="primary" variant="contained">
                        {addFormState === AddFormState.LOADING ? (<CircularProgress color="inherit" size={16} />) : ('Tweet')}
                      </Button>
                    </div>
                </div>
                {addFormState === AddFormState.ERROR && <Alert severity="error">Error with adding tweet <span role="img">😔</span></Alert>}
              </div>
    )
}
