import { useRouter } from 'next/router';

const Vehicle = () => {
  const router = useRouter();
  return <p>Véhicule: {router.query.slug}</p>;
};

export default Vehicle;
