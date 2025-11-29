export default function SidebarToggle({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="mt-1 p-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-center"
    >
      <span className="material-symbols-outlined">
        {open ? "chevron_left" : "chevron_right"}
      </span>
    </button>
  );
}
