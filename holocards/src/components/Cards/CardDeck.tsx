import './CardDeck.css'
import Card from './Card';
import { card } from '../../data/cardData';

const cardData = card;

const CardDeck = () => {
    return (
        <div className='card__deck'>
            {cardData.map((card: any) => (
                <div className='card__container'>
                    <Card
                        onFrontImage={card.imgUrl}
                        onBackImage={card.backImageUrl}
                        holoStyle={card.holoStyle}
                    />
                </div>
            ))}
        </div>
    );
}

export default CardDeck;