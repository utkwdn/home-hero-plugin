import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { image1, image2, image3, image4 } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: 'home-hero-container alignfull fade-in',
			} ) }
		>
			<div className="home-hero">
				<div className="home-hero-image-1">
					<picture>
						{ image1?.url && (
							<img
								className="fade-right"
								src={ image1.url }
								alt={ image1.alt || '' }
							/>
						) }
					</picture>
				</div>

				<div className="title-and-text-shadow fade-left"></div>

				<div className="title-and-text fade-left-after">
					<div className="inner-blocks-area">
						<InnerBlocks.Content />
					</div>
				</div>

				<div className="home-hero-grid">
					<div className="home-hero-image-2">
						{ image2?.url && (
							<picture>
								<img
									className="fade-up"
									src={ image2.url }
									alt={ image2.alt || '' }
								/>
							</picture>
						) }
					</div>

					<div className="home-hero-image-3">
						{ image3?.url && (
							<picture>
								<img
									className="fade-up"
									src={ image3.url }
									alt={ image3.alt || '' }
								/>
							</picture>
						) }
					</div>

					<div className="logo-block">
						<div className="logo-block-image fade-in">
							<picture>
								{ image4?.url && (
									<img
										className="fade-up"
										src={ image4.url }
										alt={ image4.alt || '' }
										aria-label={
											image4.alt || 'Logo Graphic'
										}
									/>
								) }
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
