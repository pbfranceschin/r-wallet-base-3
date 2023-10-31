import {
  Button,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { SignMessageComponenetProps } from '../types';

const SignMessage = ({
  onComplete,
}: SignMessageComponenetProps) => {
  return (
    <>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Signature Request
        </Typography>
        <Typography variant="body1" color="text.secondary">
          You were requested to sign a message. Always make sure you <b>KNOW EXACTLY</b> what you are signing
          and trust that the source of the request is not ill-intentioned.<br/><br/>
          Are you ready to proceed? 
        </Typography>
      </CardContent>
      <CardActions sx={{ pl: 4, pr: 4, width: '100%' }}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Button size="large" variant="contained" onClick={() => onComplete()}>
            Continue
          </Button>
        </Stack>
      </CardActions>
    </>
  );
};

export default SignMessage;
