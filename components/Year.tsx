"use client";
import React from "react";

export default function Year() {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return <span>{year}</span>;
}
