import React, {useState, useEffect} from 'react'
import NavCard from './NavCard'
import '../styles/NavOption.css'
// {miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories}

const NavOption = (data) => {
    console.log(data);
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/miphone') {
            return setMiPhoneToggle(true);
        }
        if (window.location.pathname === '/redmiphone') {
            return setRedmiPhoneToggle(true);
        }
        if (window.location.pathname === '/tv') {
            return setTvToggle(true);
        }
        if (window.location.pathname === '/laptop') {
            return setLaptopToggle(true);
        }
        if (window.location.pathname === '/fitness') {
            return setFitnessToggle(true);
        }
        if (window.location.pathname === '/home') {
            return setHomeToggle(true);
        }
        if (window.location.pathname === '/audio') {
            return setAudioToggle(true);
        }
        if (window.location.pathname === '/accessories') {
            return setAccessoriesToggle(true);
        }
    }, []);

    return (
        <div className='navOption'>
            {
                miPhoneToggle ? data.miphones.map((item, index) => {
                    return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                })
                    : null
            }
            {
                redmiPhoneToggle ? data.redmiPhones.map((item, index) => {
                    return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                })
                    : null
            }
            {
                tvToggle ? data.tv.map((item, index) => {
                    return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                })
                    : null
            }
            {
                laptopToggle ? data.laptop.map((item, index) => {
                    return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                })
                    : null
            }
            {
                fitnessToggle ? data.fitnessAndLifestyle.map((item, index) => {
                    return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                    })
                        : null
                }
                {
                    homeToggle ? data.home.map((item, index) => {
                        return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                    })
                        : null
                }
                {
                    audioToggle ? data.audio.map((item, index) => {
                        return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                    })
                        : null
                }
                {
                    accessoriesToggle ? data.accessories.map((item, index) => {
                        return <NavCard name={item.name} price={item.price} image={item.image} key={item.image}></NavCard>
                    })
                        : null
                }
        </div>
    )
}

export default NavOption