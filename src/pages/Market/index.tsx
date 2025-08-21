import Container from '@/components/Container';

export default function Market() {
  return (
    <Container>
      <p className="text-2xl font-bold">今日热点</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="text-lg font-bold">今日热点</p>
        </div>
      </div>
    </Container>
  );
}
