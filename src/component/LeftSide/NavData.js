import Appointement from "../Pages/Appointment/Appointement";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const NavData = [
    {
          title : 'Dashboard',
          icon : 'fa fa-th',
          link : '/',
          page : <Dashboard/>
    },
    {
        title : 'Appointment',
        icon : 'fa fa-user',
        link : '/appointment',
        page : <Appointement/>
    },
    {
        title : 'Medical Test',
        icon : 'fa fa-twitter',
        link : '/medicalcenter'
    },
    {
        title : 'Medical Report',
        icon : 'fa fa-pie-chart',
        link : '/medicalreport'
    },
    {
        title : 'Calendar',
        icon : 'fa fa-calendar',
        link : '/calendar'
    },
    {
        title : 'Logout',
        icon : 'fa fa-sign-out',
        link : '/logout'
    }

]