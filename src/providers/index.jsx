import {WindowSizeProvider} from './windowSize'

const providers = ({children}) => {

return(

    <WindowSizeProvider>
        {children}
    </WindowSizeProvider>

)

}

export default providers