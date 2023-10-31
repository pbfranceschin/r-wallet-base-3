import React from 'react';
import {
  Box,
  CardActions,
  CardContent,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import logo from '../../../../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../Account/components/PrimaryButton';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={2}
      sx={{ height: '100%' }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="span"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: 600,
          p: 2,
          border: '1px solid #d6d9dc',
          borderRadius: 5,
          background: 'white',
        }}
      >
        <CardContent>
          <Typography textAlign="center" variant="h3" gutterBottom>
            Welcome to rWallet Smart Account!
          </Typography>
          <Typography textAlign="center" variant="body1" color="text.secondary">
            The best way to explore NFT rentals!{' '}
            <Link href="https://github.com/pbfranceschin/r-wallet-base-3/blob/main/README.md">
              Learn more.
            </Link>
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 5 }}
          >
            <img height={250} src={logo} className="App-logo" alt="logo" />
          </Box>
          <Typography
            textAlign="center"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            by Australopitech
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 4, pr: 4, width: '100%' }}>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <PrimaryButton
              size="large"
              variant="contained"
              onClick={() => navigate('/accounts/new')}
            >
              Create new account
            </PrimaryButton>
          </Stack>
        </CardActions>
      </Box>
    </Stack>
  );
};

export default Intro;
