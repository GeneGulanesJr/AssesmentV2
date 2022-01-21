
import UserProfile from "./views/UserProfile.jsx";
import AddResident from './views/addResident/CreateResident'
import EditResident from './views/EditResident/EditResident'
import JWTDecoder from 'jwt-decode'
import UserList from './views/UserList'
import LandingPage from "./views/Landingpage"
import Service from "./views/Service"
import Contact from "./views/Contact"
import Stack from "./views/Stack"
let admin 
if(localStorage.getItem('resident-token')){
   admin=JWTDecoder(localStorage.getItem('resident-token')).admin
}
var routes = [
  {
    path: "/add-resident",
    name: "Registration",
    icon: "tim-icons icon-calendar-60",
    component: AddResident,
    layout: "/admin"
  },
  {
    path: "/services",
    name: "Services Offered",
    icon: "tim-icons icon-calendar-60",
    component: Service,
    layout: "/admin"
  },
  {
    path: "/contact-page",
    name: "Contact Information",
    icon: "tim-icons icon-calendar-60",
    component: Contact,
    layout: "/admin"
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    icon: "tim-icons icon-calendar-60",
    component: LandingPage,
    layout: "/admin"
  },
  {
    path: "/techstack",
    name: "Tech Stack",
    icon: "tim-icons icon-calendar-60",
    component: Stack,
    layout: "/admin"
  },

  {
    path: "/profile",
    name: "Profile ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  }

];
if(admin){
  routes.push(
    
  {

    path: "/all-User",
    name: "All User ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-refresh-02",
    component: UserList,
    layout: "/admin"

  },
  {
    path: "/all-resident",
    name: "Registration List ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditResident,
    layout: "/admin"
  },
  
  )
}
export default routes;
