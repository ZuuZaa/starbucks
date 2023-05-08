import './style.scss';

export const Map = () => {
    return (
        <div class="mapouter">
            <iframe
                class="gmap_canvas"
                src="https://maps.google.com/maps?q=starbucks nizami&t=&z=10&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title='warm yourself with coffee, not with love )'
            >
            </iframe>
        </div>
    )
}
