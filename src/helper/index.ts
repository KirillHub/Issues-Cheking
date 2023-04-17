export {};
// TODO: implement logic with moving project issue status

/*

const moveIssue = (id: number, newStatus: IssuesStatus, issues: Issue[]) => {
  const issueIndex = issues.findIndex(issue => issue.id === id);
  if (issueIndex !== -1) {
    const updatedIssue = { ...issues[issueIndex], status: newStatus };
    const updatedIssues = [...issues];
    updatedIssues.splice(issueIndex, 1, updatedIssue);
    return updatedIssues;
  }
  return issues;
};

// Использование
const [issues, setIssues] = useState<Issue[]>([]);
const handleDragEnd = (result: DropResult) => {
  const { destination, source, draggableId } = result;
  if (!destination) {
    return;
  }
  if (destination.index === source.index && destination.droppableId === source.droppableId) {
    return;
  }
  const newIssues = moveIssue(
    parseInt(draggableId),
    destination.droppableId as IssuesStatus,
    issues
  );
  setIssues(newIssues);
};

*/
