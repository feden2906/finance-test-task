import { useSelector } from "react-redux";

export const Info2 = () => {
  const {dataHistory, lastResponse} = useSelector(({movies}) => movies);

  const info = [...dataHistory, lastResponse];

    return (                             // HISTORY
        <div>
          {JSON.stringify(info)}
        </div>
    );
}
