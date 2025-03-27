import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "unknown";

  if (country === "IN") {
    return NextResponse.redirect("https://www.google.com/");
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
