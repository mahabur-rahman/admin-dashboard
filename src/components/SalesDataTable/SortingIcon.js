import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

const SortingIcon = ({ viewOrder }) => {
  return (
    <div className="sortable-icons">
      <ArrowDropDown
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "1px",
          opacity: `${viewOrder === "desc" ? "0.1" : ".5"}`,
        }}
      />
      <ArrowDropUp
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "1px",
          opacity: `${viewOrder === "asc" ? "0.1" : ".5"}`,
        }}
      />
    </div>
  );
};

export default SortingIcon;
