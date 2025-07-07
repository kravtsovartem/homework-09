import { EventDetail } from "@/entities/event";
import { EditEventSchema, trpc } from "@/shared/api";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { EditEventForm } from "@/features/edit-event";

export default function Event() {
  const router = useRouter();
  const session = useSession();

  const { data, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  });

  const { mutate } = trpc.event.edit.useMutation({
    onSuccess: (data) => {
      router.push(`/events/${data.id}`);
    },
  });

  const handleSubmit = (data: EditEventSchema) => {
    mutate(data);
  };

  if (isLoading) {
    return "Loading...";
  }

  if (session.status === "unauthenticated") {
    return "Forbidden";
  }

  if (!data) {
    return "No data";
  }

  return (
    <EditEventForm
      {...data}
      onSubmit={handleSubmit}
      onCancel={() => router.replace(`/events/${data.id}`)}
    />
  );
}
