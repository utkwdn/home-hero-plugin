import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { image1, image2, image3, image4 } = attributes;

	const handleImageSelect = ( field ) => ( media ) => {
		if ( media && media.url ) {
			setAttributes( {
				[ field ]: {
					url: media.url,
					alt: media.alt || media.title || '',
				},
			} );
		}
	};

	const handleRemove = ( field ) => {
		setAttributes( {
			[ field ]: { url: '', alt: '' },
		} );
	};

	const normalizeImage = ( image ) => {
		if ( ! image ) return null;
		if ( typeof image === 'string' ) {
			return { url: image, alt: '' };
		}
		return image;
	};

	const renderImage = ( field, image, index ) => {
		const normalized = normalizeImage( image );

		return (
			<div className="image-wrapper" key={ index }>
				{ normalized?.url ? (
					<>
						<img
							src={ normalized.url }
							alt={ normalized.alt || '' }
						/>
						<div className="image-controls">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ handleImageSelect( field ) }
									allowedTypes={ [ 'image' ] }
									value={ normalized.id }
									render={ ( { open } ) => (
										<Button
											variant="secondary"
											onClick={ ( e ) => {
												e.stopPropagation();
												open();
											} }
										>
											{ __(
												'Replace',
												'hero-photo-layout'
											) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
							<Button
								variant="link"
								isDestructive
								onClick={ ( e ) => {
									e.stopPropagation();
									handleRemove( field );
								} }
							>
								{ __( 'Remove', 'hero-photo-layout' ) }
							</Button>
						</div>
					</>
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
			</div>
		);
	};

	return (
		<div
			{ ...useBlockProps( {
				className: 'home-hero-container alignfull fade-in',
			} ) }
		>
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
								'core/shortcode',
							] }
							templateLock={ false }
						/>
					</div>
				</div>
				<div className="home-hero-grid">
					<div className="home-hero-image-2">
						{ renderImage( 'image2', image2, 2 ) }
					</div>
					<div className="home-hero-image-3">
						{ renderImage( 'image3', image3, 3 ) }
					</div>
					<div className="logo-block">
						<div className="logo-block-image">
							{ renderImage( 'image4', image4, 4 ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
