import {
  Box,
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import {
  PreTransactionConfirmation,
  PreTransactionConfirmationtProps,
} from '../types';
import PrimaryButton from '../PrimaryButton';

const AddPaymasterAndData = ({
  setPaymasterAndData,
}: {
  setPaymasterAndData: (paymasterAndData: string) => void;
}) => {
  const [showAddPaymasterUI, setShowAddPaymasterUI] = useState<boolean>(false);
  const [addPaymasterLoader, setAddPaymasterLoader] = useState<boolean>(false);
  const [paymasterAndData, setPaymasterAndDataLocal] = useState<string>('');

  const addPaymaster = useCallback(async () => {
    setAddPaymasterLoader(true);
    setPaymasterAndData(paymasterAndData);
    setAddPaymasterLoader(false);
    setShowAddPaymasterUI(false);
  }, [paymasterAndData, setPaymasterAndData]);

  return (
    <>
      <Typography variant="h6" sx-={{ p: 2 }}>
        Paymaster Info
      </Typography>
      {!showAddPaymasterUI && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Paymaster data
          </Typography>
          <Typography
            component="div"
            variant="caption"
            style={{ overflowWrap: 'anywhere' }}
          >
            {paymasterAndData || '0x'}
          </Typography>
          <Button
            sx={{ mt: 2 }}
            onClick={() => setShowAddPaymasterUI(true)}
            variant="outlined"
          >
            {paymasterAndData ? 'Change paymaster data' : 'Add paymaster data'}
          </Button>
        </Paper>
      )}
      {showAddPaymasterUI && (
        <Paper sx={{ p: 2 }}>
          <TextField
            value={paymasterAndData}
            onChange={(e) => setPaymasterAndDataLocal(e.target.value)}
            sx={{ width: '100%' }}
            label="Paymaster And Data"
            variant="standard"
            autoFocus
          />
          <Box
            justifyContent="space-around"
            alignItems="center"
            display="flex"
            sx={{ p: '16px 0px' }}
          >
            <Button
              sx={{ width: 150 }}
              variant="outlined"
              onClick={() => {
                setShowAddPaymasterUI(false);
                setAddPaymasterLoader(false);
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={addPaymasterLoader}
              sx={{ width: 150, position: 'relative' }}
              variant="contained"
              onClick={addPaymaster}
            >
              Add
              {addPaymasterLoader && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
};

const PreTransactionConfirmationComponent: PreTransactionConfirmation = ({
  onComplete,
  transaction,
  onReject,
}: PreTransactionConfirmationtProps) => {
  const [loader, setLoader] = React.useState<boolean>(false);
  const [paymasterAndData, setPaymasterAndDataLocal] = useState<string>('');

  return (
    <>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Send Transaction
        </Typography>
        <Typography variant="body1" color="text.secondary">
          You are about to send a transaction from your account.
          If you are using a dapp <b>MAKE SURE IT'S TRUSTWORTHY!!</b><br/>
          You can <b>CHECK TX METADATA</b> on the next screen.<br/><br/>
          If it wasn't your intention to send it just hit <b>REJECT</b> on the next screen.<br />
          You can add <b>Paymaster info</b> below. If you do not have one don't worry, just continue.<br/><br/>
          Are you ready to proceed?
        </Typography>
        {/* <Typography variant="caption">
          trampoline/src/pages/Account/components/transaction/pre-transaction-confirmation.ts
        </Typography> */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <AddPaymasterAndData setPaymasterAndData={setPaymasterAndDataLocal} />
        </Box>
      </CardContent>
      <CardActions sx={{ width: '100%' }}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <PrimaryButton
            disabled={loader}
            size="large"
            variant="contained"
            onClick={() => {
              onComplete(transaction, { paymasterAndData });
              setLoader(true);
            }}
          >
            Continue
            {loader && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </PrimaryButton>
        </Stack>
      </CardActions>
    </>
  );
};

export default PreTransactionConfirmationComponent;
