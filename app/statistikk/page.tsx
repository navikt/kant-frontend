import type { Metadata } from 'next';
import { Card } from '@/components/cards';
import { ChartsWrapper } from '@/components/charts-wrapper/charts-wrapper';
import { EChart } from '@/lib/echarts/echarts';
import { PieChart } from '@/lib/echarts/pie-chart';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Statistikk - Kant',
};

export default async function Page() {
  return (
    <ChartsWrapper>
      <Card>
        <EChart
          title="Antall kanter i figurer"
          option={{
            tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
            grid: { left: 16, right: 24, bottom: 16, top: 24, containLabel: true },
            xAxis: { type: 'value', minInterval: 1 },
            yAxis: {
              type: 'category',
              data: ['Trekant', 'Firkant', 'Femkant', 'Sekskant'],
              axisLabel: { width: 110, overflow: 'break' },
            },
            series: [{ name: 'Saker', type: 'bar', data: [3, 4, 5, 6] }],
          }}
        />
      </Card>

      <Card>
        <EChart
          title="Alder på Kanter"
          option={{
            tooltip: { trigger: 'axis' },
            legend: { bottom: 0 },
            grid: { left: 16, right: 24, bottom: 80, top: 24, containLabel: true },
            xAxis: {
              type: 'value',
              name: 'År',
              nameLocation: 'middle',
              nameGap: 30,
              min: 1724,
              max: 2026,
              minInterval: 1,
              axisLabel: { formatter: '{value}' },
            },
            yAxis: { type: 'value', name: 'Alder (år)', min: 0, minInterval: 1 },
            series: [
              {
                name: 'Immanuel Kant',
                type: 'line',
                symbolSize: 8,
                label: { show: true },
                data: [
                  [1724, 0],
                  [1744, 20],
                  [1764, 40],
                  [1784, 60],
                  [1804, 79],
                ],
              },
              {
                name: "N'Golo Kanté",
                type: 'line',
                symbolSize: 8,
                label: { show: true },
                data: [
                  [1991, 0],
                  [2001, 10],
                  [2011, 20],
                  [2021, 30],
                  [2026, 35],
                ],
              },
            ],
          }}
        />
      </Card>

      <Card>
        <PieChart
          title="Andel av totalt antall kanter i en firkant"
          series={[
            {
              name: 'Saker',
              type: 'pie',
              radius: ['35%', '65%'],
              center: ['50%', '42%'],
              label: { show: false },
              data: [
                { name: 'Toppen', value: 25 },
                { name: 'Bunnen', value: 25 },
                { name: 'Venstre', value: 25 },
                { name: 'Høyre', value: 25 },
              ],
            },
          ]}
        />
      </Card>
    </ChartsWrapper>
  );
}
