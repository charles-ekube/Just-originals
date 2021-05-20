import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TalentCard, Sidebar, SidebarToggle, AdminNav } from '../../../Components';
import { MdMenu } from 'react-icons/md';

export const Talents = () => {

    const [Talents, setTalents] = React.useState([]);
    const [EmptyState, setEmptyState] = React.useState("");
    

    useEffect(() => {

        const fetchTalents = async () => {


            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents`);
            const data = await response.json()
            const item = data.data;
            if(item) {
                const lists = Object.values(item);
                setTalents(lists);
                
              }
              if (!item) {
                setEmptyState("No Talents Found.");
              }
            // const list = Object.values(item);

            // console.log(list);
            
        }
        fetchTalents();
    }, []);


   


    return (

        <>
        <Sidebar/>
        <AdminNav/>
    
        <div className="pages-container">
            <h4 className="mt-5"><b>Talents</b></h4>

            <div className="mt-5 talent_add rounded align-items-center d-flex flex-wrap">

                <input className={"p-2 rounded border greyBG"} placeholder={"Search by Name, Business Type"} />
                <Link to={"/new_talent"} className={"primaryText border h-100 px-5 text-white rounded font-weight-bold"}>NEW TALENT</Link>

            </div>

            <div className={"my-5"}>
                <TalentCard Talents={Talents} setTalents={setTalents} />
                <div className="pt-5">{EmptyState}</div>
            </div>

        </div>
        </>
    )
}
