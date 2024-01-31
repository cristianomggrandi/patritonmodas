import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const req = await request.json()

    const res = await prisma.user.findUnique({
        where: {
            email: req.email,
        },
    })

    return NextResponse.json(res)
}
