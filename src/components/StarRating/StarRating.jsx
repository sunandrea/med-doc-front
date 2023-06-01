import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const labels = {
    0: '0.0',
    0.5: '0,5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

export default function StarRating({ value }) {
    const getLabelText = value => {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    };

    return (
        <Box
            sx={{
                width: 115,
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600',
                marginRight: { xs: '8px', md: '16px' },
            }}
        >
            <Box sx={{ mr: 1 }}>{value ? labels[value] : labels[0]}</Box>

            {/* {value !== null ? <Box sx={{ mr: 1 }}>{labels[value]}</Box> : <Box sx={{ mr: 1 }}>{labels[0]}</Box>} */}
            <Rating
                defaultValue={0}
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                readOnly
                emptyIcon={<StarIcon style={{ transition: '.3s ease-in-out 0s' }} fontSize="14px" />}
            />
        </Box>
    );
}
