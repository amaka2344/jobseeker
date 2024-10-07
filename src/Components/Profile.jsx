import React from "react";

const Profile = ({name, image, phone, address}) => {
    return (
        <div className="">
            <div className="">
                <img
                    className="img-fluid"
                    src={image}
                    alt="Image"
                />
            </div>
            <div className="profile-info">
                <h1>{name}</h1>
                <address>
                    <p>
                      Address: {address}  {" "}
                        <br /> Phone: {phone} <br /> Email:
                        <a href="#">
                            {" "}
                            <span
                                className="__cf_email__"
                                data-cfemail="167f62657b73566563646c7f7a737173737d3875797b"
                            >
                                [email&#160;protected]
                            </span>
                        </a>
                    </p>
                </address>
            </div>
        </div>
    )
}

export default Profile;


