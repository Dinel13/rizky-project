import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withAuth(WrappedComponent) {
  const Wrapper = props => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();

    if (!isAuthenticated) {
      router.replace('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async ctx => {
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps };
  };

  return Wrapper;
}
