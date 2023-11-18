import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading={'Please Provide '} heading={'payment'}></SectionTitle>
            <h2 className='text-3xl'>Payment Method</h2>
        </div>
    );
};

export default Payment;