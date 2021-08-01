import React from 'react';
import { navigate } from 'hookrouter';
import SocialShare from "./SocialShares";

function Footer() {

	const shareURL = "https://www.adampower.io";


	return (
		<footer className="footer">
			<div className="footer__logo-box">
				<img src="../images/AP Web Dev Logo_2_Grey.png" alt="Adam Power Web Development Logo" className="footer__logo" />
			</div>

			<div className="">
				<div className="">
					<div className="footer__navigation">
						<ul className="footer__list">
							<li className="footer__item">
								<a href="/#features" className="footer__link">
									Features
								</a>
							</li>
							<li className="footer__item">
								<a href="/#process" className="footer__link">
									Process
								</a>
							</li>
							<li className="footer__item">
								<a href="/#work" className="footer__link">
									Work
								</a>
							</li>
							<li className="footer__item">
								<a href="/#tech" className="footer__link">
									Tech
								</a>
							</li>
							<li className="footer__item">
								<a href="/#contact" className="footer__link">
									Contact
								</a>
							</li>
						</ul>
					</div>

					<SocialShare shareURL={shareURL}
                        title="Adam Power Web Development"
                        summary="Web design and development"
                        hashtag="#apwebdev"
                    />

					<div className="footer__copyright">
						<h4 className="footer__copyright-text">Copyright Adam Power Web Development &#169;</h4>
					</div>
				</div>
				<div className="footer__page-end">

				</div>
			</div>
		</footer>
	);
}

export default Footer;
