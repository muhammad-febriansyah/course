import { AxiosInstance } from "axios";
import { route as ziggyRoute } from "ziggy-js";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var snap: any;
    var route: typeof ziggyRoute;
}
