import { Button, IconButton, Theme, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { CustomThemeOptions } from "../types/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { tokens, useMode } from "../styles/theme";
import { IconToggleThemeMode } from "../shared/component/IconToggleThemeMode/IconToggleThemeMode";
import { useNavigate } from "react-router-dom";
import { links } from "../router";
import { ProjectWrapper } from "./styles";

const Project = () => {
  const navigate = useNavigate();
  const theme = useTheme<CustomThemeOptions>(); // <Theme & CustomThemeOptions>
  const bg = tokens(theme.palette.mode);
  // const [theme, colorMode] = useMode();
  // const colors = tokens(theme.palette.mode);

  console.log(bg.grey[100]);

  return (
    <ProjectWrapper theme={theme as Theme & CustomThemeOptions}>
      <IconToggleThemeMode />

      <a href='#' style={{ color: theme.customMixins.link() }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, dignissimos. Vero quod
        dolores illum totam sunt, voluptate, quo est perspiciatis harum id quaerat blanditiis
        praesentium? Incidunt quam fuga sit molestiae.
      </a>

      <Button sx={{ color: "white" }} onClick={() => navigate(links.issueCard)}>
        go to issue card
      </Button>
    </ProjectWrapper>
  );
};

export default Project;
