import { useEffect } from "react";

import ModalLogin from "components/admin/ModalLogin";
import { useAuth } from "store/context";

function Layout(props) {
  const { needLogin, login } = useAuth();

  useEffect(() => {
    const hasKey = localStorage.getItem('grert4rt');
    if (hasKey) {
      login(hasKey)
    } 
  }, [login]);

  return (
    <>
      {needLogin && <ModalLogin />}
      {props.children}
    </>
  );
}

export default Layout;
