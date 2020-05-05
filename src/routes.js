
import Index from "views/Index.js";
import Edit from "views/examples/Edit.js";
import Add from "views/examples/Add.js";
import Login from "views/examples/Login.js";
import History from "views/examples/History.js";
import Prints from "views/examples/Prints.js";

var routes = [
  {
    path: "/index",
    name: "Material",
    icon: "fas fa-tools text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/print",
    name: "Prints",
    icon: "fa fa-print text-blue",
    component: Prints,
    layout: "/admin"
  },
  {
    path: "/add",
    name: "Add",
    icon: "fa fa-file text-orange",
    component: Add,
    layout: "/admin"
  },
  {
    path: "/edit",
    name: "Edit",
    icon: "fa fa-edit text-yellow",
    component: Edit,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "History",
    icon: "ni ni-bullet-list-67 text-red",
    component: History,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  // {
  //   path: "/admin_login",
  //   name: "Admin Login",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
