import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { supabase } from "../services/supabase";

const ProtectedRoute = ({ children }) => {
  const [session, setSession] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    // Get Current Session
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);

        setLoading(false);
      });

    // Listen Auth Changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#eaedfe]">

        <div className="text-[#363b6c] text-lg font-semibold">
          Loading...
        </div>

      </div>
    );
  }

  // No Session
  if (!session) {
    return <Navigate to="/" replace />;
  }

  // Logged In
  return children;
};

export default ProtectedRoute;