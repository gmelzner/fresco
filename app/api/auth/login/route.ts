import { NextRequest, NextResponse } from "next/server";
import { signToken, setAuthCookie } from "@/lib/auth";

// Parse ADMIN_USERS env: "user1:pass1,user2:pass2"
// Falls back to legacy ADMIN_USER/ADMIN_PASSWORD for backwards compat
function getValidUsers(): Map<string, string> {
  const users = new Map<string, string>();

  const adminUsers = process.env.ADMIN_USERS;
  if (adminUsers) {
    for (const pair of adminUsers.split(",")) {
      const [u, p] = pair.split(":");
      if (u && p) users.set(u.trim(), p.trim());
    }
  }

  // Legacy fallback
  if (users.size === 0 && process.env.ADMIN_USER && process.env.ADMIN_PASSWORD) {
    users.set(process.env.ADMIN_USER, process.env.ADMIN_PASSWORD);
  }

  return users;
}

export async function POST(request: NextRequest) {
  const { user, password } = await request.json();
  const validUsers = getValidUsers();

  if (validUsers.get(user) === password) {
    const token = await signToken(user);
    await setAuthCookie(token);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "Usuario o contraseña incorrectos" },
    { status: 401 }
  );
}
