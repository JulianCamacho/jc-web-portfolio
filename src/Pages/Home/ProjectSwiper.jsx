import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
            pagination={pagination}
            modules={[Pagination]}
        >
            {projectImgs?.map((item, index) => (
                <SwiperSlide key={index} className='project--slide'>
                    <div className='project--slide--container'>
                        <img src={item} alt="Placeholder" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}