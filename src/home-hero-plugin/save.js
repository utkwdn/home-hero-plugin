import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { image1, image2, image3 } = attributes;

	const backgroundStyle = image1
		? { backgroundImage: `url(${ image1 })` }
		: {};

	return (
		<div
			{ ...useBlockProps.save() }
			className="home-hero-container alignfull"
		>
			<div className="home-hero">
				<div
					className="background-image-div"
					style={ backgroundStyle }
				></div>
				<div className="title-and-text-shadow"></div>
				<div className="title-and-text">
					<h2>
						<span>Find Your Place On</span> Rocky Top
					</h2>
					<div className="inner-blocks-area">
						<InnerBlocks.Content />
					</div>
				</div>
				<div className="home-hero-image-2">
					{ image2 && <img src={ image2 } alt="Photo 2" /> }
				</div>
				<div className="home-hero-image-3">
					{ image3 && <img src={ image3 } alt="Photo 3" /> }
				</div>
				<div className="logo-block">
					<p>Logo Here</p>
				</div>
			</div>
		</div>
	);
}
