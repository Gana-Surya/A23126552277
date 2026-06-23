import {
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect } from "react";
import { Log } from "../utils/logger";

const filters = [
  "All",
  "Placement",
  "Result",
  "Event",
];

export function NotificationFilter({
  value,
  onChange,
}) {
  useEffect(() => {
    Log(
      "info",
      "component",
      `Filter changed to ${value}`
    );
  }, [value]);

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
    >
      {filters.map((type) => (
        <ToggleButton
          key={type}
          value={type}
        >
          {type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}