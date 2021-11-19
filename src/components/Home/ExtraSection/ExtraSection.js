import React from 'react';
import sunscreenUser from '../../../images/sunscreenUser.png'

const ExtraSection = () => {
    return (
        <div className=' d-flex justify-content-evenly align-items-center pt-5 pb-4 mt-5' style={{ backgroundColor: 'rgb(240, 245, 245)' }}>
            <div className="p-5">
                <h2 className="fw-bold pb-4">Why Should you use Sunscreen?</h2>
                <h5 className='mt-3 fs-5 text-start'>1. It Protects Your Skin from UV Rays<br /><br /> 2.It Lowers Your Skin Cancer Risk.<br /><br />3.It Prevents Premature Aging of the Skin<br /><br />4. It Helps Maintain an Even Skin Tone.<br /><br />5. Prevent skin discoloration and reduce inflammation</h5>
            </div>
            <div>
                <img className='mb-3' style={{ padding: '5px', margin: '5px', borderRadius: '5px', boxShadow: '0 0 8px 0 grey', width: '450px', height: '300px' }} src={sunscreenUser} alt="" />
            </div>


        </div>
    );
};

export default ExtraSection;