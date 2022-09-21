import { Input, InputContainer } from "./styledComponents";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const SearchInput = (props) => {
  const { value, change, clear } = props;
  return (
    <InputContainer>
      <Input value={value} onChange={change} placeholder="Name" />
      {value.length === 0 ? <SearchIcon /> : <CloseIcon onClick={clear} />}
    </InputContainer>
  );
};
