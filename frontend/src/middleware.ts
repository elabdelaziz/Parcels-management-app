import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("token");
  let url = req.url;
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // if (verify && url === "http://localhost:3000/") {
  //   return NextResponse.redirect(new URL(req.referrer || "/", req.url));
  // }
}
