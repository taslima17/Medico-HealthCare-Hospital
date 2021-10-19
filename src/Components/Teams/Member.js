import React from 'react';

const Member = (props) => {
    const { name, AcademicRank, SignificanceToPatientCare, imgUrl, PrimaryAppointment } = props.info;
    return (
        <div className="d-flex p-5 flex-lg-nowrap flex-wrap shadow-lg m-4  " style={{ textAlign: "left" }}>
            <div className="ps-3">
                <img src={imgUrl} width="200px" alt="" />
                <h5>{name}</h5>
                <p></p>
            </div>
            <div className="ps-5">
                <h5>{AcademicRank}</h5>
                <h4>Significance To Patient Care</h4><br />
                <p>{SignificanceToPatientCare}</p>
                <h4>Primary Appointment</h4>
                <p>{PrimaryAppointment}</p>
            </div>
        </div>
    );
};

export default Member;