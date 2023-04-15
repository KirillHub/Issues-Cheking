import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ColorModeContext, useMode } from "../../../styles/theme";

export const IconToggleThemeMode = () => {
  // const [theme, colorMode] = useMode();
  //   const colors = tokens(theme.palette.mode);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </Box>
  );
};
