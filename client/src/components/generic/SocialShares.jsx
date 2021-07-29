import React from "react";
import { EmailShareButton, 
      EmailIcon,
      FacebookShareButton, 
      FacebookIcon,
      LinkedinShareButton, 
      LinkedinIcon, 
      TwitterShareButton, 
      TwitterIcon } from "react-share";





function SocialShares(props) {

    return (
        <div>
            <FacebookShareButton url={props.shareURL} quote={props.title} hashtag={props.hashtag}>
                <FacebookIcon
                size="4rem"
                round
                />
            </FacebookShareButton>
            <LinkedinShareButton url={props.shareURL} title={props.title} summary={props.summary}>
                  <LinkedinIcon
                  size="4rem"
                  round
                  />
            </LinkedinShareButton>
            <TwitterShareButton url={props.shareURL} title={props.title} hashtags={props.hashtag}>
                  <TwitterIcon
                  size="4rem"
                  round
                  />
            </TwitterShareButton>
            <EmailShareButton url={props.shareURL} subject={props.title} body={props.summary}>
                  <EmailIcon
                  size="4rem"
                  round
                  />
            </EmailShareButton>
        </div>
    )
                                          
};

export default SocialShares;