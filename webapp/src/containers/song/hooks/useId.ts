import { useParams } from 'react-router-dom';

export default function useId() {
  const { id } = useParams<{ id: string }>();
  const songId = parseInt(id ?? '', 10);
  return { songId };
}
