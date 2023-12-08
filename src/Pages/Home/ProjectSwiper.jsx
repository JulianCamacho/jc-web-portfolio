import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export default function ProjectSwiper(props) {

    const project = props.projectData;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Swiper
            className='project-swiper'
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            zoom={true}
            modules={[Zoom, Pagination]}
            pagination={pagination}
        >
            {project.imgs?.map((item, index) => (
                <SwiperSlide key={index} className='project--slide'>
                    <div className='project--slide--container'>
                        <img src={item.src} alt="Placeholder" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}