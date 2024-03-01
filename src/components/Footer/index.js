import Link from "next/link";
import Image from "next/image";
import badgeLogo1 from "/public/images/badge/siegel-bvcf-2022.png";
import badgeLogo2 from "/public/images/badge/siegel-crowdfunding.png";
import badgeLogo3 from "/public/images/badge/siegel-cc.png";
import classNames from "classnames";

import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	const footerLinkClasses = classNames(
		"group text-footer-link duration-300 ease-in-out hover:text-secondary focus:text-secondary"
	);

	const footerSocialClasses = classNames(
		"flex items-center justify-center w-[35px] h-[35px] rounded-sm text-white duration-300 ease-in-out hover:bg-[#f09c32]"
	);

	return (
		<footer className='mt-auto'>
			<div className='bg-footer px-10 py-12'>
				<div className='flex flex-wrap gap-12 max-w-1100 mx-auto'>
					<div className='flex flex-wrap gap-12 flex-1 text-white'>
						<div>
							<div>
								<h4 className='font-header text-footer-title mb-5'>Rechtliches</h4>
								<ul className='grid gap-2'>
									<li>
										<Link href='/' title='Datenschutzerklärung' className={footerLinkClasses}>
											Datenschutzerklärung
										</Link>
									</li>

									<li>
										<Link href='/' title='Investoren AGB' className={footerLinkClasses}>
											Investoren AGB
										</Link>
									</li>

									<li>
										<Link href='/' title='Unternehmen AGB' className={footerLinkClasses}>
											Unternehmen AGB
										</Link>
									</li>

									<li>
										<Link href='/' title='Risikohinweise' className={footerLinkClasses}>
											Risikohinweise
										</Link>
									</li>

									<li>
										<Link href='/' title='Impressum' className={footerLinkClasses}>
											Impressum
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div>
							<div>
								<h4 className='font-header text-footer-title mb-5'>FunderNation</h4>
								<ul className='grid gap-2'>
									<li>
										<Link href='/' title='Investoren' className={footerLinkClasses}>
											Investoren
										</Link>
									</li>

									<li>
										<Link href='/' title='Unternehmen' className={footerLinkClasses}>
											Unternehmen
										</Link>
									</li>

									<li>
										<Link href='/' title='Angels' className={footerLinkClasses}>
											Angels
										</Link>
									</li>

									<li>
										<Link href='/' title='Über uns' className={footerLinkClasses}>
											Über uns
										</Link>
									</li>

									<li>
										<Link href='/' title='Karriere' className={footerLinkClasses}>
											Karriere
										</Link>
									</li>

									<li>
										<Link href='/' title='News' className={footerLinkClasses}>
											News
										</Link>
									</li>

									<li>
										<Link href='/' title='Events' className={footerLinkClasses}>
											Events
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div>
							<div>
								<h4 className='font-header text-footer-title mb-5'>Mehr</h4>
								<ul className='grid gap-2'>
									<li>
										<Link href='/' title='Blog' className={footerLinkClasses}>
											Blog
										</Link>
									</li>

									<li>
										<Link href='/' title='FAQ' className={footerLinkClasses}>
											FAQ
										</Link>
									</li>

									<li>
										<Link href='/' title='Presse' className={footerLinkClasses}>
											Presse
										</Link>
									</li>

									<li>
										<Link href='/' title='Knowledge Center' className={footerLinkClasses}>
											Knowledge Center
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div>
							<div>
								<h4 className='font-header text-footer-title mb-5'>Kontakt</h4>
								<ul className='grid gap-2'>
									<li>
										<Link
											href='mailto:Fundernation@Fundernation.eu'
											title='Fundernation@Fundernation.eu'
											className={footerLinkClasses}>
											Fundernation@Fundernation.eu
										</Link>
									</li>

									<li>
										<Link
											href='tel: +4962518008386'
											title='+49 6251 8008386'
											className={footerLinkClasses}>
											Tel: +49 6251 8008386 (main)
										</Link>
									</li>
								</ul>
							</div>

							<div className='mt-9'>
								<h4 className='font-header text-footer-title mb-5'>Folgen Sie uns</h4>

								<ul className='flex flex-wrap gap-2'>
									<li>
										<Link
											href='https://www.facebook.com/FunderNation'
											title='Facebook'
											className={`${footerSocialClasses} bg-[#3B5998]`}
											target='_blank'>
											<FaFacebookF />
										</Link>
									</li>

									<li>
										<Link
											href='https://www.linkedin.com/company/fundernation-gmbh'
											title='Linkedin'
											className={`${footerSocialClasses} bg-[#007BB5]`}
											target='_blank'>
											<FaLinkedinIn />
										</Link>
									</li>

									<li>
										<Link
											href='https://twitter.com/i/flow/login?redirect_after_login=%2Ffundernationeu'
											title='Twitter'
											className={`${footerSocialClasses} bg-[#14171A]`}
											target='_blank'>
											<FaXTwitter />
										</Link>
									</li>

									<li>
										<Link
											href='https://www.youtube.com/channel/UCIYi8N4CruibiUI-7rLIEjA'
											title='Youtube'
											className={`${footerSocialClasses} bg-[#BB0000]`}
											target='_blank'>
											<FaYoutube />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='flex-shrink-0'>
						<div className='flex gap-3'>
							<Link
								href='https://www.bundesverband-crowdfunding.de/transparenzsiegel/'
								title='Badge Logo'
								target='_blank'
								className='flex'>
								<Image
									src={badgeLogo1}
									alt='Badge Logo'
									priority
									style={{
										width: "90px",
										height: "auto",
									}}
								/>
							</Link>

							<Link href='/' title='Badge Logo' target='_blank' className='flex'>
								<Image
									src={badgeLogo2}
									alt='Badge Logo'
									priority
									style={{
										width: "90px",
										height: "auto",
									}}
								/>
							</Link>

							<Link
								href='https://crowdinvesting-compact.de/unternehmensfinanzierungen/crowdfunding-anbieter-fundernation-im-portrait/'
								title='Badge Logo'
								target='_blank'
								className='flex'>
								<Image
									src={badgeLogo3}
									alt='Badge Logo'
									priority
									style={{
										width: "90px",
										height: "auto",
									}}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white px-10 py-5'>
				<p className='text-[14px] leading-4'>
					&copy; <span id='year'>2024</span> FunderNation | Alle Rechte vorbehalten.
				</p>
			</div>
		</footer>
	);
}
