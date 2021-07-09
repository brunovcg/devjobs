import notFound from '../../assets/notfound.png'
import Header from '../../components/Header'

const PageNotFound = () => {

    return(
        <>
        <Header/>
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