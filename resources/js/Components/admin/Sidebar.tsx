import { usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const { url } = usePage(); // <-- Dapatkan URL sekarang
  return (
    <aside
      className={`flex h-screen flex-col bg-white dark:bg-[#2D3748] border-r 
      border-slate-200 dark:border-slate-700 sticky top-0 transition-all duration-300 
      ${open ? "w-64" : "w-20"}`}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {[
              { icon: <FontAwesomeIcon icon={faHome} />, label: "Dashboard", route: "/Admin/Dashboard" },
              // { icon: "article", label: "Manajemen Berita", route: "/Admin/Manajemen" },
              // { icon: "bar_chart", label: "Manajemen Statistik", route: "/Admin/Statistika" },
            ].map((item, i) => {
              const isActive = url.startsWith(item.route); 
              return(
              <a
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                    ? "bg-primary/20 dark:bg-primary/30 text-primary dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                href={item.route}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {open && <p className="text-sm font-medium">{item.label}</p>}
              </a>
            )
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
