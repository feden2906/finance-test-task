import { useSelector, useDispatch } from "react-redux";

import { Select } from "./Select";

export const Info = () => {
  const {lastResponse} = useSelector(({movies}) => movies);

    return (                        // LIVE
        <div>
          <Select/>
          {JSON.stringify(lastResponse)}
        </div>
    );
}
