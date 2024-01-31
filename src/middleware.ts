import { NextRequest, NextResponse } from "next/server"
import AuthService from "./modules/auth/session/session-token"

export const config = {
    matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
}

// const publicRoutes = ["/", "/portal/cadastro", "/portal/login"]
const notLoggedRoutes = ["/login", "/cadastro"]

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    const isLogged = await AuthService.isSessionValid()

    if (notLoggedRoutes.includes(pathname)) {
        if (!isLogged) return NextResponse.next()
        else return NextResponse.redirect(new URL("/", req.url))
    }

    // if (!session) {
    //     const isAPIRoute = pathname.startsWith("/api")

    //     if (isAPIRoute) {
    //         return NextResponse.json({ message: "Não autorizado" }, { status: 401 })
    //     }

    //     return NextResponse.redirect(new URL("/portal/login", req.url))
    // }

    return NextResponse.next()
}
