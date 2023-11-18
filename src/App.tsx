import { ActionTip, Box } from "./App.styled";
import FilesExplorer from "./components/FilesExplorer";

function App() {
  return (
    <Box>
      <FilesExplorer />
      <ActionTip>
        Right-click on a file or folder to delete or to add a new file or folder
      </ActionTip>
    </Box>
  );
}

export default App;
