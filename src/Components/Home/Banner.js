import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import useJson from '../../Hooks/useJson';


const Banner = () => {

    const [data] = useJson("Slider");

    console.log(data)
    return (
        <Carousel >

            {
                data.map(s => <Carousel.Item key={s.id} className="" style={{ height: "600px" }}>
                    <img
                        className="d-block w-100"
                        src={s.img} style={{ opacity: "0.6", background: " rgba(76, 175, 80, 0.3)", height: "800px" }}
                        alt=""
                    />
                    <Carousel.Caption className="mb-5 pb-5 text-white">
                        <h1 className="display-1 fw-bold pb-5" >{s.title}</h1>
                        <p className="fs-5 pb-5 "  >{s.info}</p>

                    </Carousel.Caption>
                </Carousel.Item>)
            }

        </Carousel>
    );
};

export default Banner;