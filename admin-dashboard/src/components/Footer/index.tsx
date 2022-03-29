import { Box, Container, Link, Typography } from '@mui/material'; 
import { styled } from '@mui/system';

const FoooterWrapper = styled(Box) (
  ({theme}) => `
    border-radius: 0;
    margin: ${theme.spacing(3)} 0;
  `
);