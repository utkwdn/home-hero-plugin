import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { image1, image2, image3, image4 } = attributes;

	return (
		<div
			{...useBlockProps.save()}
			className="home-hero-container alignfull fade-in"
		>
			<div className="home-hero">
				<div className="home-hero-image-1">
					<picture>
						{image1 && (
							<img
								className="fade-right"
								src={image1}
								alt="Photo 1"
							/>
						)}
					</picture>
				</div>
				<div className="title-and-text-shadow fade-left"></div>
				<div className="title-and-text fade-left-after">
					<h2>
						<span>Find Your Place On</span> Rocky Top
					</h2>
					<div className="inner-blocks-area">
						<InnerBlocks.Content />
					</div>
				</div>
				<div className="home-hero-grid">
					<div className="home-hero-image-2">
						{image2 && (
							<picture>
								<img
									className="fade-up"
									src={image2}
									alt="Photo 2"
								/>
							</picture>
						)}
					</div>
					<div className="home-hero-image-3">
						{image3 && (
							<picture>
								<img
									className="fade-up"
									src={image3}
									alt="Photo 3"
								/>
							</picture>
						)}
					</div>
					<div className="logo-block">
						<div className="logo-block-image fade-in">
							<picture>
								<img
									className="fade-up"
									src={image4}
									alt="Photo 4"
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
