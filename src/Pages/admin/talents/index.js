import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TalentCard } from '../../../Components';

export const Talents = () => {

    const [Talents, setTalents] = React.useState([]);

    useEffect(() => {

        const fetchTalents = async () => {


            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents`);
            const data = await response.json()
            const item = data.data;
            const list = Object.values(item);

            console.log(list);
            setTalents(list);
        }
        fetchTalents();
    }, []);
    return (
        <div className="pages-container">
            <h4 className="mt-5"><b>Talents</b></h4>

            <div className="mt-5 talent_add rounded align-items-center d-flex flex-wrap">

                <input className={"p-2 rounded border greyBG"} placeholder={"Search by Name, Business Type"} />
                <Link to={"/new_talent"} className={"primaryText border h-100 px-5 text-white rounded font-weight-bold"}>NEW TALENT</Link>

            </div>

            <div className={"my-5"}>
                <TalentCard Talents={Talents} setTalents={setTalents} />
            </div>

        </div>
    )
}
