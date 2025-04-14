import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { image1, image2, image3 } = attributes;

	const backgroundStyle = image1
		? { backgroundImage: `url(${image1})` }
		: {};

	return (
		<div {...useBlockProps.save()} className="home-hero">
			<div className="top-row">
				<div className="background-image-div" style={backgroundStyle}></div>
				<div className="title-and-text">
					<div className="inner-blocks-area">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
			<div className="bottom-row">
				{image2 && <img src={image2} alt="Photo 2" />}
				{image3 && <img src={image3} alt="Photo 3" />}
				<div className="logo-block">
					<p>Logo Here</p>
				</div>
			</div>
		</div>
	);
}