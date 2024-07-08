import React, { useState, ChangeEvent } from 'react';
import { TextField, Box, BoxProps } from '@mui/material';
import Typography from '@mui/material/Typography';

type ImgProps = {
    alt: string;
    src: string;
    // add more HTML img attributes you need
}

const Img = (props: BoxProps & ImgProps) => <Box component='img' {...props} />;

const Image: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageError, setImageError] = useState<string>('');

    const handleImageUrlChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setImageUrl(value);
        // URL validation regex
        const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
        if (!urlRegex.test(value)) {
            setImageError('Please enter a valid image URL');
        } else {
            setImageError('');
        }
    };

    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
                Image URL
            </Typography>
            <TextField
                label="Image URL"
                value={imageUrl}
                onChange={handleImageUrlChange}
                fullWidth
                error={!!imageError}
                helperText={imageError}
                required
            />
            {imageUrl && !imageError && (
                <Img
                    src={imageUrl}
                    alt="Uploaded image"
                    sx={{ marginTop: 2, maxWidth: '100%' }}
                />
            )}
        </div>
    );
};
export default Image;