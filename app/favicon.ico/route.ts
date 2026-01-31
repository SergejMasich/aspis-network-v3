export const runtime = "edge";

export async function GET() {
  // Отдаём 204 No Content, но без 404 => не портит метрики
  return new Response(null, {
    status: 204,
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
