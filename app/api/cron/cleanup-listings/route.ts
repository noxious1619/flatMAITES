import { NextResponse } from "next/server";
import  prisma from "@/app/lib/prisma";

export async function GET() {
  const NINETY_DAYS = 90 * 24 * 60 * 60 * 1000;
  const cutoffDate = new Date(Date.now() - NINETY_DAYS);

  const result = await prisma.listing.updateMany({
    where: {
      createdAt: { lt: cutoffDate },
      isAvailable: true
    },
    data: {
      isAvailable: false
    }
  });

  return NextResponse.json({
    success: true,
    expiredListings: result.count
  });
}


