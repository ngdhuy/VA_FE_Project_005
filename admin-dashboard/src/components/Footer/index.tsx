import { Box, Container, Link, Typography } from '@mui/material'; 
import { styled } from '@mui/system';

const FooterWrapper = styled(Box) (
  ({theme}) => `
    border-radius: 0;
    margin: ${theme.spacing(3)} 0;
  `
);

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth='lg'>
        <Box
          py={3}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1">
              &copy; 2022 - Admin-dashboard system of e-commerce
            </Typography>
          </Box>
          <Typography sx={{ pt:  { xs: 2, md: 0}}} variant="subtitle1">
            Created by <Link href="https://www.sestud.io" target="_blank">SEstudio</Link>
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;