import styles from './dashboard-layout.module.css';
import classNames from 'classnames';
import NavBar from '@/components/common/navbar/navbar'
import SideBar from '@/components/dashboard/sidebar/sidebar'
import NftArea from '@/components/dashboard/nft-area/nft-area'
import { useSigner } from '@usedapp/core';
import { useEffect, useState } from 'react';
import { ConnectButton } from '@/components/common/navbar/navbar';
import { NFTDialog } from '@/components/common/nft-dialog/nft-dialog';
import { useAddressData, useAddressNfts } from '../../../hooks/address-data';

export interface DashboardLayoutProps {
  address?: string;
}

export default function DashboardLayout ({ address }: DashboardLayoutProps) {
  const [isNFTOpen, setIsNFTOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(0);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  // const isWalletConnected = true; //temp
  const signer = useSigner();
  const [signerAddress, setSignerAddress] = useState<string>();

  useEffect(() => {
    if(signer) {
      signer.getAddress().then((r) => setSignerAddress(r))
    }
  }, [signer]);

  const userData = useAddressNfts(address? address : signerAddress);
  let image = undefined;
  if (userData.nfts) {
    image = userData.nfts[selectedNFT].nftData.external_data.image_1024 ? 
            userData.nfts[selectedNFT].nftData.external_data.image_1024 :
            userData.nfts[selectedNFT].nftData.external_data.image;
  }

  let nftItem = undefined;
  if(userData.nfts) {
    nftItem = userData.nfts[selectedNFT];
  }

  return (
    <>
    {isNFTOpen && 
      <NFTDialog
        setIsNFTOpen={setIsNFTOpen} 
        nftItem={nftItem}
      />
    }
    <div className={styles.dashboard} >
      <NavBar navbarGridTemplate={styles.navbarGridTemplate} currentPage='dashboard' />
      { (signer || address)
        ? <div className={styles.contentGridTemplate}> 
            <SideBar address={address? address : signerAddress}/>
            <NftArea nftFetchData={userData} setIsNFTOpen={setIsNFTOpen} setSelectedNFT={setSelectedNFT}/> 
          </div>
        : <div className={styles.notConnectedTemplate}>
            <div className={styles.notConnectedContainer}>
              <div className={styles.ellipses}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.notConnectedMessage}>Connect a wallet <br /> to see your dashboard</span>
              <ConnectButton connectText='Connect'/>
            </div>
          </div>
      }
    </div>
    </>
  );
}
