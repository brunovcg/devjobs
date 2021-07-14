import { WindowSizeProvider } from "./windowSize";
import { TokenProvider } from "./TokenProvider";
import { ResumeProvider } from "./ResumeDownload";

const providers = ({ children }) => {
  return (
    <TokenProvider>
      <ResumeProvider>
        <WindowSizeProvider>{children}</WindowSizeProvider>
      </ResumeProvider>
    </TokenProvider>
  );
};

export default providers;
