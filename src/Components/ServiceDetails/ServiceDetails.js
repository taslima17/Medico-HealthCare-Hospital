import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useJson from '../../Hooks/useJson';

const ServiceDetails = () => {
    const [service, setService] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json()).then(data => setService(data))
    }, [])
    const currentService = service.find(s => s.id === id);
    console.log(service, id, currentService);
    return (
        <div className="p-5 d-flex flex-lg-nowrap flex-sm-wrap">
            <img src={currentService?.img} className="w-50 p-5" alt="" />
            <div className="p-5">
                <h5>{currentService?.name}</h5>
                <p>{currentService?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;