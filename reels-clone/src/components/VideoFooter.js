import React from "react";
import "./../css/VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/MusicNote";
import ModeCommentIcon from "@mui/icons-material/MusicNote";
import SendIcon from "@mui/icons-material/MusicNote";
import MoreHorizIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} 🙂 <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon fontSize="small" />
          <ModeCommentIcon fontSize="small" />
          <SendIcon fontSize="small" />
          <MoreHorizIcon fontSize="small" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon fontSize="small" />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon fontSize="small" />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
