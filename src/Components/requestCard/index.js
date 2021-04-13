import React from 'react';
import user from "../../Assets/ex1.png";
import thrash from "../../Assets/thrash.svg";

export const RequestCard = () => {
    return (
        <div className="bg-white border p-4 align-items-center requestCard mb-2">
            <img src={user} alt={""} className={""} width={48} height={48} style={{ objectFit: "cover" }} />

            <div>
                <h6>Uju Okeke</h6>
                <p>CEO Ju’s Fashion</p>
            </div>

            <div>
                <h6>ujuO@gmail.com</h6>
                <p>+2348 090 2345 234</p>
            </div>

            <div>
                <p>
                    Hello, My name is Uju Okeke, the CEO of Ju’s Fashion. My company  deals
                    on Fashion designing of both female and male clothing. Please i’ll be needing
                    your assistant in managing my company.
                </p>
            </div>

            <div>
                <img src={thrash} />
            </div>

        </div>
    )
}
