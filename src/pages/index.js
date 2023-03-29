import RootLayout from "./../layouts/layout";
import { useEffect, useState, forwardRef, useContext } from "react";
import { useRouter } from "next/router";
import LoadingModal from "./../components/LoadingModal/LoadingModal";

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    router.push("/login");
    setLoading(false);
  }, []);

  return (
    <>
      <RootLayout>
        <main>
          <LoadingModal open={loading} onClose={setLoading}>
            Loading...
          </LoadingModal>
        </main>
      </RootLayout>
    </>
  );
}
