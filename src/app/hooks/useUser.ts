// hooks/useUser.ts
"use client";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/api";

type User = {
  full_name?: string;
  phone?: string;
  default_location_text?: string;
  [k: string]: any;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    let mounted = true;
    fetch(`${API_URL}/me/`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Invalid token");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setUser(data);
      })
      .catch(() => {
        // invalid token -> remove it and clear user
        localStorage.removeItem("token");
        if (mounted) setUser(null);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { user, loading, setUser };
}
