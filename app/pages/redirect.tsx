
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect users to the homepage
    router.push('/');
  }, []);

  return null;
};

export default RedirectPage;
