import { Box, TextField, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props<T> {
  results?: T[];
  renderItem(item: T): JSX.Element;
  onChange?: React.ChangeEventHandler;
  onSelect?: (item: T) => void;
  value?: string;
  name: string;
  placeholder?: string;
}

const LiveSearch = <T extends object>({
  results = [],
  renderItem,
  value,
  onChange,
  onSelect,
  name,
  placeholder,
}: Props<T>): JSX.Element => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef<any>(null);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleSelection = (selectedIndex: number) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    onSelect && onSelect(selectedItem);
    resetSearchComplete();
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<any> = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % results.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;

    // hide search results
    if (key === "Escape") {
      resetSearchComplete();
    }

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      handleSelection(focusedIndex);
    }

    setFocusedIndex(nextIndexCount);
  };

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    setDefaultValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);

    if (results.length <= 0) setShowResults(false);
  }, [results]);

  useEffect(() => {
    if (value) setDefaultValue(value);
  }, [value]);

  return (
    <Box sx={{}}>
      <Box
        tabIndex={1}
        onBlur={resetSearchComplete}
        onKeyDown={handleKeyDown}
        sx={{ position: "relative" }}
      >
        <AddBanksTextField
          name={name}
          value={defaultValue}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : `Enter ${name}`}
        />

        {/* Search Results Container */}
        <Box sx={{}}>
          {showResults && (
            <Box
              className="live-search-scroll"
              sx={{
                position: "absolute",
                mt: -1,
                p: 2,
                backgroundColor: "rgba(240, 243, 238, 1)",
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
                borderRadius: "5px",
                maxHeight: "100px",
                overflowY: "auto",
                zIndex: "3",
                width: "228px",
              }}
            >
              {results.map((item, index) => {
                return (
                  <Box
                    key={index}
                    onMouseDown={() => handleSelection(index)}
                    ref={index === focusedIndex ? resultContainer : null}
                    sx={{
                      backgroundColor:
                        index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                      fontSize: mediumScreen ? "14px" : "16px",
                      color: "rgba(20, 48, 42, 1)",
                      mb: "5px",
                      "&:hover": {
                        cursor: "pointer",
                        backgroundColor: "rgba(0,0,0,0.1)",
                      },
                    }}
                    className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                  >
                    {renderItem(item)}
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LiveSearch;

interface AddBanksTextFieldProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  multiline?: boolean;
}

const AddBanksTextField: React.FC<AddBanksTextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  multiline,
}) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      multiline={multiline ? true : false}
      rows={multiline ? (mediumScreen ? 3 : 4) : 1}
      sx={{
        backgroundColor: "rgba(240, 243, 238, 1)",
        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
        borderRadius: "5px",
        "& input": {
          p: "0",
          width: "258px",
          height: mediumScreen ? "32.26px" : "42.26px",
          fontSize: mediumScreen ? "12px" : "16px",
          color: "rgba(170, 50, 45, 1)",
          padding: "0px 12px",
          boxSizing: "border-box",
          "&::placeholder": {
            opacity: "1",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiInputBase-multiline": {
          padding: "0",
        },
        "& textarea": {
          p: "0",
          width: "258px",
          color: "rgba(170, 50, 45, 1)",
          padding: "10px 12px",
          fontSize: mediumScreen ? "12px" : "16px",
          boxSizing: "border-box",
          "&::placeholder": {
            opacity: "1",
          },
        },
      }}
    />
  );
};
