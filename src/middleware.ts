import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const sectionRedirects: Record<string, string> = {
  "/about": "/flight.html#about",
  "/projects": "/flight.html#routes",
  "/experience": "/flight.html#line",
  "/contact": "/flight.html#arrival"
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === "/") {
    return NextResponse.rewrite(new URL("/flight.html", request.url));
  }
  const target = sectionRedirects[path];
  if (target) {
    return NextResponse.redirect(new URL(target, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/about", "/projects", "/experience", "/contact"]
};
