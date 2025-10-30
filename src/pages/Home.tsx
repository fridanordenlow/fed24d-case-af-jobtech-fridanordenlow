import { Welcome } from '../components/Welcome';
import { LatestAdsPresentation } from '../components/LatestAdsPresentation';
import { JobsStatisticsChart } from '../components/JobsStatisticsChart';

export const Home = () => {
  return (
    <>
      <Welcome />
      <JobsStatisticsChart />
      <LatestAdsPresentation />
    </>
  );
};
