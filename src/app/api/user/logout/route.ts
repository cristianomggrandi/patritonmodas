import AuthService from "@/modules/auth/session/session-token"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    AuthService.destroySession()

    return NextResponse.redirect(new URL("/", req.url))
}
