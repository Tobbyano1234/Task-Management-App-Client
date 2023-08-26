import React, { PropsWithChildren } from "react";
import { unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import { createBrowserHistory } from "history";

const history: any = createBrowserHistory();

const CustomRouter: React.FC<PropsWithChildren> = ({ children, ...props }) => {
    return (
        <HistoryRouter history={history} {...props}>
            {children}
        </HistoryRouter>
    );
};

export const rootNavigate = (to: string) => {
    history.push(to);
};

export default CustomRouter;