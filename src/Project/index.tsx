import { Button, IconButton, Theme, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { CustomThemeOptions } from "../types/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { tokens, useMode } from "../styles/theme";
import { IconToggleThemeMode } from "../shared/component/IconToggleThemeMode/IconToggleThemeMode";
import { useNavigate } from "react-router-dom";
import { links } from "../router";

const Project = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // <Theme & CustomThemeOptions>
  // const [theme, colorMode] = useMode();
  // const colors = tokens(theme.palette.mode);
  // colors.primary[400]
  // console.log(theme);

  // const theme = useTheme();

  return (
    <Box>
      <IconToggleThemeMode />

      <a href='#' style={{ color: theme.customMixins.link() }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, dignissimos. Vero quod
        dolores illum totam sunt, voluptate, quo est perspiciatis harum id quaerat blanditiis
        praesentium? Incidunt quam fuga sit molestiae.
      </a>

      <Button sx={{ color: "white" }} onClick={() => navigate(links.issueCard)}>
        go to issue card
      </Button>
    </Box>
  );
};

export default Project;
