import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const LinkViewProfile = ({ children, id }) => {
  const location = useLocation();
  const previousPath = location.pathname;
  return (
    <Link to={`${id}`} state={{ previousPath }}>
      <Button variant="outlined" color="primary">
        {children}
      </Button>
    </Link>
  );
};

export default LinkViewProfile;
