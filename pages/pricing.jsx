import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import PricingComp from "components/PricingComp";

export default function Disease() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = () => {
      if (status === "unauthenticated") {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  });

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin
      title="Pricing"
      headerText="Our Pricing Models"
      image={session.user.image}
    >
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <PricingComp user={session.user} />
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;

  return {
    props: {
      session,
      userId,
    },
  };
}
