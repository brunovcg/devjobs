import {WindowSizeProvider} from './windowSize';
import {TokenProvider} from './TokenProvider';

const providers = ({children}) => {

return(
    <TokenProvider>
    <WindowSizeProvider>
        {children}
    </WindowSizeProvider>
    </TokenProvider>
)

}

export default providers