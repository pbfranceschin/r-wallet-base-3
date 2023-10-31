import {
  Box,
  CardActions,
  CardContent,
  Typography,
  Link
} from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { OnboardingComponent, OnboardingComponentProps } from '../types';
import PrimaryButton from '../PrimaryButton';

const Onboarding: OnboardingComponent = ({
  onOnboardingComplete,
}: OnboardingComponentProps) => {
  return (
    <Box sx={{ padding: 2 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          New Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          After creating a new account you can deploy it by clicking on the <b>'not deployed'</b> sign
          and following the instructions onscreen, or simply by making your 1st transaction.<br /><br/>
          rWallet Smart Account follows the ERC-4337 specification. That means it functions just like
          a regular account except that it has added functionalities. With <b>rWallet</b> you can engage in
          <b>safe</b> and <b>trustless</b> rental tx's involving NFT assets. You can also make gasless tx's
          or pay for gas using stablecoins by using paymasters.<br/><br/>
          To Learn more about these functionalities visit our{' '}
          <Link href='https://github.com/pbfranceschin/r-wallet-base-3/blob/main/README.md'>
            Web Page.          
          </Link>
        </Typography>
        {/* <Typography variant="caption">
          trampoline/src/pages/Account/components/onboarding/index.ts
        </Typography> */}
      </CardContent>
      <CardActions sx={{ pl: 4, pr: 4, width: '100%' }}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <PrimaryButton
            size="large"
            variant="contained"
            onClick={() => onOnboardingComplete()}
          >
            Continue
          </PrimaryButton>
        </Stack>
      </CardActions>
    </Box>
  );
};

export default Onboarding;
