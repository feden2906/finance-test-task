import { useSelector } from "react-redux";

export const Info2 = () => {
  const {dataHistory} = useSelector(({movies}) => movies);

    return (                             // HISTORY
        <div>
          {JSON.stringify(dataHistory)}
        </div>
    );
}
