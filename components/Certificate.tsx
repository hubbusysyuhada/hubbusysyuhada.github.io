import Image from "next/image";
// https://www.hackerrank.com/certificates/iframe/641538fc023a
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
        />
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{provider}</div>
      </div>
    </div>
  );
}
