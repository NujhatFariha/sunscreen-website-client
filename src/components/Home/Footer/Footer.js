import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(82, 122, 122)' }}>
            <div className="d-flex align-items-center justify-content-evenly p-5">
                <div classname="">
                    <div className="text-light">
                        <h1 className="mb-4" style={{ color: 'rgb(242, 197, 252)' }}>Cool Skin</h1>
                        <h6>56/8 North Badda, <br />Dhaka,Bangladesh</h6>
                    </div>
                </div>
                <div className="">
                    <div className="text-light">
                        <h3 className="mb-3">Contact us</h3>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +8801916554211</h6>
                        <h6><i class="fas fa-phone-alt pe-1"></i> +8801616597781</h6>
                        <h6><i class="fas fa-briefcase pe-1"></i> +45655426713</h6>
                        <h6><i class="fas fa-envelope pe-1"></i> coolSkin@gmail.com</h6>
                    </div>

                </div>
                <div className="">
                    <div className="text-light">
                        <h4 className="mb-3">Follow Us</h4>
                        <i class="fab fa-facebook-square fs-2"></i>
                        <i class="fab fa-instagram-square fs-2 ps-2"></i>
                        <i class="fab fa-linkedin fs-2 ps-2"></i>
                        <i class="fab fa-google-plus-square fs-2 ps-2"></i>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;