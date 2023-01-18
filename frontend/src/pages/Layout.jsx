import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingMask from "./../components/LoadingMask";

function Layout({ changeWorkType, changeTitle }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Header changeWorkType={changeWorkType} changeTitle={changeTitle} />
      {loading ? <LoadingMask loading={loading} /> : <Outlet />}
    </>
  );
}

export default Layout;
