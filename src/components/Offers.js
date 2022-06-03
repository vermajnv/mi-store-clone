import Offer from './Offer'
import '../styles/Offers.css'
function Offers({offers}) {
    return (
        <div className="offerSection">
            {
                offers.map((offer, index) => {
                    return <Offer
                        key={offer.image} index={index} link1={offer.url} url={offer.image}>
                    </Offer>
                })
            }
        </div>
    )
}

export default Offers
