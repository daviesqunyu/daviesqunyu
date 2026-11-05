import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const chapters = ["contents", "about", "work", "projects", "craft", "marks", "listen", "frames", "write"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (path === "/") {
    return NextResponse.rewrite(new URL("/book.html", request.url));
  }
  const name = path.slice(1);
  if (chapters.includes(name)) {
    return NextResponse.rewrite(new URL(`/${name}/index.html`, request.url));
  }
  if (path === "/experience") {
    return NextResponse.redirect(new URL("/work", request.url));
  }
  if (path === "/contact") {
    return NextResponse.redirect(new URL("/write", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/contents",
    "/contents/",
    "/about",
    "/about/",
    "/work",
    "/work/",
    "/projects",
    "/projects/",
    "/craft",
    "/craft/",
    "/marks",
    "/marks/",
    "/listen",
    "/listen/",
    "/frames",
    "/frames/",
    "/write",
    "/write/",
    "/experience",
    "/experience/",
    "/contact",
    "/contact/"
  ]
};
