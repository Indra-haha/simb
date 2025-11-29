import DynamicAreaChart from "@/Components/ChartAreaInteractive"

const myData = [
  { date: "2024-04-01", "Penguapan air laut": 0, "Kelembaban": 150, "Suhu": 90 },
  { date: "2024-04-02", "Penguapan air laut": 250, "Kelembaban": 180, "Suhu": 120 },
  { date: "2024-04-03", "Penguapan air laut": 167, "Kelembaban": 190, "Suhu": 100 },
  { date: "2024-04-04", "Penguapan air laut": 300, "Kelembaban": 200, "Suhu": 150 },
  { date: "2024-04-05", "Penguapan air laut": 280, "Kelembaban": 170, "Suhu": 130 },
  { date: "2024-04-06", "Penguapan air laut": 320, "Kelembaban": 210, "Suhu": 160 },
  { date: "2024-04-07", "Penguapan air laut": 310, "Kelembaban": 190, "Suhu": 140 },
  { date: "2024-04-08", "Penguapan air laut": 330, "Kelembaban": 220, "Suhu": 170 },
  { date: "2024-04-09", "Penguapan air laut": 340, "Kelembaban": 230, "Suhu": 180 },
  { date: "2024-04-10", "Penguapan air laut": 360, "Kelembaban": 240, "Suhu": 190 },
  { date: "2024-04-11", "Penguapan air laut": 370, "Kelembaban": 250, "Suhu": 200 },
  { date: "2024-04-12", "Penguapan air laut": 380, "Kelembaban": 260, "Suhu": 210 },
  { date: "2024-04-13", "Penguapan air laut": 390, "Kelembaban": 270, "Suhu": 220 },
  { date: "2024-04-14", "Penguapan air laut": 400, "Kelembaban": 280, "Suhu": 230 },
]

const mySeries = [
  { key: "Penguapan air laut", label: "Penguapan Air Laut", color: "#3b82f6" },
  { key: "Kelembaban", label: "Kelembaban", color: "#10b981" },
  { key: "Suhu", label: "Suhu", color: "#f59e0b" },
]

export default function trends() {
  return (
    <DynamicAreaChart
      title="Pengunjung Website"
      description="Jumlah pengunjung berdasarkan perangkat"
      data={myData}
      series={mySeries}
    />
  )
}
