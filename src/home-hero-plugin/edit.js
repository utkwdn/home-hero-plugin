import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	InnerBlocks,
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { image1, image2, image3 } = attributes;

	const handleImageSelect = ( field ) => ( media ) => {
		if ( media && media.url ) {
			setAttributes( { [ field ]: media.url } );
		}
	};

	const renderImage = ( field, url, index ) => (
		<picture key={ index }>
			{ url ? (
				<img
					src={ url }
					alt={ __( 'Selected image', 'hero-photo-layout' ) }
					onClick={ () => setAttributes( { [ field ]: '' } ) }
				/>
			) : (
				<MediaPlaceholder
					icon="format-image"
					labels={ {
						title: __( 'Select Image', 'hero-photo-layout' ),
					} }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					onSelect={ handleImageSelect( field ) }
				/>
			) }
		</picture>
	);

	return (
		<div { ...useBlockProps() } className="home-hero-container alignfull">
			<div className="home-hero">
				<div className="home-hero-image-1">
					{ renderImage( 'image1', image1, 1 ) }
				</div>
				<div className="title-and-text-shadow"></div>
				<div className="title-and-text">
					<div className="inner-blocks-area">
						<InnerBlocks
							allowedBlocks={ [
								'core/paragraph',
								'core/heading',
								'core/image',
								'core/buttons',
							] }
							templateLock={ false }
						/>
					</div>
				</div>
				<div className="home-hero-image-2">
					{ renderImage( 'image2', image2, 1 ) }
				</div>
				<div className="home-hero-image-3">
					{ renderImage( 'image3', image3, 1 ) }
				</div>
				<div className="logo-block">
					<div className="logo-block-image">
						<img src="http://utk.local/wp-content/uploads/2025/04/hp-tagline-vertical.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
