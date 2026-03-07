import { NextRequest, NextResponse } from "next/server";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { user, password } = await request.json();

  if (
    user === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = await signToken(user);
    await setAuthCookie(token);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "Usuario o contraseña incorrectos" },
    { status: 401 }
  );
}
