import { ImageResponse } from 'next/og';

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get('title') || 'リッキー Ricky';
  let imageUrl = url.searchParams.get('image') || 'https://ultimate-dev.vercel.app/og-img.png';

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <img src={imageUrl} alt="Open Graph Image" tw="w-full h-auto" />
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 450,
      height: 450,
    }
  )
}
