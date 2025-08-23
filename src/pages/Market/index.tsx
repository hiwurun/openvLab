import Container from '@/components/Container';
import MarketTable from './components/MarketTable';
import TodayHot from './components/TodayHot';

export default function Market() {
  return (
    <Container>
      <TodayHot />
      <MarketTable />
    </Container>
  );
}
