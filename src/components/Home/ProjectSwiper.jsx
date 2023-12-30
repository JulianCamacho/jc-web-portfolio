import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectSwiper(props) {

    const projectImgs = props.projectData;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Swiper
            className='project-swiper'
            autoHeight={true}
            pagination={pagination}
            navigation={true}
            zoom={true}
            modules={[Zoom, Navigation, Pagination]}
        >
            {projectImgs?.map((item, index) => (
                <SwiperSlide key={index} className='project--slide'>
                    <div className='swiper-zoom-container'>
                        <img src={item} alt="Placeholder" className='project--slide--container--img'/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}