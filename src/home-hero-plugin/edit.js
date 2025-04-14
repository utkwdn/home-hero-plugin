import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	InnerBlocks
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { image1, image2, image3 } = attributes;

	const handleImageSelect = (field) => (media) => {
		if (media && media.url) {
			setAttributes({ [field]: media.url });
		}
	};

	const renderImage = (field, url, index) => (
		<div key={index} className="photo-upload">
			{url ? (
				<img
					src={url}
					alt={__('Selected image', 'hero-photo-layout')}
					style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
					onClick={() => setAttributes({ [field]: '' })}
				/>
			) : (
				<MediaPlaceholder
					icon="format-image"
					labels={{ title: __('Select Image', 'hero-photo-layout') }}
					accept="image/*"
					allowedTypes={['image']}
					onSelect={handleImageSelect(field)}
				/>
			)}
		</div>
	);

	const backgroundStyle = image1
		? { backgroundImage: `url(${image1})` }
		: {};

	return (		
		<div {...useBlockProps()} className="home-hero">
			<div className='top-row'>
				<div
					className='background-image-div'
					style={backgroundStyle}
					onClick={() => setAttributes({ image1: '' })}
					title={__('Click to remove background image', 'hero-photo-layout')}
				>
					{!image1 && (
						<MediaPlaceholder
							icon="format-image"
							labels={{ title: __('Select Background Image', 'hero-photo-layout') }}
							accept="image/*"
							allowedTypes={['image']}
							onSelect={handleImageSelect('image1')}
						/>
					)}
				</div>
				<div className='title-and-text'>
					<div className="inner-blocks-area">
						<InnerBlocks 
							allowedBlocks={['core/paragraph', 'core/heading', 'core/image', 'core/buttons']}
							templateLock={false} 
						/>
					</div>
				</div>
			</div>
			<div className='bottom-row'>
				{renderImage('image2', image2, 1)}
				{renderImage('image3', image3, 2)}
				<div className='logo-block'>
					<p>Logo Here</p>
				</div>
			</div>
		</div>
	);
}