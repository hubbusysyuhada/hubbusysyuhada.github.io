import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { ExperienceType, PositionType } from "@/variables/experience";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function MultipleExperienceCard(payload: {
  experience: ExperienceType;
}) {
  const [positionIdx, setPositionIdx] = useState(-1);
  const [imgIdx, setImgIdx] = useState(-1);
  const { experience } = payload;
  const monthDifferences = (position: PositionType) => {
    const start = position.from;
    const end = position.isPresent
      ? `${new Date().getMonth()}/${new Date().getFullYear()}`
      : position.to;
    const [startMonth, startYear] = start.split("/").map(Number);
    const [endMonth, endYear] = end.split("/").map(Number);
    const totalMonths =
      (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const yearPart = years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "";
    const monthPart =
      months > 0 ? `${months} ${months === 1 ? "mo" : "mos"}` : "";
    return [yearPart, monthPart].filter(Boolean).join(" ");
  };

  const formatMonthYear = (input: string) => {
    const [month, year] = input.split("/").map(Number);
    const date = new Date(year, month - 1);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const timeline = (position: PositionType) => {
    return `${formatMonthYear(position.from)} - ${
      position.isPresent ? "Present" : formatMonthYear(position.to)
    }`;
  };

  const badgeVariant = useMemo(() => {
    const isPresent = experience.positions.some((p) => p.isPresent);
    if (isPresent) return "default";
    return "outline";
  }, [experience]);

  const overallTimeline = useMemo(() => {
    const isPresent = experience.positions.some((p) => p.isPresent);
    const start = experience.positions[experience.positions.length - 1].from;
    const end = experience.positions[0].to;
    return `${formatMonthYear(start)} - ${
      isPresent ? "Present" : formatMonthYear(end)
    }`;
  }, [experience]);

  const overallMonthDifferences = useMemo(() => {
    const isPresent = experience.positions.some((p) => p.isPresent);
    const start = experience.positions[experience.positions.length - 1].from;
    const end = isPresent
      ? `${new Date().getMonth()}/${new Date().getFullYear()}`
      : experience.positions[0].to;
    const [startMonth, startYear] = start.split("/").map(Number);
    const [endMonth, endYear] = end.split("/").map(Number);
    const totalMonths =
      (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const yearPart = years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "";
    const monthPart =
      months > 0 ? `${months} ${months === 1 ? "mo" : "mos"}` : "";
    return [yearPart, monthPart].filter(Boolean).join(" ");
  }, [experience]);

  const next = () => {
    if (imgIdx === experience.positions[positionIdx].media.length - 1)
      setImgIdx(0);
    else setImgIdx(imgIdx + 1);
  };

  const prev = () => {
    if (!imgIdx) setImgIdx(experience.positions[positionIdx].media.length - 1);
    else setImgIdx(imgIdx - 1);
  };

  return (
    <Card className="relative px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 !items-start">
        <CardTitle className="flex items-center">
          <div className="relative h-10 min-w-10 mr-2">
            <Image
              src={`/companies/${experience.img}`}
              alt={experience.company + " logo"}
              fill
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl">{experience.company}</p>
            <p className="font-normal text-muted-foreground">
              {experience.type} · {overallMonthDifferences}
            </p>
          </div>
        </CardTitle>
        <Badge variant={badgeVariant}>{overallTimeline}</Badge>
      </div>

      <div className="pl-5 md:pl-8">
        {experience.positions.map((position, key) => (
          <div key={key}>
            <div className={"flex flex-row"}>
              <div className="divider mr-5 flex flex-col items-center">
                <div className="mt-2 w-3 h-3 bg-secondary rounded-lg"></div>
                <div
                  className={`${
                    key === experience.positions.length - 1 ? "hidden" : ""
                  } mt-2 w-[3px] h-full bg-secondary rounded-lg`}
                ></div>
              </div>
              <div className={key ? "" : "mb-5"}>
                <p className="text-lg font-semibold">{position.title}</p>
                <p className="font-normal text-muted-foreground">
                  {timeline(position)} · {monthDifferences(position)}
                </p>
                {position.description}

                <div
                  className={
                    position.media.length
                      ? "flex flex-col md:flex-row mt-3 md:mt-5"
                      : "hidden"
                  }
                >
                  <Dialog>
                    {position.media.map((url, mediaKey) => (
                      <DialogTrigger asChild key={mediaKey}>
                        <div
                          className="w-[120px] h-[60px] mr-4 rounded-md border-1 relative md:mt-0 mt-3"
                          onClick={() => {
                            setPositionIdx(key);
                            setImgIdx(mediaKey);
                          }}
                        >
                          <Image
                            src={url}
                            alt={"media " + mediaKey}
                            fill
                            objectFit="contain"
                            className="rounded-md hover:cursor-pointer"
                          />
                        </div>
                      </DialogTrigger>
                    ))}

                    <DialogContent
                      showCloseButton={false}
                      className="!border-0 !items-center !shadow-none !p-0 !w-[75%] !md:w-[90%]"
                    >
                      <DialogTitle className="hidden" />
                      <div className="flex items-center justify-center">
                        <div
                          className={
                            position.media.length < 2
                              ? "hidden"
                              : "bg-[#FFFFFF] h-8 w-8 rounded-4xl flex justify-center items-center absolute left-[-40px] z-10 hover:cursor-pointer"
                          }
                          onClick={prev}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </div>
                        <div
                          className={
                            position.media.length < 2
                              ? "hidden"
                              : "bg-[#FFFFFF] h-8 w-8 rounded-4xl flex justify-center items-center absolute right-[-40px] z-10 hover:cursor-pointer"
                          }
                          onClick={next}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </div>
                        <div className="max-h-[90vh] w-auto overflow-hidden mx-auto !border-0">
                          <Image
                            src={position.media[imgIdx]}
                            alt="Descriptive alt text"
                            width={1920}
                            height={1080}
                            className="h-auto max-h-[90vh] w-auto"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
