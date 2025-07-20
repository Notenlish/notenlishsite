import { ImageResponse } from "next/og";
import { metaData } from "app/lib/config";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || metaData.title;

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center text-black dark:text-white bg-gradient-to-br from-white to-neutral-200 dark:from-neutral-900 dark:to-neutral-800" style={{ backgroundImage: "linear-gradient(to bottom right, oklch(100% 0 0), oklch(83% 0 0))" }}>
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold text-left">{title}</h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
