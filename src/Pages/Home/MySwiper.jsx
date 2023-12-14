import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import MyModal from './MyModal';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MySwiper(props) {
    return (
        <Swiper
            className='my-swiper'
            spaceBetween={24}
            loop={false}
            grabCursor={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }}
            modules={[Navigation, Pagination]}
        >
            {props.projects.map((item, index) => (
                <SwiperSlide key={index} className='my-swiper-slide'>
                    <img src={item.src} alt="Placeholder" />
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">
                                {item.title}
                            </h3>
                            <p className="text-md">
                                {item.description}
                            </p>
                            <a className="text-sm portfolio--link" href={item.link}
                                target="_blank" rel="noreferrer">
                                View source code in GitHub
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <MyModal project={item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}