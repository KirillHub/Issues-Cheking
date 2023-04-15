import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { links } from "../../router";

const IssueCard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ fontSize: "2em", color: "red" }}>
      WE IN ISSUE CARD!!!!
      <Button sx={{ color: "white" }} onClick={() => navigate(links.project)}>
        {" "}
        go to main page
      </Button>
    </Box>
  );
};

export default IssueCard;
