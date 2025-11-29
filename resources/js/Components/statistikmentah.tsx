export default function NavbarUser() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5 md:px-10 lg:px-40">
                    <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                        {/* TopNavBar */}
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-300/20 dark:border-b-[#243647] px-4 md:px-10 py-3">
                            <div className="flex items-center gap-4 text-slate-800 dark:text-white">
                                <div className="size-6 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Disaster Info</h2>
                            </div>
                            <div className="hidden md:flex flex-1 justify-end gap-8">
                                <div className="flex items-center gap-9">
                                    <a className="text-slate-600 dark:text-white text-sm font-medium leading-normal" href="#">Home</a>
                                    <a className="text-slate-600 dark:text-white text-sm font-medium leading-normal" href="#">Live Map</a>
                                    <a className="text-primary dark:text-primary text-sm font-bold leading-normal" href="#">Regional Statistics</a>
                                    <a className="text-slate-600 dark:text-white text-sm font-medium leading-normal" href="#">About Us</a>
                                </div>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Report Incident</span>
                                </button>
                            </div>
                        </header>
                        <main className="flex-1 p-4 md:p-6 lg:p-8">
                            {/* PageHeading */}
                            <div className="flex flex-wrap justify-between gap-3 pb-4">
                                <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Disaster Statistics Dashboard</p>
                            </div>
                            {/* Chips / Filters */}
                            <div className="flex flex-wrap gap-3 py-3 overflow-x-auto">
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#243647] pl-4 pr-2">
                                    <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal">Region: All Indonesia</p>
                                    <span className="material-symbols-outlined text-slate-600 dark:text-white text-base">expand_more</span>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#243647] pl-4 pr-2">
                                    <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal">Disaster Type: All</p>
                                    <span className="material-symbols-outlined text-slate-600 dark:text-white text-base">expand_more</span>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-[#243647] pl-4 pr-2">
                                    <p className="text-slate-800 dark:text-white text-sm font-medium leading-normal">Time Range: This Year</p>
                                    <span className="material-symbols-outlined text-slate-600 dark:text-white text-base">expand_more</span>
                                </button>
                            </div>
                            {/* Map */}
                            <div className="flex px-0 py-3">
                                <div className="w-full bg-center bg-no-repeat aspect-[2/1] bg-cover rounded-xl object-cover border border-slate-200 dark:border-slate-800" data-alt="Interactive heat map of Indonesia showing disaster risk levels across different provinces." data-location="Indonesia" ></div>
                            </div>
                            {/* Stats */}
                            <div className="flex flex-wrap gap-4 py-4">
                                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65]">
                                    <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-normal">Total National Incidents</p>
                                    <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">1,245</p>
                                </div>
                                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65]">
                                    <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-normal">Fatalities</p>
                                    <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">312</p>
                                </div>
                                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65]">
                                    <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-normal">Estimated Losses</p>
                                    <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">Rp 5.7 T</p>
                                </div>
                                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65]">
                                    <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-normal">Most Impacted Region</p>
                                    <p className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight">West Java</p>
                                </div>
                            </div>
                            {/* Charts Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-4">
                                {/* Bar Chart */}
                                <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65]">
                                    <h3 className="text-slate-800 dark:text-white text-lg font-bold">Top 10 Regions by Incident Count</h3>
                                    <div className="w-full">
                                        <img alt="A bar chart showing the top 10 regions with the most disaster incidents. West Java is the highest." className="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu2DIqSaQrtecZqftjxEASxiJ5yxV5aZcB4rXbkiP3ZBec9632zUlBukAoA7UmbnIlfC_hB09iHgMLrcrzw-awaBcdvMvmvxyknLlUGavJxRN1i4m31oPASzPTYE5QOfmXKZ5IkUWV1724nBGlxk_2hIAnqWEUaqTbSE1kZNBc0hGUzyziers6N5DM66YccTZMBL_R3n7NBEBAMq6keoLCJbPlX34qC8Ms5v9KCuSzc-u7PyTFR8yPEu4Vxyl9IrB5OfB5OjzxZ00d" />
                                    </div>
                                </div>
                                {/*Pie Chart*/}
                                <div className="lg:col-span-1 flex flex-col gap-4 rounded-xl p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65]">
                                    <h3 className="text-slate-800 dark:text-white text-lg font-bold">Disaster Type Distribution</h3>
                                    <div className="w-full flex items-center justify-center">
                                        <img alt="A doughnut chart showing the distribution of disaster types. Flood is the most common at 45%." className="w-full max-w-xs h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuexVL0GdqykjPWZMkc7-LGYe9p5bJazFS5w7K3b_N6IyboO2Y-hi3mcoV4sNblp62NG02L6Q4hr9-xjIyJr4W9xgpg6xYMT2hyrOJI_85g5x_b_vuCKz2db46vlLtEORh_3zNi91ssJML2YL5wPdT1MNV1vfUnxgSciP09QqXxbIRIVnHoSCtjIJ_TX0RizsDdGTfcE08KKY5y_iDdQZm5ZzF8fH_osFdgrwykxCq5dpt1Gbgc1FtLCJ_yHDkx1Mdc7iCWexBJ8iO" />
                                    </div>
                                </div>
                            </div>
                            {/* Data Table Section */}
                            <div className="flex flex-col gap-4 rounded-xl p-4 sm:p-6 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-[#344d65] mt-4">
                                <h3 className="text-slate-800 dark:text-white text-lg font-bold">Detailed Incident Report</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-200 dark:border-slate-700">
                                                <th className="p-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Region</th>
                                                <th className="p-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Disaster Type</th>
                                                <th className="p-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Date</th>
                                                <th className="p-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Fatalities</th>
                                                <th className="p-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                            <tr>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Bogor, West Java</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Landslide</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">2023-11-15</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">5</td>
                                                <td className="p-3 text-sm"><span className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-900 dark:text-green-300">Handled</span></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Padang, West Sumatra</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Earthquake</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">2023-10-28</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">12</td>
                                                <td className="p-3 text-sm"><span className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-900 dark:text-green-300">Handled</span></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Semarang, Central Java</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Flood</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">2023-10-05</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">2</td>
                                                <td className="p-3 text-sm"><span className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-900 dark:text-green-300">Handled</span></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Jakarta</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">Flood</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">2023-09-21</td>
                                                <td className="p-3 text-sm text-slate-700 dark:text-slate-300">1</td>
                                                <td className="p-3 text-sm"><span className="inline-block px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-200 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Ongoing</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </main>
                        <footer className="text-center py-6 mt-8">
                            <p className="text-xs text-slate-500 dark:text-slate-400">Data sourced from BNPB, updated as of 24 November 2023.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}