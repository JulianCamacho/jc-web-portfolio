import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTheme } from '../utils/ThemeContext';
import DetailModal from '../modals/DetailModal';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DocModal from '../modals/DocModal';
import BadgeRenderer from '../utils/BagdeRenderer';
//import Reveal from '../utils/Reveal';
import VideoModal from '../modals/VideoModal';
import NotebookModal from '../modals/NotebookModal';

/**
 * https://swiperjs.com/demos#pagination
 */
export default function MySwiper(props) {

    const { isDarkMode } = useTheme();

    useEffect(() => {
        console.log('Dark mode has changed:', isDarkMode);
        const elementToUpdate = document.getElementById('badges');
        if (elementToUpdate) {
            elementToUpdate.classList.toggle('dark-mode', isDarkMode);
        }
    }, [isDarkMode]);

    return (
        <>
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
                        <div className='slide--img--container'>
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <h4 className="text-md">
                                    Course: {item.course}
                                </h4>
                                <p className="text-md">
                                    {item.short_description}
                                </p>

                                <BadgeRenderer id="badges" projectTools={item.main_tools} 
                                    flex={'card--tool--container'}
                                    bg_color={"f8f8f8"} />

                                <hr className="card--divider" />

                                <div className="swiper--card--icons">
                                    <ul>
                                        {item.src_ctrl === "GitHub" &&

                                            <li>
                                                <a
                                                    href={item.link}
                                                    className="navbar--content"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25.5" viewBox="0 0 496 512"><path className="footer--logo" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                                </a>
                                            </li>

                                        }

                                        {item.src_ctrl === "Azure" &&

                                            <li>
                                                <a
                                                    href={item.link}
                                                    className="navbar--content"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <svg viewBox="0 0 24 24" height="25" width="25.5" xmlns="http://www.w3.org/2000/svg"><path className="footer--logo" d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z" /></svg>
                                                </a>
                                            </li>

                                        }

                                        <li><DetailModal project={item} /></li>
                                        {item.docs && <li><DocModal project={item} /></li>}
                                        {item.doc &&

                                            <li>
                                                <div className="modal--button-container">
                                                    {/* eslint-disable-next-line*/}
                                                    <a
                                                        href={item.doc}
                                                        className="navbar--content"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <svg viewBox="0 0 24 24" height="26" width="26" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className='footer--logo--2' d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M15 15C13.3431 15 12 16.3431 12 18C12 19.6569 13.3431 21 15 21M19 21C20.6569 21 22 19.6569 22 18C22 16.3431 20.6569 15 19 15M15 18H19" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                                                        </a>
                                                </div>
                                            </li>

                                        }
                                        {item.videos && <li><VideoModal project={item} /></li>}
                                        {item.notebooks && <li><NotebookModal project={item} /></li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}