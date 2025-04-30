import React from "react";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "@/constants/wallet";
import { projectId } from "@/constants/wallet";

interface ConnectWalletProps {
 
  className: string;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ 
  className,
}) => {
  return (
    <ConnectButton
      client={client}
      wallets={[
        createWallet("io.metamask"),
        createWallet("walletConnect"),
      ]}
      recommendedWallets={[createWallet("io.metamask")]}
      walletConnect={{ projectId }}
      showAllWallets={false}
      connectButton={{
        label: "Connect Wallet",
        className: className,
        style: {   
            height: "auto",
            padding:"auto",
            margin:"auto",
          }
      }}
      connectModal={{
        title: "Just Cats",
        titleIcon: "/images/favicon.png",
        size: "compact",
      }}
      appMetadata={{
        name: "Just Cats",
        description:
          "The first 3D animated series where the User writes the story.",
        logoUrl: "https://justcats.tv/images/webclip.png",
        url: "https://justcats.tv",
      }}
    />
  );
};

export default ConnectWallet;
