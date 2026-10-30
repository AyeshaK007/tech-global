import { servicesData } from "@/data/services";
import ServiceDetail from "@/components/services/ServiceDetail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}