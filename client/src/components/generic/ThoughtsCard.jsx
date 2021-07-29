import React from "react";
import SocialShare from "../generic/SocialShares";

function Thought(props) {

    const {image, imageTitle, title, date, summary, 
        content1, content2, content3, content4, content5, content6, content7, content8,
        link1, link2, link3, link4,
        link1Title, link2Title, link3Title, link4Title} = props;

    const shareURL = "https://www.designandcontrol.co.uk";

    const popupID = "#" + title;

    return (
        <div id={"Post Summary " + title} className="thought-card">

            <a href={popupID} >
            <div className="thought-card__summary">

                <img src={image} alt={imageTitle} className="thought-card__image-1"/> 

                <h3 className="thought-card__title">{title}</h3>
                <h4 className="thought-card__date">{date}</h4>
                <h5 className="thought-card__summary--text">{summary}</h5>
            </div>
            </a>

            <div className="popup" id={title}>

            <div className="popup__content">

                <div className="row">
                    <div className="column-1-of-2 popup__left">
                        <img src={image} alt={imageTitle} className="popup__img"/> 

                        <SocialShare    
                            shareURL={shareURL + "#popup"}
                            title={title}
                            summary={summary}
                            hashtag="#designandcontrol"
                        />
                    </div>

                    <div className="column-1-of-2 popup__right">
                        <a href="#blog" className="popup__close">&times;</a>    

                        <h3 className="thought-card__title popup__title">{title}</h3>
                    <h4 className="thought-card__date popup__date">{date}</h4>

                        <p className="popup__text">{content1}</p>

                        <p className="popup__text">{content2}</p>

                        <p className="popup__text">{content3}</p>

                        <p className="popup__text">{content4}</p>

                        {content5 !== "" ? <p className="popup__text">{content5}</p> : <div>&nbsp;</div>}

                        {content6 !== "" ? <p className="popup__text">{content6}</p> : <div>&nbsp;</div>}

                        {content7 !== "" ? <p className="popup__text">{content7}</p> : <div>&nbsp;</div>}

                        {content8 !== "" ? <p className="popup__text">{content8}</p> : <div>&nbsp;</div>}

                        {link1 !== "" ? <a href={link1} className="popup__link">{link1Title}</a> : <div>&nbsp;</div>}

                        <br></br>
                        <br></br>

                        {link2 !== "" ? <a href={link2} className="popup__link">{link2Title}</a> : <div>&nbsp;</div>}

                        <br></br>
                        <br></br>

                        {link3 !== "" ? <a href={link3} className="popup__link">{link3Title}</a> : <div>&nbsp;</div>}

                        <br></br>
                        <br></br>

                        {link4 !== "" ? <a href={link4} className="popup__link">{link4Title}</a> : <div>&nbsp;</div>}
                    </div>

                </div>

                    
                </div> 
            </div>


                

            

        </div>
    );

};

export default Thought;