import { RouterOutput } from "@/shared/api";
import Link from "next/link";

type EventDetail = NonNullable<RouterOutput["event"]["findUnique"]>;

type EventDetailProps = EventDetail & {
  isShowEditButton: boolean;
};

export const EventDetail = ({
  id,
  title,
  description,
  date,
  participations,
  author,
  isShowEditButton,
}: EventDetailProps) => {
  return (
    <div>
      <div className="px-4 sm:px-0 flex items-center gap-4 justify-between py-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Информация о событии
        </h3>

        <Link
          href={`/events/edit/${id}`}
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 align-middle leading-10 bg-blue-600 text-white"
          style={isShowEditButton ? {} : { display: "none" }}
        >
          Редактировать событие
        </Link>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Название
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {title}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Описание
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Автор
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {author.name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Дата проведения
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {date.toLocaleDateString()}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Участники
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {participations.map(({ user }) => user.name).join(", ")}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
