export const StyledTd = ({ children }: { children: React.ReactNode }) => {
  return (
    <td
      className={
        "nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600"
      }
    >
      {children}
    </td>
  );
};
