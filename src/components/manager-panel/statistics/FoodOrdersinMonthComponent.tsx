import {
  useFoodStatistics,
  useSelectedStatisticsMonth,
  useSelectedStatisticsYear,
  useSetStatisticsMonth,
  useSetStatisticsYear,
} from "@/backend-layer/food-ui";
import { CalendarComponent } from "@/components/calendar";
import { NumberDropDown } from "@/components/inputs/dropdowns";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const FoodOrdersinMonthComponent = () => {
  const statistics = useFoodStatistics();
  const month = useSelectedStatisticsMonth();
  const year = useSelectedStatisticsYear();
  const setMonth = useSetStatisticsMonth();
  const setYear = useSetStatisticsYear();
  return (
    <>
      <div className="flex gap-2 ">
        <div>
          <div className="font-poppins text-[24px]">Year:</div>
          <div className="h-[40px]">
            <NumberDropDown
              min={1973}
              max={2024}
              selected={year}
              setNumber={setYear}
            />
          </div>
        </div>
        <div>
          <div className="font-poppins text-[24px]">Month:</div>
          <div className="h-[40px]">
            <NumberDropDown
              min={1}
              max={12}
              selected={month}
              setNumber={setMonth}
            />
          </div>
        </div>
      </div>
      <div className="h-[750px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={1024}
            height={500}
            data={statistics.map((s) => {
              return { name: s.name, "Number of orders": s.numberOfOrders };
            })}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar maxBarSize={60} dataKey="Number of orders" fill="#9EB384" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
