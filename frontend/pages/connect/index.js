import { useEffect, useState } from "react";

import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";

function Connect() {
  const [walletAddress, setWalletAddress] = useState("");

  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/test-room",
    height: "600px",
    width: "100%",
  };



  useEffect(() => {
    huddleIframeApp.on("peer-join", (data) =>
      console.log({ iframeData: data })
    );
    huddleIframeApp.on("peer-left", (data) =>
      console.log({ iframeData: data })
    );
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div>
            <h1 className="heading">Schedule a One to One Meeting before final Payment</h1>
          <br />

        </div>
        <div className="frame">
        <HuddleIframe config={iframeConfig} />
        </div>

        
      </div>
    </div>
  );
}

export default Connect;
