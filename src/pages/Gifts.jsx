import { Bulk } from 'features/gifts/bulk';
import { GiftsExtra } from 'features/gifts/giftsExtra';
import { Slider } from 'features/gifts/slider ';
import { giftsData } from 'utils/gifts';

export const Gifts = () => {
  return (
    <main className='page gift-page'>
      <Slider data={giftsData[0].cards} title='Featured' />
      <GiftsExtra/>
      {
        giftsData.slice(1).map(item => <Slider data={item.cards} title={item.category} />)
      }
      <Bulk/>
    </main>
  )
}
