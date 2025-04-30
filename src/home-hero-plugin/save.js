import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { image1, image2, image3 } = attributes;

	return (
		<div
			{...useBlockProps.save()}
			className="home-hero-container alignfull"
		>
			<div className="home-hero">
				<div className="home-hero-image-1">
					<picture>
						{image1 && <img src={image1} alt="Photo 1" />}
					</picture>
				</div>
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
					{image2 && (
						<picture>
							<img src={image2} alt="Photo 2" />
						</picture>
					)}
				</div>
				<div className="home-hero-image-3">
					{image3 && (
						<picture>
							<img src={image3} alt="Photo 3" />
						</picture>
					)}
				</div>
				<div className="logo-block">
					<div className="logo-block-image">
						<img src="/wp-content/plugins/home-hero-plugin/src/home-hero-plugin/hp-tagline-vertical.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
