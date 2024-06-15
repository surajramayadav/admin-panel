import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiInvoice } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

type MenuItem = {
    id: number;
    name: string;
    icon: (color: string) => React.ReactElement;
    path: string;
};

const LayoutMenu: MenuItem[] = [
    {
        id: 1,
        name: "Dashboard",
        icon: (color: string) => { return (<RxDashboard size={20} color={color} />) },
        path: "/"
    },
    {
        id: 2,
        name: "Analytics",
        icon: (color: string) => { return (<TbDeviceDesktopAnalytics size={20} color={color} />) },
        path: "/analytics"
    },
    {
        id: 3,
        name: "Invoice",
        icon: (color: string) => { return (<PiInvoice size={20} color={color} />) },
        path: "/invoice"
    },
    {
        id: 4,
        name: "Schedule",
        icon: (color: string) => { return (<AiOutlineSchedule size={20} color={color} />) },
        path: "/schedule"
    },
    {
        id: 5,
        name: "Calendar",
        icon: (color: string) => { return (<IoCalendarOutline size={20} color={color} />) },
        path: "/calendar"
    },

    {
        id: 6,
        name: "Message",
        icon: (color: string) => { return (<IoMailOutline size={20} color={color} />) },
        path: "/message",

    },

    {
        id: 7,
        name: "Settings",
        icon: (color: string) => { return (<CiSettings size={20} color={color} />) },
        path: "/settings",

    },

]

export default function Layout() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 0.2, }}>
                    <div style={{ height: "95vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ marginLeft: 20 }}>
                                <h2> 🚀 Admin Panel</h2>
                            </div>

                            <div style={{ marginTop: 10 }}>
                                {LayoutMenu.map((menu) => {
                                    return (
                                        <div onClick={() => navigate(menu.path)}
                                            style={{ backgroundColor: location.pathname == menu.path ? "#7366F0" : "white", borderRadius: 10, width: "90%" }}>
                                            <div style={{ marginLeft: 20, display: 'flex', alignItems: 'center', }}>
                                                <div>{menu.icon(location.pathname == menu.path ? "white" : "#A9A9A9")}</div>
                                                <p style={{ marginLeft: 10, color: location.pathname == menu.path ? "white" : "#A9A9A9", cursor: "default" }}>{menu.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div style={{ marginTop: 20, marginLeft: 20, display: 'flex', alignItems: 'center' }}>
                            <div><IoIosLogOut size={20} /></div>
                            <p style={{ marginLeft: 10 }}>Logout</p>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 0.8, }}>

                </div>
            </div>
        </div >
    )
}
