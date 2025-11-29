"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

interface DynamicAreaChartProps {
  title?: string
  description?: string
  /** Array data berisi tanggal (atau kategori) + nilai-nilai */
  data: Record<string, any>[]
  /** Daftar seri yang ingin ditampilkan di chart */
  series: {
    key: string
    label: string
    color: string
  }[]
}

export default function DynamicAreaChart({
  title = "Dynamic Area Chart",
  description = "Menampilkan data dinamis",
  data,
  series,
}: DynamicAreaChartProps) {
  const [timeRange, setTimeRange] = React.useState("90d")

  // Ambil tanggal paling akhir dari data (asumsi data diurutkan)
  const lastDate = new Date(data[data.length - 1]?.date ?? new Date())

  const filteredData = React.useMemo(() => {
    let daysToSubtract = 90
    if (timeRange === "30d") daysToSubtract = 30
    else if (timeRange === "7d") daysToSubtract = 7

    const startDate = new Date(lastDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)

    // Jika `date` tidak ada (misalnya kamu pakai kategori lain), lewati filter
    return data[0]?.date
      ? data.filter((item) => new Date(item.date) >= startDate)
      : data
  }, [timeRange, data])

  // Buat ChartConfig dari daftar seri
  const chartConfig: ChartConfig = React.useMemo(() => {
    const config: ChartConfig = {}
    for (const s of series) {
      config[s.key] = { label: s.label, color: s.color }
    }
    return config
  }, [series])

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              {series.map((s) => (
                console.log(s),
                <linearGradient key={s.key} id={`fill-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={s.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={s.color} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />

            {/* Render semua series secara dinamis */}
            {series.map((s) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                fill={`url(#fill-${s.key})`}
                strokeWidth={3}
                connectNulls
              />
            ))}

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
