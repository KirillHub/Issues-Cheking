import { CircularProgress, circularProgressClasses, CircularProgressProps } from "@mui/material";
import { SpinnerBox } from "./styles";

const SpinnerWrapper = (props: CircularProgressProps & { spinnerSize?: number }) => {
  const { spinnerSize, ...rest } = props;

  return (
    <SpinnerBox>
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          color: theme => theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round"
          }
        }}
        size={spinnerSize ? spinnerSize : 150}
        thickness={4}
        {...props}
      />
    </SpinnerBox>
  );
};

export default SpinnerWrapper;
