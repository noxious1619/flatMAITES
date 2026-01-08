import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/app/lib/prisma";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session.user.id as string, // Cast as string since we know it's there from options.ts
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                phoneNumber: true,
                contactLink: true,
                college: true,
                isBlacklisted: true,
                emailVerified: true // for "Verified Student" badge check
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return NextResponse.json(
            { error: "Failed to fetch user profile" },
            { status: 500 }
        );
    }
}

export async function PATCH(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user || !session.user.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { name, college, phoneNumber, contactLink, image } = body;

        // Validation (basic)
        if (name && name.length < 2) {
            return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: session.user.id as string,
            },
            data: {
                name,
                college,
                phoneNumber,
                contactLink,
                image
            },
        });

        return NextResponse.json(updatedUser);

    } catch (error) {
        console.error("Error updating user profile:", error);
        return NextResponse.json(
            { error: "Failed to update user profile" },
            { status: 500 }
        );
    }
}
