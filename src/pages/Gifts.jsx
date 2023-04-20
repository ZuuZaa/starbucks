import { Slider } from 'features/gifts/slider ';
import {giftsData} from 'utils/gifts';

export const Gifts = () => {
  return (
    <main className='page gift-page'>
<Slider data={giftsData[0].cards}/>




    </main>
  )
}
