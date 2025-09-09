import Image from "next/image";
export default function CertificateCard(payload: {
  title: string;
  provider: string;
  url: string;
  img: string;
}) {
  const { title, provider, img: src, url } = payload;
  const openCertificate = () => {
    window.open(url, "_blank")?.focus();
  };
  return (
    <div
      className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-md hover:cursor-pointer transition-shadow"
      onClick={openCertificate}
    >
      <div className="relative h-6 min-w-6">
        <Image
          src={`/providers/${src}`}
          alt={title + provider + " cert"}
          fill
          objectFit="contain"
          unoptimized
        />
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{provider}</div>
      </div>
    </div>
  );
}
