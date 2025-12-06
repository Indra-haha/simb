import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
        {open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faBars} />}
      </span>
    </button>
  );
}
