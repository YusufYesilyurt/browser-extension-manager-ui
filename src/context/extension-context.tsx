import React, { createContext, use, useMemo, useState } from "react";
import { data } from "../lib/data";
import type { Extension, ButtonFilters } from "../lib/types";

type ExtensionContextType = {
  extensions: Extension[];
  activeFilter: ButtonFilters;
  handleFilterChange: (filter: ButtonFilters) => void;
  handleDeleteExtension: (idToDelete: Extension["id"]) => void;
  handleToggleExtension: (idToToggle: Extension["id"]) => void;
};

export const ExtensionContext = createContext<ExtensionContextType | null>(
  null
);

export const ExtensionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [extensions, setExtensions] = useState<Extension[]>(data);
  const [activeFilter, setActiveFilter] = useState<ButtonFilters>("all");

  function handleDeleteExtension(idToDelete: Extension["id"]) {
    setExtensions((prev) =>
      prev.filter((extension) => extension.id !== idToDelete)
    );
  }
  function handleToggleExtension(idToToggle: Extension["id"]) {
    setExtensions((prev) =>
      prev.map((extension) =>
        extension.id === idToToggle
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  }
  function handleFilterChange(filter: ButtonFilters) {
    setActiveFilter(filter);
  }
  const filteredExtensions = useMemo(() => {
    switch (activeFilter) {
      case "active":
        return extensions.filter((extension) => extension.isActive);
      case "inactive":
        return extensions.filter((extension) => !extension.isActive);
      default:
        return extensions;
    }
  }, [extensions, activeFilter]);

  return (
    <ExtensionContext
      value={{
        extensions: filteredExtensions,
        activeFilter,
        handleDeleteExtension,
        handleToggleExtension,
        handleFilterChange,
      }}
    >
      {/* React 19 ile "ExtensionContext.Provider" yazma zorunluluğu kalktı  */}

      {children}
    </ExtensionContext>
  );
};
/* bizim oluşturduğumuz hook */
export const useExtensionContext = () => {
  const context =
    use(
      ExtensionContext
    ); /* React 19 ile birlikte "useContext" yerine "use" yazarak kullanıyoruz.  */
  if (!context) {
    throw new Error(
      "useExtensionContext bir ExtensionProvider içinde kullanılmalıdır! "
    );
  }
  return context;
};
