import Loader from "react-loader-spinner";

export default function Loading() {
    return(
        <Loader
            type="ThreeDots"
            color="#FFFFFF"
            height={13}
            width={51}
        />
    );
}