import {createStore} from "redux";
import connection from "./connection";

let store=createStore(connection);
export default store;