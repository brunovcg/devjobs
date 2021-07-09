import notFound from '../../assets/notfound.png'
import Header from '../../components/Header'
import sun from '../../assets/sun.png'

const PageNotFound = () => {

    return(
        <>
        <Header/>
        <img src={sun} alt="sun" />
        <div>
        <p className="notFoundText">This Page is Not on the Map</p>
        <figure>
            <img src={notFound} alt="notFound" />
        </figure>
        </div>
        </>

    )
}

export default PageNotFound