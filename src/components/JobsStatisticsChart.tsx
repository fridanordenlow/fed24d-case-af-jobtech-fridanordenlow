import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { countJobsPerMunicipality } from '../helpers/countJobsPerMunicipality';
import { useAdContext } from '../hooks/useAdContext';
import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { ChartWrapper } from './styled/Wrappers';

export const JobsStatisticsChart = () => {
  const { ads } = useAdContext();

  if (ads.length === 0) {
    return;
  }

  const data = countJobsPerMunicipality(ads);

  return (
    <ChartWrapper>
      <DigiTypography>
        <h3>Översikt över antal jobb per ort</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              cursor={false}
              formatter={(value: number) => [`${value}`, 'Antal jobb']}
            />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </DigiTypography>
    </ChartWrapper>
  );
};
