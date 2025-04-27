import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

const middleware = (req: NextRequest): NextResponse => {
  const response = intlMiddleware(req);

  let userCountry = req.cookies.get("userCountry")?.value;
  if (!userCountry) {
    userCountry = req.headers.get("x-vercel-ip-country") || "US";
    response.cookies.set("userCountry", userCountry, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
  }

  return response;
};

export default middleware;

export const config = {
  matcher: ["/", "/(en|es)/:path*"],
};
