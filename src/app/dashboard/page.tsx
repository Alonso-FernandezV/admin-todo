import WidgetItem from "@/components/widgetitem/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {


  const session = await getServerSession(authOptions);

  if(!session){
    redirect('/api/auth/signin');
  }


  return (
    <div className="grid gap-6 grid-cols-1 text-blue-500">
      <WidgetItem title="Usuario Conectado server side">
        <div className="flex flex-col">
          <span>{session.user?.name}</span>
          <span>{session.user?.email}</span>
          <span>{session.user?.image}</span>


          <div>
            {JSON.stringify(session)}
          </div>
        </div>
      </WidgetItem>
    </div>
  );
}