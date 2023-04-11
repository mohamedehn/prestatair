import { NavLink } from "react-router-dom"

export default function Footer (){

    const footerNavs = [
        {
            href: '/mentions',
            name: 'Mentions légales'
        },
        // {
        //     href: '#contact',
        //     name: 'Contact'
        // },
    ]

    return (
        <footer className="text-gray-500 bg-[#adccd0] px-4 max-w-screen-xl mx-auto">
            <div className="mt-8 items-center justify-between sm:flex">
                <ul className="mt-4 sm:mt-0">
                    &copy; 2023 Prestat'air Tout droit réservé.
                </ul>
                
                <ul className="mt-4 items-center justify-center space-y-5 sm:flex sm:space-x-4 sm:space-y-0 text-gray-500">
                {
                    footerNavs.map((item, idx) => (
                        <li className=" hover:text-gray-800 no-underline text-gray-500" key={idx}>
                            <NavLink to={item.href} key={idx} className="no-underline text-gray-500 hover:text-gray-800">
                                {item.name}
                            </NavLink>
                        </li>
                    ))
                }
                    <li className="hover:text-gray-800 list-none"> 
                        <a href="https://mohamedehn.github.io/portfolio/" className="no-underline text-gray-500 hover:text-gray-800">Powered by Coding Corp</a>
                    </li>
                </ul>
            </div>
            <style jsx="true">{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}