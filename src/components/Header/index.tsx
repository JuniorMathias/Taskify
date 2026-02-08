import { SearchInsert } from "../Input/searchInput/styles";
import { Container, Title, ActionsWrapper } from "./styles"; 
import { ModeButton } from "../Button/modeButton";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export function Header({ search, setSearch, toggleTheme, isDark }: Props) {
  return (
    <Container>
      <Title>Taskify Dashboard</Title>
      
      <ActionsWrapper>
        <SearchInsert
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ModeButton onClick={toggleTheme} mode={isDark} />
      </ActionsWrapper>
    </Container>
  );
}
