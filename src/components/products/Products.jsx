import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div className='Container'>
                <nav className='my-20 '>
                    <span className='w-full flex gap-5 font-medium text-[18px] leading-[32px] '>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black underline underline-offset-8'
                                    : 'text-[#8B8B8B]'
                            }
                        >
                            New Arrivel
                        </NavLink>
                        <NavLink
                            to={'/bestSeller'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black underline underline-offset-8'
                                    : 'text-[#8B8B8B]'
                            }
                        >
                            Bestseller
                        </NavLink>
                        <NavLink
                            to={'/featuredProducts'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-black underline underline-offset-8'
                                    : 'text-[#8B8B8B]'
                            }
                        >
                            Featured Products
                        </NavLink>
                    </span>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default Products
