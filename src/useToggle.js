import { useState, useCallback } from "react";

export const useToggle = initial => {
  const [showMenu, setShowMenu] = useState(initial);

  return [showMenu, useCallback(() => setShowMenu(status => !status))];
};
