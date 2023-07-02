"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavBar = () => {
  const searchParams = useSearchParams();
  const todofilter = searchParams.get("todos");
  console.log(todofilter, "filteration");
  return (
    <nav>
      <Link href="/" className={todofilter === null ? "active" : ""}>
        All
      </Link>
      <Link
        href="/?todos=completed"
        className={todofilter === "completed" ? "active" : ""}
      >
        Completed
      </Link>
      <Link
        href="/?todos=active"
        className={todofilter === "active" ? "active" : ""}
      >
        active
      </Link>
    </nav>
  );
};

export default NavBar;
