import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TalentCard, Sidebar } from '../../../Components';

export const Talents = () => {

    const [Talents, setTalents] = React.useState([]);

    useEffect(() => {

        const fetchTalents = async () => {


            const response = await fetch(`https://just-original.herokuapp.com/api/v1/talents`);
            const data = await response.json()
            const item = data.data;
            if(item) {
                const lists = Object.values(item);
                setTalents(lists);
                
              }
              else {
                  return <div>No projects found</div>
              }
            // const list = Object.values(item);

            // console.log(list);
            
        }
        fetchTalents();
    }, []);


    const [showNav, setShowNav] = React.useState(false);
    const handleShowNav = () => {
        setShowNav(prev => !prev);
   }


    return (

        <>
        <Sidebar showNav={showNav} setShowNav={setShowNav}/>
        <button
       onClick={handleShowNav}
       className='open-menu'
   ></button>
    
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
        </>
    )
}
