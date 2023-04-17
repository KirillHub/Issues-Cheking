import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { links } from "../../router";
import { Draggable } from "react-beautiful-dnd";
import { AssigneeAvatar, Assignees, Bottom, Issue, IssueLink, Title } from "./styles";

const ProjectBoardListIssue = ({ projectUsers, issue, index }: any) => {
  const navigate = useNavigate();

  const url = useResolvedPath("").pathname; //TODO: later check!

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <IssueLink
          to={`${url}/issues/${issue.id}`}
          ref={provided.innerRef}
          data-testid='list-issue'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
            <Title>{issue.title}</Title>
            <Bottom>
              <div>
                ЗАГЛУШКА
                {/* <IssueTypeIcon type={issue.type} />
                <IssuePriorityIcon priority={issue.priority} top={-1} left={4} /> */}
              </div>
              <Assignees>
                {assignees.map(user => (
                  <AssigneeAvatar
                    key={user.id}
                    size={24}
                    avatarUrl={user.avatarUrl}
                    name={user.name}
                  />
                ))}
              </Assignees>
            </Bottom>
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
};

export default ProjectBoardListIssue;

/*
    <Box sx={{ fontSize: "2em", color: "red" }}>
      WE IN ISSUE CARD!!!!
      <Button sx={{ color: "white" }} onClick={() => navigate(links.project)}>
        {" "}
        go to main page
      </Button>
    </Box>
*/
